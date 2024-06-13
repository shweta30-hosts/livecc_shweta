function convert()
{
	event.preventDefault();
	let amt=document.getElementById("amt");
	let msg=document.getElementById("msg");
	
	if(amt.value=="")
	{
		alert("u did not enter amt");
		msg.innerHTML="";
		amt.focus();
		return;
	}
	
	let a= parseFloat(amt.value);
	let url="https://api.exchangerate-api.com/v4/latest/USD";
	fetch(url)
	.then(res=>res.json())
	.then(data=>{
			let dollar=data.rates.INR;
			let rupees=dollar * a;
			let ans="\u20B9"+rupees.toFixed(2);
			msg.innerHTML=ans;
	})
	.catch(err=>alert("issue"+err));	
}