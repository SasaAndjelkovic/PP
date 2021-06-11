
function najvisiElementHtml () {
    // Prikazivanje vrednosti atributa jezika html elementa
    alert(document.documentElement.getAttribute("lang")); // Ispisuje: en
}

function elementHead () {
    // Prikazivanje imena oznake prvog podređenog elementa
    alert(document.head.firstElementChild.nodeName); // Ispisuje: meta
}

function elementBody () {
    // Postavljanje pozadinske boje elementa
    document.body.style.background = "yellow";
}

function odabirElementaPremaId () {
    // Odabir elementa sa oznakom id
    var match = document.getElementById("mark");
     
    // Isticanje pozadine elementa
    match.style.background = "red"; 
}

function odabirElemenataPremaKlasi () {   
    // Odabir elemenata sa klasom test
    var matches = document.getElementsByClassName("test");
        
    // Primena podebljanog stila na prvi element u odabiru
    matches[0].style.fontWeight = "bold";
    matches[0].style.background = "red";
        
    // Primena kurzivnog stila (italic) na posljednji element u odabiru
    matches[matches.length - 1].style.fontStyle = "italic";

    // Prikaz broja odabranih elemenata
    document.write("Broj odabranih elemenata prema klasi je: " + matches.length);
}

function odabirElemenataPremaNazivuOznake () { 
    // Odabir svih elemenata paragrafa (pasusa)
    var matches2 = document.getElementsByTagName("p");
        
    // Ispis broja odabranih paragrafa (pasusa)
    document.write("Broj odabranih elemenata prema nazivu oznake: " + matches2.length);

    for(var elem in matches2) {  
        matches2[elem].style.background = "yellow";
    }
}
   
function cssSelektori () {   
 // Odabir svih li elemenata
 var matches3 = document.querySelectorAll("ul li");
     
 // Ispis broja odabranih li elemenata
 document.write("Broj odabranih elemenata: " + matches3.length + "<hr>")
  
 // Ispis sadržaja izabranih li elemenata
 for(var elem3 of matches3) {  
     document.write(elem3.innerHTML + "<br>");
 }
  
 // Primena crte kroz stil na prvi li element pomoću oznake klase
 matches3 = document.querySelectorAll("ul li.tick");
 matches3[0].style.textDecoration = "line-through";
 }

function stiloviNaElementima () {
// Odabir elementa
var elem = document.getElementById("mark");
    
// Primena stilova na element
elem.style.color = "blue";
elem.style.fontSize = "18px";
elem.style.fontWeight = "bold";
}

function informacijaOStilu () {
    // Odabir elementa
    var elem = document.getElementById("mark");
     
    // Dobijanje informacija o stilu iz elementa
    alert(elem.style.color);  // Ispisuje: red
    alert(elem.style.fontSize);  // Ispisuje: 20px
}

function izracunateInformacijeStila () {
    // Odabir elemenata
    var elem = document.getElementById("mark");
     
    // Dobijanje izračunatih informacija o stilu
    var styles = window.getComputedStyle(elem);
     
    alert(styles.getPropertyValue("color"));  // Ispisuje: rgb(255, 0, 0)    
    alert(styles.getPropertyValue("font-size"));  // Ispisuje: 20px
    alert(styles.getPropertyValue("font-weight"));  // Ispisuje: 700
    alert(styles.getPropertyValue("font-style"));  // Ispisuje: italic
}

function zamenaCSSKlase () {
    // Odabir elementa
    var elem = document.getElementById("info");
    
    elem.className = "note";  // Dodajte ili zamenite sve klase (class) sa note class
    elem.className += " highlight";  // Dodavanje nove istaknute klase (class)
}

function vrednostAtributa () {
    var link = document.getElementById("myLink");
        
        // Dobijanje vrednosti atributa
        var href = link.getAttribute("href");
        document.write(href); // Ispisuje: https://www.google.com/
}

function dodavanjeNovihElemenata () {
     // Kreiranje novog div elementa
     var newDiv = document.createElement("div");
     
     // Stvaranje tekstualnog čvora
     var newContent = document.createTextNode("Ćao, kako si?");
      
     // Dodavanje čvora teksta u novostvoreni div
     newDiv.appendChild(newContent);
      
     // Dodavanje novostvorenog elementa i njegovog sadržaja u DOM
     var currentDiv = document.getElementById("main"); 
     document.body.appendChild(newDiv, currentDiv);
} 

function removeElement() {
    var parentElem = document.getElementById("main");
    var childElem = document.getElementById("hint");
    parentElem.removeChild(childElem);
  }

  function replaceParagraph() {
    var parentElem = document.getElementById("main");
    var oldPara = document.getElementById("hint");

    // Kreiranje novog elementa
    var newPara = document.createElement("p");
    var newContent = document.createTextNode("Ovo je novi paragraf.");
    newPara.appendChild(newContent);

    // Zamena starog paragrafa sa novostvorenim
    parentElem.replaceChild(newPara, oldPara);
} 
