const factorial=(num:bigint)=>{
    let result:bigint = 1n
    for(let i =num; i>1;i--){
        result *= i
    }
    return `${num}! = ${result}`
}

console.log(factorial(100n))
