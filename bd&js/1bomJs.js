
function windowSizeInner(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    alert("Širina: " + w + ", " + "Visina: " + h);
}

function windowSizeClient(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    alert("Širina: " + w + ", " + "Visina: " + h);
}

function getResolution() {
    alert("Vaš rezolucija je: " + screen.width + "x" + screen.height);
}

function getAvailSize() {
    alert("Dostupna širina ekrana: " + screen.availWidth + ", Height: " + screen.availHeight);
}

function getColorDepth() {
    alert("Dubina boje vašeg ekrana je: " + screen.colorDepth);
}

function getPixelDepth() {
    alert("Dubina piksela vašeg ekrana je: " + screen.pixelDepth);
}

function getURL() {
    alert("URL ove stranice je: " + window.location.href);
}

function getViews() {
    alert("Posetio si " + history.length + " web stranice u ovoj sesiji.");
}

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function checkCookieEnabled() {
    navigator.cookieEnabled ? alert("Kolačići su omogućeni u vašem pretraživaču.") : alert("Kolačići su onemogućeni u vašem pretraživaču.");    
}

function checkLanguage() {
    alert("UI jezik vašeg pretraživača je: " + navigator.language);
}

function getBrowserInformation() {
    var info = "\n App Name: " + navigator.appName;
       info += "\n App Version: " + navigator.appVersion;
       info += "\n App Code Name: " + navigator.appCodeName;
       info += "\n User Agent: " + navigator.userAgent;
       info += "\n Platform: " + navigator.platform;
  
      alert("Evo informacija vezanih za vaš pretraživač: " + info);
  }

function checkJavaEnabled() {
    navigator.javaEnabled() ? alert("U vašem pretraživaču je omogućena Java.") : alert("U vašem pretraživaču nije omogućena Java.");
}  

var message = "Zdravo! Kliknite OK da biste nastavili.";
    alert(message);
     
/* Sledeći se red neće izvršiti dok ne odbacite prethodno upozorenje */
    alert("Ovo je još jedan okvir za upozorenje.");


var result = confirm("Jesi li siguran?");
    result ? document.write("Kliknuli ste dugme OK!") : document.write("Kliknuli ste dugme Odustani!");
    

var name = prompt("Koje je tvoje ime?");
    (name.length > 0 && name != "null") ? document.write("Pozdrav, " + name) : document.write("Anonimno!");
   

function myFunction() {
    alert('Hello World!');
}

function showTime() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
setInterval(showTime, 1000);


var match = document.getElementById("strong");
match.style.background = "green";