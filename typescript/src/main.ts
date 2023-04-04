type one = string

type two = string|number

type three = 'hello'

let a:one = 'hello'

let b = a as two  

let c = a as three


const addOrConcate = (a:number,b:number,c:'add'|'concat'):number|string =>{
    if(c === 'add')return a+b
    return ""+a+b
}

let myVal:string = addOrConcate(12,2,'concat') as string


let anotherVal:number = addOrConcate(2,2,"concat") as number 

// the Dom

const img = document.querySelector('img') as HTMLImageElement
const img1 = document.getElementById('#img')! as HTMLImageElement

img.src
img1.src