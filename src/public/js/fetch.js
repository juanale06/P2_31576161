const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',e=>{
	e.preventDefault();
	const token = grecaptcha.getResponse();
	if (!token) {
		alert("Por favor, ¡completa el RECAPTCHA para continuar!");
		return;
	}
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
    data['g-recaptcha-response'] = token;
    fetch('/contact/add',{
    	method:'POST',
    	headers:{
    		"Content-Type":"application/json"
    	},
    	body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
    	if(res.status==true){
    		Swal.fire('¡Datos de Contacto creados Correctamente!');
    	}else{
    		Swal.fire('¡Los Datos no se crearon, verifica que coño estas haciendo mal!');
    	}
    })

});
