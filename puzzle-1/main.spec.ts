import { readInput, readInputTest } from '../utils/utils';

test('solve puzzle 1 A', () => {
    expect(A(readInputTest(__dirname, 'a'))).toBe(142);
    expect(A(readInput(__dirname))).toBe(53386);
});

test('solve puzzle 1 B', () => {
    expect(B(readInputTest(__dirname, 'b'))).toBe(281);
    expect(B(readInput(__dirname))).toBe(53312);
});

function A(input: string) {
    const lines = input.split('\n');
    const numbers: number[] = [];

    for (const line of lines) {
        if (!line) {
            continue;
        }
        const firstNumberIndex = line.search(/\d/);
        const lastNumberIndex = line.search(/\d(?=\D*$)/);
        const firstNumber = line[firstNumberIndex];
        const lastNumber = line[lastNumberIndex];
        const number = firstNumber.toString() + lastNumber.toString();
        numbers.push(Number(number));
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function B(input: string) {
    const lines = input.split('\n');
    const numbers: number[] = [];

    for (const line of lines) {
        if (!line) {
            continue;
        }

        const firstNumber = getFirstNumber(line);
        const lastNumber = getLastNumber(line);
        const number = firstNumber + lastNumber;
        numbers.push(Number(number));
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function getFirstNumber(line: string) {
    const map: Map<number, string> = new Map();
    const digitIndex = line.search(/\d/);
    map.set(digitIndex, line[digitIndex]);
    map.set(line.search(/one/), '1');
    map.set(line.search(/two/), '2');
    map.set(line.search(/three/), '3');
    map.set(line.search(/four/), '4');
    map.set(line.search(/five/), '5');
    map.set(line.search(/six/), '6');
    map.set(line.search(/seven/), '7');
    map.set(line.search(/eight/), '8');
    map.set(line.search(/nine/), '9');
    map.delete(-1);
    const lowestKey = Math.min(...Array.from(map.keys()));
    return map.get(lowestKey) || '';
}

function getLastNumber(line: string) {
    const map: Map<number, string> = new Map();
    const digitIndex = line.search(/\d(?=\D*$)/);
    map.set(digitIndex, line[digitIndex]);
    map.set(line.lastIndexOf('one'), '1');
    map.set(line.lastIndexOf('two'), '2');
    map.set(line.lastIndexOf('three'), '3');
    map.set(line.lastIndexOf('four'), '4');
    map.set(line.lastIndexOf('five'), '5');
    map.set(line.lastIndexOf('six'), '6');
    map.set(line.lastIndexOf('seven'), '7');
    map.set(line.lastIndexOf('eight'), '8');
    map.set(line.lastIndexOf('nine'), '9');
    map.delete(-1);
    const lowestKey = Math.max(...Array.from(map.keys()));
    return map.get(lowestKey) || '';
}
