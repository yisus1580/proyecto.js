module.exports = (req,res,next)=>{
 	return res.status(200).json({code: 1, message: "Bienvenido a la lista de empleados de la empresa"});
 }