 function konverter() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fraEnhet = document.getElementById("unitSelect").value;
    var tilEnhet;
    var resultat;
    switch (fraEnhet) {
        case "liter":
        tilEnhet = "gallon";
        resultat = inputValue * 0.264172; 
    break;
        case "gallon":
        tilEnhet = "liter";
        resultat = inputValue * 3.78541; 
    break;
        case "ounces":
        tilEnhet = "liter";
        resultat = inputValue * 0.0295735; 
    break;
        case "cups":
        tilEnhet = "liter";
        resultat = inputValue * 0.236588; 
    break;
        case "spiseskjeer":
        tilEnhet = "liter";
        resultat = inputValue * 0.0147868; 
        break;
     default:        
        console.log("Ukjent enhet");
        return;
    }
    document.getElementById("result").innerText = inputValue + " " + fraEnhet + " tilsvarer " + resultat.toFixed(2) + " " + tilEnhet;
}
