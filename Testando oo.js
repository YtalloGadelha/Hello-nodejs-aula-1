class Forma{

	constructor(id, altura, largura){
		this.id = id;
		this.altura = altura;
		this.largura = largura;
	}
}

class Quadrado extends Forma{

	constructor(id, altura, largura){
		super(id,altura, largura);
		this.calculaArea(altura,largura);
	}

	calculaArea(altura,largura){

		this.area = altura*largura;
		
	}

}

let quad = new Quadrado(1,3,3);
console.log("A área do quadrado é %s!", quad.area);