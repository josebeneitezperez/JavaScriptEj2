function comprobarDni(){
	var numero = document.getElementById("dni").value;
	text="El DNI es inválido"
	if (/^\d{8}$/.test(numero)) {
		var letra = document.getElementById("dniLetra").value;
		if (letra.toUpperCase() == 'TRWAGMYFPDXBNJZSQVHLCKET'.charAt(numero%23)) {
			//text = "El DNI es válido"
			text = ""
			document.getElementById("dniMensaje").innerHTML = text;
			return;
		}
	}
	document.getElementById("dniMensaje").innerHTML = text;
}

function acuerdoMarcado() {
	var acuerdo = document.getElementById("checkBoxAcuerdo").checked;
        if (!acuerdo) {
			alert("No ha marcado la casilla del acuerdo de servicio");
        }
    }


function cargarPagina() {
    let anioMinimo = 1900;
    let anioMaximo = 2050;
    let anio = 0;

    let comboAnio = document.getElementById("anio");

    for (let i = anioMinimo; i <= anioMaximo; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i);

        let optionText = document.createTextNode(i);
        option.appendChild(optionText);
        comboAnio.appendChild(option);
    }

    let array = [
         "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let comboMes = document.getElementById("mes");

    for (let i = 0; i < array.length; i++) {
        let option=document.createElement("option");
        option.setAttribute("value", i);
        let itexto="";

        switch(i){
            case 1: itexto="enero";
            break;
            case 2: itexto="febrero";
            break;
            case 3: itexto="marzo";
            break;
            case 4: itexto="abril";
            break;
            case 5: itexto="mayo";
            break;
            case 6: itexto="junio";
            break;
            case 7: itexto="julio";
            break;
            case 8: itexto="agosto";
            break;
            case 9: itexto="septiembre";
            break;
            case 10: itexto="octubre";
            break;
            case 11: itexto="noviembre";
            break;
            case 12: itexto="diciembre";
            break;
        }

		let optionText=document.createTextNode(itexto);
        option.appendChild(optionText);
        comboMes.appendChild(option);
    }
}

function cargarNumeroDias(){
    let comboDia=document.getElementById("dia");
    var length = comboDia.options.length;
    for (i = comboDia.length - 1; i >= 0; i--) {
       comboDia.remove(i);
    }

    let anio = document.getElementById("anio").value;
    let mes = document.getElementById("mes").value;

    let numeroDias=calcularDiasMes(anio, mes);
	
    for (let i= 1; i <= numeroDias; i++) {
        let option=document.createElement("option");
        option.setAttribute("value", i);
        let optionText=document.createTextNode(i);
        option.appendChild(optionText);
        comboDia.appendChild(option);
    }
}

function calcularDiasMes(anio, mes) {
    let numeroDias = -1;

    switch (mes) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
        numeroDias = 31;
        break;
        case '4':
        case '6':
        case '9':
        case '11':
        numeroDias = 30;
        break;
        case '2':
        if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0)) { //Con esto sé si es bisiesto o no
			numeroDias = 29;
        } else {
            numeroDias = 28;
        }
        break;
    }

    return numeroDias;
}

window.onload = cargarPagina;