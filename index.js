const add=(num1,num2)=>{
    return num1+num2;
}

const subtract=(num1,num2)=>{
    return num1-num2;
}

const multiply=(num1,num2)=>{
    return num1*num2;
}

const divide=(num1,num2)=>{
    return num1/num2;
}

const sqr=(num1)=>{
    return num1*num1;
}

const main=()=>{
    let a=10;
    let b=5;
    console.log(add(a,b));
    console.log(subtract(a,b));
    console.log(multiply(a,b));
    console.log(divide(a,b));
    console.log(sqr(a));
    console.log("returning from main");
}

main()
