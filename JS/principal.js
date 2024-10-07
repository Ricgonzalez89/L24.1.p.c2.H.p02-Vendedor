/* 02. - VENDEDORES
|* Una compañía especializada contrata a sus
|* vendedores de manera que la consideración de la
|* cantidad de ventas concretadas es determinante para
|* los honorarios respectivos. Para el cálculo del
|* rendimiento en ventas concretadas, divide la cantidad
|* de ventas efectivos entre los clientes visitados, y lo
|* multiplica por 10, lo que da el rendimiento del
|* vendedor. Para los vendedores novatos se les cancela
|* sueldo mínimo más una bonificación de $10 que se
|* multiplica por el rendimiento; los vendedores
|* expertos se contratan por un monto anual y el doble
|* del rendimiento se multiplica por $100 mensual para
|* su pago. Realice un programa que procese estos datos
|* y muestre lo siguiente: Por cada vendedor el monto a
|* pagar mensual, y por la compañía el monto promedio
|* que paga mensual a los expertos.
*/
import Cl_VExperto from "./Cl_VExperto.js";
import Cl_VNovato from "./Cl_VNovato.js";
import Cl_Empresa from "./Cl_Empresa.js";

let ven1 = new Cl_VNovato(11, 20, 100, 50);
let ven2 = new Cl_VNovato(33, 40, 80, 100);
let ven3 = new Cl_VNovato(55, 15, 60, 150);
let ven4 = new Cl_VNovato(66, 10, 50, 50);
let ven5 = new Cl_VExperto(22, 30, 40, 3000);
let ven6 = new Cl_VExperto(77, 10, 25, 6000);
let ven7 = new Cl_VExperto(99, 60, 120, 12000);
let ven8 = new Cl_VExperto(44, 8, 32, 2400);
let empresa = new Cl_Empresa();

empresa.procesarVendedor(ven1);
empresa.procesarVendedor(ven2);
empresa.procesarVendedor(ven3);
empresa.procesarVendedor(ven4);
empresa.procesarVendedor(ven5);
empresa.procesarVendedor(ven6);
empresa.procesarVendedor(ven7);
empresa.procesarVendedor(ven8);

let salida = document.getElementById("salida");

let mostrarVendedor = (ven) => {
    return `
    <tr>
        <td>${ven.codigo}</td>
        <td>$${ven.calcSuelFinal().toFixed(2)}</td>
    </tr>
    `;
}

salida.innerHTML += `
<table>
    <tr>
        <th>Código del Vendedor</th>
        <th>Monto a Pagar Mensual</th>
    </tr>
    ${mostrarVendedor(ven1)}
    ${mostrarVendedor(ven2)}
    ${mostrarVendedor(ven3)}
    ${mostrarVendedor(ven4)}
    ${mostrarVendedor(ven5)}
    ${mostrarVendedor(ven6)}
    ${mostrarVendedor(ven7)}
    ${mostrarVendedor(ven8)}
</table>
<br>
Monto promedio que la compañía paga a los expertos mensualmente: ${empresa.calcPromedioExp().toFixed(2)}
`;
