window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init(){
	if (localStorage.getItem("token")){
		headers = {
			headers:{
				'Authorization': "bearer " + localStorage.getItem("token")
			}
		}
		load();
	}
	else{
		window.location.href = "index.html"; 
	}
}

function load(){
	axios.get(url+ "/empleado", headers
	).then(function(res) {
		console.log(res);
		display(res.data.message );
	}).catch(function(err){
		console.log(err);
	})
}

function display(empleado) {
	var body = document.querySelector("body");
	for (var i = 0; i<empleado.length; i++){
		body.innerHTML += `<h3>Id:${empleado[i].emp_id}  Nombre:  ${empleado[i].emp_name}   Apellidos:  ${empleado[i].emp_lastname}   </h3>` ;
	}
}