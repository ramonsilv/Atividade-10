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
        this.#tipo = tipo
        this.#base = base
        this.#comprimento = comprimento
    }
    
    get tipo() {
        return this.#tipo
    }
    set tipo(novoTipo) {
        this.#tipo = novoTipo
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
        if(this.tipo === "retangular"){
            return this.base * this.comprimento
        } else if(this.tipo === "triangular") {
            return(this.base * this.comprimento) / 2
        }
    }

    calcularVolume(){
        let areaBase = this.calcularArea()
        if(this.tipo === "retangular") {
            return areaBase * this.altura
        }else if(this.tipo === "triangular") {
            return (areaBase * this.altura) / 3
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