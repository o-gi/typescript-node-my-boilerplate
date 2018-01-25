"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
describe('hello', () => {
    it('hello("jest") to be "Hello Jest!!"', () => {
        expect(hello_1.hello('Jest')).toBe('Hello Jest!!');
    });
    it('hello("jest") not to be "Hello fukumasuya!!"', () => {
        expect(hello_1.hello('Jest')).not.toBe('Hello fukumasuya!!');
    });
});
