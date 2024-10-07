import Cl_Vendedor from "./Cl_Vendedor.js";

export default class Cl_VNovato extends Cl_Vendedor {
    constructor(cod, numVent, numCli, suelB) {
        super(cod, numVent, numCli);
        this.suelB = suelB;
    }

    set suelB(sB) {
        this._suelB = +sB;
    }

    get suelB() {
        return this._suelB;
    }

    calcBonif() {
        return this.rendimiento() * 10;
    }

    calcSuelFinal() {
        return this.calcBonif() + this.suelB;
    }
}