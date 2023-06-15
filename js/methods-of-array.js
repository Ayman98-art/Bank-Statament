// Methods of String

//          0123456789121112131415 // index 
var test = "hello WorlLd 404"

console.log(test.toLocaleUpperCase())//have not parametars =>> "HELLO WORLD 404"
console.log(test.toLocaleLowerCase())//have not parametars =>> "hello WorlLd 404"

// *****************************************

console.log(test.charAt(2))//write number of index as a parameta ===>> "l"

// *****************************************


console.log(test.indexOf("W"))//"6" //write what i want to search ==>> result wiil be number of index
console.log(test.lastIndexOf("e"))//"1" //write what i want to search ==>> result wiil be number of index

// *****************************************

console.log(test.includes("o"))// yes, it founded //result "true" or "false"
console.log(test.includes("s"))// no, it isn't founded //result "true" or "false"

// *****************************************

console.log(test.repeat(5))//write a number as a parameta to repeat what i want

// *****************************************

// (1)      //(2)
console.log(test.replace("hello","ayman"))// (1) is the old parameta will be replaced  with (2) the new parameta

// *****************************************

                  // (1) (2)
                  console.log(test.slice(2,4))//cut from string //parameta (1) start ..... parameta (2) end but take (2 and 3 , 4 not will be taken)

// *****************************************

console.log(test.split(" "))//transform the(String) to (Array)
console.log(test.split(" ",5))//transform the(String) to (Array)//cut from "" to (number)

// *****************************************

console.log(test.startsWith("h"))// yes, it founded //result "true" or "false"
console.log(test.startsWith("c"))// no, it isn't founded //result "true" or "false"

// *****************************************

console.log(test.endsWith("4"))// yes, it founded //result "true" or "false"
console.log(test.endsWith("s"))// no, it isn't founded //result "true" or "false"

// *****************************************

console.log(test.substring(2,5))//cut from string //parameta (1) start ..... parameta (2) end but take (2 and 3 >> 5 not will be taken)

// *****************************************

var test2 = "                   hello WorlLd 404"
console.log(test2.trim())//remove the space and write the same string

// *****************************************

console.log(test.length)// will be (16) // number of string