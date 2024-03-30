//making a function that adds a specific number
function customAdder(valueToAdd:any){
    return function (number:any){
        return number + valueToAdd;
    };
}
//making magicbox that add 10 to each of given numbers
var addTen = customAdder(10);
console.log(addTen(10));