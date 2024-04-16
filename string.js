str1 = '';
str1 = 'Wisdom sprouts';
str1 = "Wisdom sprouts";
str2 =`Lore Ahgfdcvc jhgfgv 
        jhgvbnjk `;
fname = 'john';
num1 = 30;
str3 = fname + ' ' + num1;   //'john30'
str4 = `${fname} ${num1}`;     // 'john 30'

console.log(str1.length);

str5 = str2.toUpperCase();
console.log(str5);
str6 = str1.toLowerCase();
console.log(str6);

console.log(str2.charAt(5));
console.log(str2.charCodeAt(5));

str7 = str1.concat(' ',str2, str5);
console.log(str7);

console.log(str2.substring(0,5));
console.log(str2.slice(0,5));

number1 = 30.0  //
typeof(number1)  // number        bigInt

arr1 = [];
typeof(arr1); // object
arr2 = [1,2,3,4,5];
console.log(arr2);

arr3 = ['john', 30, 'pune'];

str8 = '12345';
console.log(str8);


arr4 = str8.split('');
console.log(arr4);

str9 = arr4.join('');
console.log(str9);






