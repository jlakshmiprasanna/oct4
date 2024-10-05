// Question-1
function add(a,b){
    console.log(a+b)
}
add(10,20)

// Question-2
function sub(a,b){
    return(b-a)
}
console.log(sub(20,10))

// Question-3
function mul(a,b){
    return a*b
}
console.log(mul(10,20))

// Question-4
function div(a,b){
    if (b===0){
        return "cannot divide by zero";
    }
    else{
        return a/b;
    }
}
console.log(div(50,2));
console.log(div(50,0));