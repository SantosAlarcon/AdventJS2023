export function findFirstRepeated(gifts: number[]) {
  let array_numeros: number[] = [];
 
  // Se recorren los números
  for (let pos = 0; pos < gifts.length; pos++) {

    // Se comprueba si el número está dentro del array. Si no se añade.
    // En caso de que esté, éste se devuelve, dando a entender que es la primera
    // coincidencia.
    if(array_numeros.includes(gifts[pos])) {
      return gifts[pos];

    } else {
      array_numeros.push(gifts[pos]);
    }

  }

  // Devuelve -1 si no hay números repetidos
  return -1

}
//findFirstRepeated([1,2,6,7,6,7]);
