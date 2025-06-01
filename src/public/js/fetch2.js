const formularioPayment = document.getElementById('formularioPayment');
formularioPayment.addEventListener('submit',e=>{
	e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
	fetch('/payment/add',{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(data)
	})
	.then(res=>res.json())
	.then(res=>{
		if(res.status){
        alert(`¡Pago realizado! id: ${res.transactionId}`);
		}else{
		alert('No se pudo realizar el pago!');
		}
	})

});