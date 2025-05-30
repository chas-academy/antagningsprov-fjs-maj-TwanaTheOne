

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
    function summera(tal1, tal2) {
        return tal1 + tal2; // Returnera summan av de två talen
    }   
    let resultat = summera(5, 10); // Kalla på funktionen med argumenten 5 och 10
    return resultat; // Returnera resultatet    
            
 
}

module.exports = { uppg7 };