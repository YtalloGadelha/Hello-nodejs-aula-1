//Funções

function recebeFuncaoENumero(x, y){
	x(y);
}

recebeFuncaoENumero((y) => console.log(y), 9);