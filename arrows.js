var evens = [2,4,6,8,10];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});