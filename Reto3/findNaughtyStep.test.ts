import {findNaughtyStep} from "./findNaughtyStep"
import {test, expect} from "bun:test"

test("Debe devolver 'j'", () => {
    const resultado = findNaughtyStep("illouan", "illojuan");
    expect(resultado).toStrictEqual("j");
})

test("Debe devolver 'r'", () => {
    const resultado = findNaughtyStep("carro", "caro");
    expect(resultado).toStrictEqual("r");
})

test("Debe devolver 'd'", () => {
    const resultado = findNaughtyStep("MiduDev", "MiduDdev");
    expect(resultado).toStrictEqual("d");
})

test("No devuelve nada", () => {
    const resultado = findNaughtyStep("pepe", "pepe");
    expect(resultado).toStrictEqual("");
})
