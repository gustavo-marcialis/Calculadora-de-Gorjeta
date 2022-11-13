function imc() {
	var consumo = document.getElementById("consumo").value;
	var gorjeta = document.getElementById("gorjeta").value;
	consumo = parseFloat(consumo);
	gorjeta = parseInt(gorjeta);

	var calculo = (consumo*gorjeta)/100;
	calculo = parseFloat(calculo);
	var soma = calculo+consumo;

	var resultado = document.getElementById("valorgorjeta").innerHTML = "Valor da Gorjeta:  R$ "+calculo.toFixed(2);
	var resultado2 = document.getElementById("resultado").innerHTML= "Total a Pagar: R$ "+soma.toFixed(2);

}