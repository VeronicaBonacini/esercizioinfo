'use strict';

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
console.log(differenza(2,10));