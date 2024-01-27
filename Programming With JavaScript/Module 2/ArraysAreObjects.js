function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
console.log(arrayBuilder('apple', 'pear', 'plum'));
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);
var Arr = ['apple', 'pear', 'plum'];
console.log(Arr);