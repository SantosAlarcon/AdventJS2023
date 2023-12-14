import {expect, test} from "bun:test"
import {findFirstRepeated} from "./findFirstRepeated"

test("Debe devolver -1", () => {
    const resultado = findFirstRepeated([1,2,3,4]);
    expect(resultado).toBe(-1);
})

test("Debe devolver 2", () => {
    const resultado = findFirstRepeated([5,1,2,3,2,5,1]);
    expect(resultado).toBe(2);
})

test("Debe devolver 3", () => {
    const resultado = findFirstRepeated([2,1,3,5,3,2]);
    expect(resultado).toBe(3);
})

test("Debe devolver 7", () => {
    const resultado = findFirstRepeated([7,4,3,8,5,7]);
    expect(resultado).toBe(7);
})
