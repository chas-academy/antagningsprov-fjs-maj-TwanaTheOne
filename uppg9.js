

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    function sort(siffror) {
        for (let i = 0; i < siffror.length; i++) {
            if (siffror[i] % 2 === 0) { // Kontrollera om talet är jämt
                console.log(siffror[i], "jämt"); // Skriv ut talet och "jämt"
            } else {
                console.log(siffror[i], "udda"); // Skriv ut talet och "udda"
            }
        }
    }   
    let siffror = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Skapa en array med siffror
    sort(siffror); // Anropa funktionen med arrayen som argument        

  
}

module.exports = { uppg9 };