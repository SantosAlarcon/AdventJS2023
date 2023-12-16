function cyberReindeer(road: string, time: number) {
  let recorrido: string[] = []
  let recorrido_actual: string = road
  let barrera: boolean = false
  let barrera_desbloqueada: boolean = false
  let indice_road = 0

  for (let t: number = 0; t < time; t++) {

    // Si el time actual es múltiplo de 5, se abren todas las barreras
    if (t % 5 === 0 && t !== 0 && barrera) {
      barrera = false
      recorrido_actual = road.replaceAll("|", "*");
      barrera_desbloqueada = true;
    } else if (recorrido_actual[indice_road] === "|") {
      barrera = true
    }

    // Si no hay barrera se avanza
    if (t !== 0 && !barrera) {
      recorrido_actual = road.replaceAll("S",".");

      if (barrera_desbloqueada) {
        recorrido_actual = recorrido_actual.replaceAll("|", "*")
      }
      recorrido_actual = recorrido_actual.split("");
      recorrido_actual[indice_road] = "S";
      recorrido_actual = recorrido_actual.join("");
    }

    // Se añade el recorrido actual al array
    recorrido.push(recorrido_actual)

    // Se incrementa el índice en caso de que no colisione con una barrera.
    if (!barrera) indice_road++
  }

  return recorrido
}

cyberReindeer("S..|...|..", 10)
