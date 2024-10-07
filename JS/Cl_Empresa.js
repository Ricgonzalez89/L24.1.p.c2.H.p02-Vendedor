import Cl_VExperto from "./Cl_VExperto.js";

export default class Cl_Empresa {
    constructor() {
        this.acMtoMensualExp = 0;
        this.cntExp = 0;
    }

    procesarVendedor(v) {
        if(v instanceof Cl_VExperto) {
            this.acMtoMensualExp += v.calcSuelFinal();
            this.cntExp++;
        }
    }

    calcPromedioExp() {
        if(this.cntExp > 0)
            return this.acMtoMensualExp / this.cntExp;
        else
            return 0;
    }
}