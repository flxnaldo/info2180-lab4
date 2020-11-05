window.onload = function() {
	var searchButton = document.getElementById("search");
	var xhttp = new XMLHttpRequest();
	
	searchButton.addEventListener("click", function(e){
		e.preventDefault();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4){
				if(xhttp.status == 200){
					alert(xhttp.responseText);
				}
			};
		}
		xhttp.open("GET", "http://localhost:8080/superheroes.php", true);
		xhttp.send();
	});
}