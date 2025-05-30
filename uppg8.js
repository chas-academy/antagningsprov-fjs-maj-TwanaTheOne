

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    let personer = [ // Skapa en array med fem personobjekt
        { name: "Alice", age: 28 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 32 },
        { name: "Diana", age: 29 },
        { name: "Eve", age: 40 }
    ];
    
    function skrivUtPersonerÖver30(personer) { // Funktion som tar in en array
        for (let i = 0; i < personer.length; i++) { // Loopa igenom arrayen
        if (personer[i].age > 30) { // Kontrollera om åldern är över 30
            console.log(personer[i].name); // Skriv ut namnet i konsolen
        }
        }
    }
    
    skrivUtPersonerÖver30(personer); // Anropa funktionen med arrayen som argument  
                

}

module.exports = { uppg8 };