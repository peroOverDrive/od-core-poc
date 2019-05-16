import { capitalize } from './capitalize';

describe('capitalize testing', () => {
  test('capitalize', () => {
    const actual = capitalize('meow');
    expect(actual).toEqual('Meow');
  });
});

