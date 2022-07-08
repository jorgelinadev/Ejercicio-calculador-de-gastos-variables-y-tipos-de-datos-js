//alert('Mi archivo está bien linkeado');

//Calculador gastos

//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

const disponible = prompt ('Ingrese el dinero que tiene disponible para pago de servicios');

const primerVuelta = (3-1);
const primerServ = prompt ('Ingrese el nombre del servicio a pagar');
alert(`faltan ingresar ${primerVuelta} servicios`);
const primerMonto = prompt ('Ingrese el monto del servicio a pagar');
const primerResto = (Number(disponible) - Number(primerMonto));
alert (`Quedan disponibles ${primerResto} pesos.`)

const segundaVuelta = (3-2);
const segundoServ = prompt('Ingrese el nombre del servicio a pagar');
alert(`faltan ingresar ${segundaVuelta} servicios`);
const segundoMonto = prompt ('Ingrese el monto del servicio a pagar');
const segundoResto = (Number(disponible) - Number(segundoMonto));
alert (`Quedan disponibles ${segundoResto} pesos.`);

const tercerVuelta = (3-3);
const tercerServ = prompt ('Ingrese el nombre del servicio a pagar');
alert(`faltan ingresar ${tercerVuelta} servicios`);
const tercerMonto = prompt ('Ingrese el monto del servicio a pagar');
const tercerResto = (Number(disponible) - Number(tercerMonto));
alert (`Quedan disponibles ${tercerResto} pesos.`);

alert(`Servicios a pagar               Monto                      Disponible
      ${primerServ}                         $${primerMonto}                   $${primerResto}
      ${segundoServ}                        $${segundoMonto}                  $${segundoResto}
      ${tercerServ}                         $${tercerMonto}                   $${tercerResto}`);