export default class Cl_Vendedor {
    constructor(cod, numVent, numCli) {
        this.codigo = cod;
        this.numVent = numVent;
        this.numCli = numCli;
    }

    set codigo(c) {
        this._codigo = c;
    }

    get codigo() {
        return this._codigo;
    }

    set numVent(nV) {
        this._numVent = +nV;
    }

    get numVent() {
        return this._numVent;
    }

    set numCli(nC) {
        this._numCli = +nC;
    }

    get numCli() {
        return this._numCli;
    }

    rendimiento() {
        if(this.numCli > 0)
            return (this.numVent / this.numCli) * 10;
        else
            return 0;
    }
}