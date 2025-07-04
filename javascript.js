let nombreArchivo = '';
function goURL()
{
	const input=document.getElementById("texto").value;
  	window.location.href="https://www.google.com/search?q="+input;
         input.value = "";
	 itexto.value = "";
}

function mi_funcion()
{
 	window.location.href="https://www.youtube.com/@Mexicatronica/featured";
}

function obtenerNombre() 
{
  	const fileInput = document.getElementById('selec_imagen');
  	const archivo = fileInput.files[0];

  if (archivo) 
  {
    	nombreArchivo = archivo.name;
    	console.log("Nombre del archivo:",nombreArchivo);
  } else {
    	console.log("No se seleccionó ningún archivo.");
  }
}

function search_image()
{
  	window.location.href="https://www.google.com/search?q="+nombreArchivo;
}

function goSearch()
{
	document.getElementById("texto4").value="-"+document.getElementById("texto4").value;
	document.getElementById("texto2").value="'"+document.getElementById("texto2").value+"'";
	var ctext=document.getElementById("texto1").value +' '+
	document.getElementById("texto3").value +' '+
	document.getElementById("texto2").value +' '+
	document.getElementById("texto4").value;
  	window.location.href="https://www.google.com/search?q="+ctext;

	document.getElementById("texto1").value="";
	document.getElementById("texto2").value="";
	document.getElementById("texto3").value="";
	document.getElementById("texto4").value="";
}
