//Display largest number in array
let data = [1,5,9,4,6,2];
let highest;

//method 0 (for loop) 
highest = data[0];
for (let i = 0; i < data.length; i++) {
        if (data[i] > highest) {
            highest = data[i];
        }
}
console.log(highest);

//method 1 (reduce method):

highest = data.reduce((elem1, elem2) => {return Math.max(elem1,elem2)});
console.log(highest);//prints 9

//method 2 