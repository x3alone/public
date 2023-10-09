export const tests = []
const t = (f) => tests.push(f)

// Sub is declared and is a function and take 2 argument
t(() => typeof Sub === 'function')
t(() => Sub.length === 2)

// Sub works with positive numbers
t(() => Sub(5, 2) === 3)
t(() => Sub(Sub(Sub(5, 2), 2), 2) === -1) // Sub Sub Sub !!

// sub works with negative numbers
t(() => Sub(-5, -2) === -3)
t(() => Sub(Sub(Sub(-5, -2), -2), -2) === 1) // Sub Sub Sub !!