function Klient() {
  document.getElementById("klient").style.display = "inline"; 
  document.getElementById("adres").style.display = "none";
  document.getElementById("kontakt").style.display = "none";        
}

function Adres() {
  document.getElementById("klient").style.display = "none";  
  document.getElementById("adres").style.display = "inline"; 
  document.getElementById("kontakt").style.display = "none";         
}

function Kontakt() {
  document.getElementById("klient").style.display = "none";  
  document.getElementById("adres").style.display = "none"; 
  document.getElementById("kontakt").style.display = "inline";         
}



const pasek = document.getElementById("pasek");
let procent = 4;
const krok = 12;

const ustaw = p => {
    procent = Math.min(100, Math.max(0, p));
    pasek.style.width = procent + "%";
};
ustaw(procent);

const inputs = document.querySelectorAll(".formularz input");
const uzupelnione = new WeakSet();

window.zwiekszPostep = function (el) {
    if (!el) return;
    
    let wpisane = false;
    if (el.type === "checkbox") {
        wpisane = el.checked;
    } else {
        wpisane = el.value.trim() !== "";
    }

    if (wpisane && !uzupelnione.has(el)) {
        uzupelnione.add(el);
        ustaw(procent + krok);
    }
};
