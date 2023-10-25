export const tests = []
const t = (f) => tests.push(f)

const str0 = [
    'sk', 'dk', 'ad',
    ' f', 'wv', 'kl',
    'em', 'r_'
  ]
const str1 = [
    'He', 'll',
    'o,', ' W',
    'or', 'ld',
    '!_'
  ]
const str2 = [
    'Th', 'is',
    ' I', 's ',
    'a ', 'Te',
    'st'
  ]
const str3 = [
    'Op', 'en', ' t',
    'he', ' d', 'oo',
    'r ', 'nO', 'w_'
  ]
const str4 = []
const str5 = [ 'AO', '\tU', 's+', 'fi', 'yu' ]
const str6 = [ 'd-', '*o', 'm!', 'hv', 'iU', 'q_' ]
const str7 = [ 'ab', 'cd', 'ef' ]
const str8 = [
    '01', '2 ',
    '34', '56',
    ' 7', '8 ',
    '9_'
  ]
t(({ eq }) => eq(splitStringIntoPairs("skdkad fwvklemr"), str0))
t(({ eq }) => eq(splitStringIntoPairs("Hello, World!"), str1))
t(({ eq }) => eq(splitStringIntoPairs("This Is a Test"), str2))
t(({ eq }) => eq(splitStringIntoPairs("Open the door nOw"), str3))
t(({ eq }) => eq(splitStringIntoPairs(""), str4))
t(({ eq }) => eq(splitStringIntoPairs("AO\tU\s+fiyu"), str5))
t(({ eq }) => eq(splitStringIntoPairs("d-*om!hviUq"), str6))
t(({ eq }) => eq(splitStringIntoPairs("abcdef"),str7))
t(({ eq }) => eq(splitStringIntoPairs("012 3456 78 9"), str8))



Object.freeze(tests)