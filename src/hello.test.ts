import { hello } from './hello';

describe('hello', () => {
  it('hello("jest") to be "Hello Jest"', () => {
    expect(hello('Jest')).toBe('Hello Jest')
  })
})