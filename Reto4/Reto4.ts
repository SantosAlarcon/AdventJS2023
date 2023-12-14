function invertirEnParentesis(message: string): string {
    let decodedMessage = message.split("(")[0];
    let final = message.split(")")[2];
    let palabra_nivel1: string, palabra_nivel2: string = "";
    let palabras_nivel2 = [];

    // Se extrae el nivel interior
    let nivel1: RegExpMatchArray | null = message.match(/\([a-z]*\)/g);
    palabra_nivel1 = (nivel1) ? nivel1[0].substring(1, nivel1[0].length -1) : "";

    // Se extrae el nivel exterior
    let nivel2: RegExpMatchArray | null = message.match(/\([(a-z)]*\)/g);

    if (nivel1) {
        palabra_nivel2 = (nivel2) ? nivel2[0].substring(1,nivel2[0].length-1): "";
        palabras_nivel2 = palabra_nivel2.split(nivel1).reverse();
    }

    palabras_nivel2 = palabras_nivel2.map(palabra => {
        return palabra.split("").reverse().join("");
    })

    return decodedMessage + palabras_nivel2[0] + palabra_nivel1 + palabras_nivel2[1] + final;
  
}

// Ejemplo de uso
const resultado = invertirEnParentesis("hola (odnum)");
console.log(resultado); // Resultado: "santaclaus" 
