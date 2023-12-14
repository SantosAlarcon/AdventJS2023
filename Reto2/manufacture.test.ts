import {expect, test} from "bun:test"
import {manufacture} from "./manufacture"

test("Debe devolver 'tren' y 'oso'", () => {
    const resultado = manufacture(["tren", "oso", "pelota"], "tronesa");
    expect(resultado).toStrictEqual(["tren", "oso"]);
})


test("Debe devolver 'puzzle'", () => {
    const resultado = manufacture(["juego", "puzzle"], "jlepuz");
    expect(resultado).toStrictEqual(["puzzle"]);
})

test("Debe devolver vacío", () => {
    const resultado = manufacture(["libro", "ps5", "midu"], "psli");
    expect(resultado).toStrictEqual([]);
})

test("Debe devolver vacío 2", () => {
    const resultado = manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb');
    expect(resultado).toStrictEqual([]);
})
