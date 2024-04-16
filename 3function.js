// ();

function funName(){
    console.log('Hello from function');
}

funName();         //call invoke         Hello from function

function funName1(){
    // return 'Hello from function';
    return 5+6;
}
outputStr = funName1();

function funNameGreet(fname){                          //parameter
    console.log('Hello ' + fname);
}
funNameGreet('John');                                  //argument


function funAddition(a,b){
    // return 'Hello from function';
    return a+b;
}

x = funAddition(4,5);


funName3 = (x,y) =>{
    return x+y
}

(() => {console.log('hello from function')});

