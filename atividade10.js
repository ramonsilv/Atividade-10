class Forma {
    constructor(altura) {
        this.altura = altura
    }

    calcularArea() {
    console.log("A função calcularArea da classe-mãe foi acessada.")
    }
    calcularVolume() {
    console.log("A função calcularVolume da classe-mãe foi acessada.")
    }
}   //(EXERCICIO 1 E )

class FormaPlana extends Forma {
    #tipo
    #base
    #comprimento
    constructor(altura, tipo, base, comprimento) {
        super(altura)
        this.#tipo = tipo.toLowerCase()
        this.#base = base
        this.#comprimento = comprimento
    }
    
    get tipo() {
        return this.#tipo
    }
    set tipo(novoTipo) {
        this.#tipo = novoTipo.toLowerCase()
    }
    
    get base() {
        return this.#base
    }
    set base(novaBase) {
        this.#base = novaBase
    }
    
    get comprimento() {
        return this.#comprimento
    }
    set comprimento(novoComprimento) {
        this.#comprimento = novoComprimento
    }

    calcularArea(){
        if(this.tipo === "Retangular"){
            return (this.base * this.comprimento).toFixed(2)
        } else if(this.tipo === "Triangular") {
            return((this.base * this.comprimento) / 2).toFixed(2)
        } else {
            console.error("Tipo de forma inválido. O tipo deve ser 'retangular' ou 'triangular'.")
            return null
        }
    }

    calcularVolume(){
        let areaBase = this.calcularArea()
        if(this.tipo === "retangular") {
            return (areaBase * this.altura).toFixed(2)
        }else if(this.tipo === "triangular") {
            return ((areaBase * this.altura) / 3).toFixed(2)
        } else {
            console.error("Tipo de forma inválido. O tipo deve ser 'retangular' ou 'triangular'.")
            return null
        }
    }
}

class FormaCircular extends Forma {
    #pi = 3.14
    #raio
    constructor(altura, raio){
        super(altura)
        this.#raio = raio
    }
    get pi(){
        return this.#pi
    }
    get raio() {
        return this.#raio
    }
    set raio(novoRaio) {
        this.#raio = novoRaio
    }
    
    calcularArea() {
        areaBase = this.#pi * this.#raio * this.#raio
        return (areaBase).toFixed(2)
    }

    calcularVolumeCilindro() {
        areaBase = this.calcularArea()
        volume = areaBase * this.altura
        return (volume).toFixed(2)
    }

    calcularVolumeCone() {
        areaBase = this.calcularArea()
        volume = (areaBase * this.altura) / 3
        return (volume).toFixed(2)
    }

    calcularVolumeEsfera() {
        areaBase = this.calcularArea()
        volume = areaBase * this.#raio * 1.33
        return (volume).toFixed(2)
    }
}   //(EXERCICIO 5)

//Instanciando objeto da classe mãe(Forma)
const forma = new Forma(5)
forma.calcularArea()//Saida: A função calcularArea da classe-mãe foi acessada.
forma.calcularVolume()//Saida: A função calcularVolume da calsse-mãe foi acessada.

//Instaciando objato da classe filha (FormaPlana)
const formaPlana = new FormaPlana(3, "retangular", 4, 5)
console.log(formaPlana.calcularArea())//Saida: 20.00
console.log(formaPlana.calcularVolume())//Saida: 60.00

//Instanciando objeto da outra classe filha (FormaCircular)
const formaCircular = new FormaCircular(2, 3)
console.log(formaCircular.calcularArea())//Saida: 28.27
console.log(formaCircular.calcularVolumeCilindro())//Saida: 56.55
console.log(formaCircular.calcularVolumeCone())//Saida: 18.85
console.log(formaCircular.calcularVolumeEsfera())//Saida: 112.21
//(EXERCICIO 6)

//A razão pela qual a invocação do método calcularVolume por uma instância da classe FormaCircular produz a saída padrão da classe mãe (console.log("A função calcularVolume da classe-mãe foi acessada.");) é porque a classe FormaCircular é uma subclasse da classe mãe Forma.

//Quando é criado uma subclasse, ela herda os métodos e propriedades da classe mãe. No entanto, se a subclasse tiver uma implementação própria para um método da classe mãe (com o mesmo nome), a implementação da subclasse é usada em vez da implementação da classe mãe.

//No código em si, a classe FormaPlana sobrescreveu o método calcularVolume, fornecendo uma implementação específica para calcular o volume de formas planas retangulares e triangulares. No entanto, a classe FormaCircular não sobrescreveu o método calcularVolume, então a implementação da classe mãe é usada.

//Como resultado, ao chamar o método calcularVolume em uma instância da classe FormaCircular, a implementação da classe mãe é executada, que é simplesmente imprimir a mensagem padrão "A função calcularVolume da classe-mãe foi acessada." no console.

//(EXERCICIO 7)