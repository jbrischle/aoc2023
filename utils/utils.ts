import fs from 'fs';

export function readInput(folder = __dirname): string {
    const fileName = `input.txt`;
    return fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
}

export function readInputTest(folder = __dirname, variant: 'a' | 'b'): string {
    const fileName = `input-test-${variant}.txt`;
    return fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
}
