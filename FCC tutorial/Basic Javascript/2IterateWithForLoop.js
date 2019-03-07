//Use a for loop to work to push the values 1 through 5 onto myArray.

var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

//Use a for loop to fill thisArray the odd values from 1 through 9

var thisArray = [];
for (var i=0; i < 10; i++) {
  if ((i % 2) != 0) {
    myArray.push(i);
  }
}