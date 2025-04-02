
let valorPago = 124;
export function calculadrCosto(valorPago) {
    const tarifa = 3;
    const valorPorcentaje = valorPago * 0.01;
    return tarifa + valorPorcentaje + valorPago

}
console.log(calculadrCosto(valorPago));




