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



    const pasek = document.getElementById('pasek');
    let procent = 4;                // start jak w CSS
    const KROK = 12;

    const ustaw = p => {
    procent = Math.min(100, Math.max(0, p)); // clamp 0..100
    pasek.style.width = procent + '%';
    };
    ustaw(procent);

    // --- 1) Funkcja zmieniająca wartość paska po utracie focusa ---
    function inkrementujPasekPoBlur() {
    ustaw(procent + KROK);        // +12% za każdym razem
    }

    // Nasłuchujemy utraty focusa na dowolnym polu edycyjnym w formularzu
    const form = document.getElementById('formularz');

    // 'focusout' bąbelkuje (w przeciwieństwie do 'blur'), więc wystarczy jeden listener:
    form.addEventListener('focusout', (e) => {
    // reagujemy tylko na typowe kontrolki edycyjne
    const el = e.target;
    if (el.matches('input, textarea, select')) {
        // Uproszczenie z treści zadania: każda utrata focusa = „wpisano dane”
        inkrementujPasekPoBlur();
    }
    });




        // --- 2) Funkcja zatwierdzająca ---
    function zatwierdzDane() {
    // Pobieramy wszystkie inputy/textarea/selecty posiadające name (żeby ładnie je podpisać)
    const pola = form.querySelectorAll('input[name], textarea[name], select[name]');
    console.clear();
    console.log('--- Dane z formularza ---');
    pola.forEach(pole => {
        const nazwa = pole.name;
        let wartosc;

        if (pole.type === 'checkbox') {
        wartosc = pole.checked;           // true/false
        } else if (pole.tagName === 'SELECT') {
        wartosc = pole.value;             // wybrana opcja
        } else {
        wartosc = pole.value;             // tekst z input/textarea
        }
        console.log(`${nazwa}:`, wartosc);
    });
    console.log('--- Koniec danych ---');
    }

    document.getElementById('zatwierdz').addEventListener('click', zatwierdzDane);

