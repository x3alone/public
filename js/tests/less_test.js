export const tests = []
const t = (f) => tests.push(f)

t(() => typeof less === 'function')
t(() => less.length === 1)

t(() => less(5) === 4)
t(() => less(1) === 0)
t(() => less(0) === -1)
t(() => less(-1) === -2)

const rand = Math.random()
t(() => less(rand) === rand - 1)

Object.freeze(tests)