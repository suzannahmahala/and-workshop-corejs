test('VAR', () => {
  var x = 6;
  expect(x).toBe(6);
});

test('LET and VAR', () => {
  let x = 5;
  expect(x).toBe(5);
});

test('LET', () => {
  let x = 6;
  expect(x).toBe(6);
});

test('LET', () => {
  let x = 5;

  function foo() {
    let y = 20;

    return x;
  }

  expect(x).toBe(5);
});

test('CONST - scalar values', () => {
  const y = 5;
  x = 'foo';
  expect(y).toBe(5);
});

test('CONST - assignment', () => {
  const z = 5;
  x = 5
  expect(z).toBe(5);
});

test('CONST - objects', () => {
  const person = {
    "name": "Linus",
    "age": 42
  };

  expect(person.lastname).toBe(undefined);
});
