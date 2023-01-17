# Øvelse i af objekter og sårbarhed
1. Læs følgende stumper og snak med din sidekammerat om formålet med opgaven.
2. Indsæt følgende i logic.js omkring linje 40.

```js 

// returns sårbarhed of a single product
actions.productVulnerability = {
    types: [Number, Number, Number],
    function: function(disruptive, irreplacible, damaging){

        return "Kritisk";
    }
}

// returns 'sårbarhed' of the three products in an array
// each product has properties disruptive, irreplacible, and damaging, 
actions.vulnerability = {
    types: [JSON.parse, JSON.parse, JSON.parse],
    function: function(p1, p2, p3){
            
        return [ -1, -1, -1];
    }
};
```

3. Indsæt følgende i data.js omkring line 28
```js
testData.productVulnerability = [
    { a: 1, b: 1, c: 1, expected: "Ikke Kritisk" },
    { a: 2, b: 3, c: 4, expected: "Besværlig" },
    { a: 5, b: 5, c: 5, expected: "Kritisk" }
];

testData.vulnerability = [
    {
        a: {disruptive: 1, irreplacible: 1, damaging: 1}, 
        b: {disruptive: 2, irreplacible: 3, damaging: 4},
        c: {disruptive: 5, irreplacible: 5, damaging: 5},
        expected: ["Ikke Kritisk", "Besværlig", "Kritisk"]
    }
]
```