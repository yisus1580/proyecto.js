const express = require('express');
const empleado = express.Router(); 
const db = require('../config/database');

empleado.post("/",async(req,res,next)=>{
	const {emp_name , emp_lastname , emp_mail, emp_phone , emp_address} = req.body;

	if(emp_name && emp_lastname && emp_mail && emp_phone && emp_address){
	let query = "INSERT INTO empleado( emp_name , emp_lastname , emp_mail,emp_phone , emp_address)";
	query += ` VALUES('${emp_name}', '${emp_lastname}', '${emp_mail}', ${emp_phone}, '${emp_address}')`;

	const rows = await db.query(query);
	if (rows.affectedRows == 1){

		return res.status(201).json({code: 201 , message:"Empleado creado"});
		}
		return res.status(500).json({code: 500 , message:"Ocurrio un error"});	
	}	
	 return res.status(500).json({code: 500 , message:"Campos Incompletos"});
	 console.log(rows);	
 });

 empleado.get('/', async(req,res,next)=>{
 	const emp = await db.query("SELECT * FROM empleado");
 	return res.status(200).json({code: 200, message:emp});
 });

 empleado.get('/:id([0-9]{1,3})',async(req,res,next)=> {
 	const id=req.params.id ;
 	if(id >= 1 && id <= 150){
 		const emp = await db.query("SELECT * FROM empleado WHERE emp_id="+id+";");
 	return res.status(200).json({code: 200, message:emp});	
	}
	return res.status(404).send({code:404,message:"No se encontro o no existe el empleado con el id que escribio"});
 });

 empleado.get('/:name([A-Za-z]+)', async(req,res,next)=> {
 	const name = req.params.name;
 	const emp = await db.query("SELECT * FROM empleado WHERE emp_name='"+name+"';");
 	if(emp.length > 0){
 		return res.status(200).json({code: 1, message:emp});
 	} 
		return res.status(404).send({code:404,message:"No se encontro o no existe el empleado con el id que escribio"});
 });

 module.exports = empleado ;