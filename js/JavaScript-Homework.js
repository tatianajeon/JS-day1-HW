//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
    let words = dog_string.split(" ")
    x = words.indexOf("name")
    return words[x+2]
}
console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!"))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
   let i = 0;
   do {
        arr[i] = ' even index '
        i += 2
   }
   while (i < arr.length)
   return arr;
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//============ Code Wars ============//

// 8kyu keep hydrated
time = 12.3
function litres(time){
    return parseInt(time * 0.5)
    }

console.log(litres(time))


// 8kyu Reversed Strings
string = 'world'
function solution(str){
    var splitstring = str.split('')
    var reversedstr = splitstring.reverse()
    var joinstr = reversedstr.join('')
    return joinstr
}

console.log(solution(string))


// 8kyu String Repeat
x = (5,'hello')
function repeats(number, word){
    i = 0
    while (i < number){
        console.log(word)
        i += 1
    }
    return 
}

console.log(repeats(x))

// haven't figured this one out yet

