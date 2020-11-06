window.onload = function() {
	
	var searchButton = document.getElementsByTagName("button")[0];
	var result = document.getElementById("result");
	var noHero = document.getElementById("noneFound");
	/* var noHero2 = document.getElementsByTagName("noneFound"); */
	var heroAlias = document.getElementById("alias");
	var heroName = document.getElementById("name");
	var heroBg = document.getElementById("biography");
	
	searchButton.addEventListener("click", function(e){
		
		e.preventDefault();
		var inputField = document.getElementById("input").value;
		var xhttp = new XMLHttpRequest();
		noHero.innerHTML = "";
		heroAlias.innerHTML = "";
		heroName.innerHTML = "";
		heroBg.innerHTML = "";
		result.innerHTML = "";
		xhttp.open("GET", "superheroes.php?q="+inputField, true);
		
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4){
				if(xhttp.status == 200){
					// var avenger = JSON.parse(xhttp.responseText);
					if (inputField.length !== 0){
						var avenger = JSON.parse(xhttp.responseText);
						if (avenger == "Superhero not found"){
							noHero.innerHTML = avenger;
							noHero.classList.add("noneFound");
							
						}else{
						heroAlias.innerHTML = avenger.alias.toUpperCase();
						heroName.innerHTML = "A.K.A " + avenger.name.toUpperCase();
						heroBg.innerHTML = avenger.biography;
						// alert(xhttp.responseText);
						}
					}else{
						result.innerHTML = xhttp.responseText;
					}
				}
			}
		}
		xhttp.send();
	});
}