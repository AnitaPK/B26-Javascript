// day = 10;
// 0-6   sun , mon, tue, 
today = new Date();
day = today.getDay();
console.log(day);

switch(day){
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('tue');
        break;
    case 3:
        console.log('wed');
        break;
    case 4:
        console.log('thur');
        break;
    case 5:
        console.log('fri');
        break;
   default:
        console.log('holiday');   
}

// 2 * 1
// 2 * 2
// 2 * 3
// 2 * 4

// for(initialization; condition; incre/dicre ){}

for(i=1;  i<=13; i++){
    if(i==10){
        // break;
        continue;
    }
    console.log(19*i);
} 

//     i = 1  i<=13           
// 1st                            19
// 2nd  1+1 2                  19*2   38
// 3rd      3                         57
// 4th      4                        76
// 9th                                171
// 10h  i=10    
// 11th 

num = 5;
facNum = 1;
// 5    4   3   2   1              i=5   num=5      facNum = i*facNum

//             i = 5   facNum = i*facNum  facNum=1           
// 1st   i=5   5*1       5*1  5              5           
// 2nd   i=4             4*5  20           20    5*4
// 3rd    i=3            3*20              60    5*4*3
// 4th    i=2            2*60             120    5*4*3*2
// 5th    i=1            1*120            120    5*4*3*2*1

 for(i=num; i>= 1; i--){
    facNum = i*facNum 
}
console.log('factorial of ' + num + ' is ' + facNum);


function findFactorial(n){
    for(i=n; i>= 1; i--){
        facNum = i*facNum 
    }
    console.log('factorial of ' + n + ' is ' + facNum);  
}
findFactorial(20);
function printStart(){
    line = '';
for(i=1;i<=5;i++){

    for(j=1;j<=i;j++){
        // console.log(j);
        line+='*';
    }
    line = line + '\n';
}
return line;
}
console.log(printStart());
//                         i = 0         j=i        *
// 1st               1st  0            0       *
// 2nd   i=1         1st  1           1         *


// 3rd   i=2        1st  2            2<=3           
