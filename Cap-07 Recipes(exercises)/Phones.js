const text = `
 - (21) 12345-6789
 - (11) 23332-3232
 - 2122-4365
 - (85)3333-5523
 - (1) 4321-1234
`

console.log(text.match(/(\(\d{2}\))?\s?(\d\s)?\d{4,5}-?\d{4}/g))