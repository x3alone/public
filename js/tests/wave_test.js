export const tests = []
const t = (f) => tests.push(f)
t(({ eq }) => eq(wave('hello'), ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']))
t(({ eq }) => eq(wave('codewars'), ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']))
t(({ eq }) => eq(wave('two words'), ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']))
t(({ eq }) => eq(wave(' gap '), [' Gap ', ' gAp ', ' gaP ']))
t(({ eq }) => eq(wave(''), []))
t(({ eq }) => eq(wave('a       b    '), ['A       b    ', 'a       B    ']))
t(({eq}) => eq(wave('12345'), ['12345', '12345', '12345', '12345', '12345']))

Object.freeze(tests)