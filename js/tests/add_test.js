export const tests = []
const t = (f) => tests.push(f)


// add is declared and is a function and take 2 arguments
t(() => typeof Add === 'function')
t(() => Add.length === 2)

// add works with positive numbers
t(() => Add(5, 6) === 11)

// Add works with negative numbers
t(() => Add(-5, -6) === -11)

// Add works with mixed numbers
t(() => Add(-5, 6) === 1)

// Add works with zero
t(() => Add(0, 0) === 0)
