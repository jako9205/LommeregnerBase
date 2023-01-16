# Øvelse i af objekter og sårbarhed
1. Læs følgende stumper og snak med din sidekammerat om formålet med opgaven.
2. Indsæt følgende i logic.js omkring linje 40.

```js 
// returns 'sårbarhed' of the three products in an object with properties p1, p2, p3
// each product has properties disruptive, irreplacible, and damaging, 
actions.vulnerability = {
    types: [JSON.parse, JSON.parse, JSON.parse],
    function: function(p1, p2, p3){

        var vulnerabilities = {p1: -1, p2: -1, p3: -1};
        return vulnerabilities;
    }
};

```

3. Indsæt følgende i data.js omkring line 28
```js
testData.vulnerability = [
    {
        a: {disruptive: 1, irreplacible: 1, damaging: 1}, 
        b: {disruptive: 1, irreplacible: 1, damaging: 1},
        c: {disruptive: 5, irreplacible: 5, damaging: 5},
        expected: {p1: "Ikke Kritisk", p2: "Ikke Kritisk", p3: "Kritisk"}
    }
]
```