import { readInput, readInputTest } from '../utils/utils';
import * as path from 'path';

const folder = __dirname;
const fileName = path.basename(__dirname);
A(readInputTest(folder, 'a'));
A(readInput(folder));
B(readInputTest(folder, 'b'));
B(readInput(folder));

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
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`${fileName} A: ${sum}`);
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
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`${fileName} B: ${sum}`);
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
