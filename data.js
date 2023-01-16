window.testData = {};

testData.add = [
    { a: 1, b: 2, c: 0, expected: 3 },
    { a: -1, b: -8, c: 1, expected: -8 },
    { a: 12435262, b: -33469443, c: 2, expected: -21034179 }
];

testData.add1 = testData.add;

testData.sortOnLength = [
    { a: "a", b: "bb", c: "ccc", expected: "a bb ccc" },
    { a: "Jeg er streng", b: "Jeg er ikke et tal", c: "Jeg Yoda", expected: "Jeg Yoda Jeg er streng Jeg er ikke et tal"},
    { a: "", b:"i", c:"ii", expected: "i ii"}
];

testData.totalAge = [
    { a: {name: "Alice", age: 20}, b: {name: "Bob", age: 30}, c: {name: "Cat", age: 40}, expected: 90 },
    { a: {name: "Alice", age: 0}, b: {name: "Bob", age: 1}, c: {name: "Cat", age: 2}, expected: 3 },
    { a: {name: "Alice", age: 25}, b: {name: "Bob", age: 35}, c: {name: "Cat", age: 45}, expected: 105 }
];

testData.averageAge = [
    { a: {name: "Alice", age: 20}, b: {name: "Bob", age: 30}, c: {name: "Cat", age: 40}, expected: 30 },
    { a: {name: "Alice", age: 0}, b: {name: "Bob", age: 1}, c: {name: "Cat", age: 2}, expected: 1 },
    { a: {name: "Anna", age: 25}, b: {name: "Børge", age: 35}, c: {name: "Sok", age: 45}, expected: 35 }
];

testData.vulnerability = [
    {
        a: {disruptive: 1, irreplacible: 1, damaging: 1}, 
        b: {disruptive: 1, irreplacible: 1, damaging: 1},
        c: {disruptive: 5, irreplacible: 5, damaging: 5},
        expected: {p1: "Ikke Kritisk", p2: "Ikke Kritisk", p3: "Kritisk"}
    }
]

