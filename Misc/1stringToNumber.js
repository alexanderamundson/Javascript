//Numbers expressed as a string can be coerced into a number
//in several ways

let str = "98";
//1
+str; 
//2
str - 0;
//3
str * 1; 
//4
parseInt(str, 10);//converts str into a base 10 decimal number
//5
parseFloat(str);