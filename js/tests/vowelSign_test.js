export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(vowelSign("Hello, World!"), "H-ll-, W-rld!"))
t(({ eq }) => eq(vowelSign("This Is a Test"), "Th-s +s - T-st"))
t(({ eq }) => eq(vowelSign("Open the door nOw"), "+p-n th- d--r n+w"))
t(({ eq }) => eq(vowelSign(""), ""))
t(({ eq }) => eq(vowelSign("AO\tU\s+fiyu"), "++\t+s+f-y-"))
t(({ eq }) => eq(vowelSign("E_E"), "+_+"))
t(({ eq }) => eq(vowelSign("d-*om!hviUq"), "d-*-m!hv-+q"))
t(({ eq }) => eq(vowelSign("bcdfgh"), "bcdfgh"))


Object.freeze(tests)