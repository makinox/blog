const fetch = require('node-fetch');

describe('Main', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('Boolean signature', () => {
    expect(Boolean(1)).toBe(true);
  });

  test('Get Users', async () => {
    const body = await fetch('https://jsonfy.com/users');
    const result = await body.json();
    expect(result.length).not.toBe(0);
  });
});
