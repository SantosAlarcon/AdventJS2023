export function findNaughtyStep(original: string, modified: string) {
  let letraFaltante: string = ""

  if (original.length > modified.length) {
    for (let pos_o: number = 0; pos_o < original.length; pos_o++) {
      if (original[pos_o] !== modified[pos_o]) {
        letraFaltante = original[pos_o]
        break
      }
    }
  } else {
    for (let pos_m: number = 0; pos_m < modified.length; pos_m++) {
      if (modified[pos_m] !== original[pos_m]) {
        letraFaltante = modified[pos_m]
        break
      }
    }
  }

  return letraFaltante
}

findNaughtyStep("pepe","peppe");
