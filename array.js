arr1 =[];
console.log(arr1);

typeof(arr1); // object
arr1[0] = 1;
arr1[1] = 2;
console.log(arr1);
arr1[7] = 8;
console.log(arr1);
arr2=[1,2,3,4,5];
console.log(arr2);
arr2.push(6);
arr2.push(7);

console.log(arr2);
// delete arr1[2];
arr2.pop();
console.log(arr2);

arr2.shift();
console.log(arr2);
arr2.unshift(1);
console.log(arr2);



console.log(arr2.slice(0,4));
console.log(arr2);
arr9 = arr2.splice(2,0,'str','str2');
console.log(arr2);

str ='12345';
arr3 = str.split('');
console.log(arr3);

console.log(typeof(Number(arr3[0])));
console.log(typeof(arr3[0]));

str1 = arr3.join('');
console.log(str1);

console.log(arr1.concat(arr2, 7));

len = arr2.length;
for(i=0; i<len;i++){
    console.log(arr2[i]);
}
for(i=0; i<len;i++){
    console.log(arr2[i]**2);
}

// function funName(){}
// funName=()=>{}
// (element)=>{}

arr2.forEach((element) =>{console.log(element)});

arr4 = ['a','b','c','d','e'];
arr4.forEach(element =>{console.log(element)});
