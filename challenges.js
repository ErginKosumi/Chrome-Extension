
// Challenge - INNERHTML

const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}

// Challenge - Template Strings / literals

const recipient = "James"
//  Create a new variable, sender, and set its value to your name
const sender = "Ergin Kosumi"

//  Refactor the email string to use template strings

//  Use your sender variable instead of your name
const email = `
    Hey ${recipient}! 

    How is it going? 
    
    Cheers ${sender}
`

console.log(email)

// Challenge - LOCAL STORAGE

// let name = localStorage.getItem("myLeads")
// console.log(name)

// // TURN INTO ARRAY THEN TURN INTO A STRING AGAIN
// let myLeads = `["https://www.facebook.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.youtube.com")

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

// Challenge - WRITING PARAMETER with template literals

const welcomeEl = document.getElementById("welcome-el")

//                 parameters are created on the inside of the function
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

//         arguments are created on the outside of the function
greetUser("Hi", " Ergin!", "❤️")
// console.log(greetUser(greeting))

// Challenge 

// Create a function, add(), that adds two numbers together and returns the sum

function add(number1, number2) {
    return number1 + number2
}

console.log( add(3, 4) )
console.log( add(9, 102) )


// Challenge

// Create a function, getfirst(arr), that returns the first item in the array, call it with an array as an argument to verify that it works

function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])
console.log(firstCard)
