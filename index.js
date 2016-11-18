'use strict';
/*
function somma (n1,n2){
		if (n1 > n2) 
			return n1 + n2;
		
		return 'N1 deve essere maggiore di N2';

}
console.log (somma(5,79));

var saluta = function(n3, n4){
		console.log('ciao ' + n3 + ' e ' + n4);
	}
saluta("Marco", "Lucia");

const differenza = (n5, n6) => {
		if (n5 <= n6)
			return n6 - n5;
		
		return'N5 deve essere minore di N6';
}
console.log(differenza(2,10));*/

const fs = require('fs');

try {
	fs.mkdirSync(./persona');
} catch (err) ();

const persona = {
	nome: "Veronica",
	cognome: "Bonacini",
	anni: 18
};

const serialize = (jsobject) => {
	let nome = jsobject.nome;
	let cognome.jsobject;
	
	if (!nome || !cognome) throw new Error("Manca il nome o il cognome della perosona che si vuole salvare") 
		
	nome = nome.toLowerCase();
	cognome = cognome.toLowerCase();
	
	const data = JSON.stringify(jsobject);
	const fileName = '$(nome)_$(cognome).json';
	
	fs.writeFile('./'$(fileName), data, (err) => {
		if (err) throw err;
		console.log('Persona salvata in $(jsobject)';
		});
};

serialize(persona);		