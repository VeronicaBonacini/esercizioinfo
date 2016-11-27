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

const request = require("request");
const fs = require('fs');
const baseApiUrl = "https://jsonplaceholder.typicode.com";

const getUsers = (callback) => {
	console.log("La richiesta per gli utenti è stata inviata al server...");
	request(baseApiUrl + "/users",(error, response, body) => {
		
		if (!error && response.statusCode == 200) {
			console.log("Risposta arrivata dal server!");
			let markdown = "";
			const users = JSON.parse(body);
			
			for (let i; i < users.length; i++) {
				markdown += `<h1>${users[i].name}</h1>`;
			}
			callback(markdown);
		}
	});
};
getUsers((markdown => {
		console.log("sto scrivendo il file...");
		fs.writeFile("./request/markdown.txt", markdown, (error) => {
			if (error) throw error;
			console.log("il file è stato scritto correttamente!")
		});
});		