(function (){
    "use strict";



function sortedNameGenerator (input1arr, input2arr) {
    var firstNames = ['Billy', 'Karen', 'Cindy', 'Omar'];
    var lastNames = ['Sanders', 'Smith', 'Barnes', 'Conner'];


    var firstSorted = firstNames.sort();
    var lastSorted = lastNames.sort();

    var namesArr = [];

    // for (var i = 0; i < input1arr.length, i < input2arr.length; i++) {
    //     namesArr = firstSorted[i].push() + ',' + lastSorted[i].push()
    // }

    firstSorted.forEach(function(element, index) {
        namesArr.push({firstName: firstSorted[index], lastName: lastSorted[index]})
    });


    return namesArr;


}
console.table(sortedNameGenerator());




})();