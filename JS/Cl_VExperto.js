import Cl_Vendedor from "./Cl_Vendedor.js";

export default class Cl_VExperto extends Cl_Vendedor {
    constructor(cod, numVent, numCli, mtoAnual) {
        super(cod, numVent, numCli);
        this.mtoAnual = mtoAnual;
    }

    set mtoAnual(mA) {
        this._mtoAnual = +mA;
    }

    get mtoAnual() {
        return this._mtoAnual;
    }

    calcBonif() {
        return (this.rendimiento() * 2) * 100;
    }

    calcSuelFinal() {
        return this.calcBonif() + (this.mtoAnual / 12);
    }
}