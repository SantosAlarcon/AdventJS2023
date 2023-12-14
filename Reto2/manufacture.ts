export function manufacture(gifts: string[], materials: string) {
    let regalos: string[] = [];

    // Se recorre cada uno de los regalos
    gifts.forEach((gift: string) => {
        let coincidencias = 0;                      // Se inicia el contador de coincidencias


        // Se recorre cada letra del regalo
        for (let indice: number = 0; indice < gift.length; indice++) {

            // Si la letra se encuentra dentro de la cadena de materiales, se suma 1
            // coincidencia.
            if (materials.includes(gift[indice])) {
                coincidencias++;
            }
        }
        
        console.log(`Regalo: ${gift} - Coincidencias: ${coincidencias}`);

        // Si el número de coincidencias es igual al tamaño del material, el regalo
        // se añade al array.
        if (coincidencias === gift.length) {
            regalos.push(gift);
        }
    })

    return regalos;
}
