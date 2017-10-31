it('should print the name of the person objects', () => {
  const getName = function() {
    return this.name;
  };

  const john = { name: 'John' };
  const bindName = getName.bind(john);

  expect(bindName()).toBe('John'); // USE bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  expect(getName.call(john)).toEqual('John'); // USE call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  expect(getName.apply(john)).toEqual('John'); // USE apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
});

it('should print the name of the person objects', () => {
  function Person(age, name, fine) {
    this.age = age;
    this.name = name;
    this.fine = fine;
  }

  Person.prototype.isFine= function() {
    return this.fine;
  }

  const john = new Person(28, 'John', true);

  expect(john.age).toBe(28);
  expect(john.name).toEqual('John');
  expect(john.isFine()).toBe(true);
});

it('should return the maximu number in an array', () => {
  //don't google it, try it first! hint: use apply and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

  const numbers = [1, 99, 34, 1000, 123];




  expect(Math.max.apply(null, numbers)).toBe(1000);
});

// it('should return the maximu number in an array', () => {
//   const leaderBoard = {
//     scores: [900, 845, 809, 950],
//     avgScore: null,
//     avg: function() {
//       let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
//         return prev + cur;
//       });
//       this.avgScore = sumOfScores / this.scores.length;
//     }
//   };
//
//   const anotherleaderBoard = {
//     scores: [8, 10, 8, 9, 10, 9],
//     avgScore: null
//   };
//
//   expect(anotherleaderBoard.avgScore).toBe(9);
// });
