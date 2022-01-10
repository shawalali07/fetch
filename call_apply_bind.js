let name1 = {
    firstName: "Shawal",
    lastName: "Ali",
    // printFullName: function(){
    //     console.log(this.firstName+ " "+this.lastName);
    // }
}
printFullName = function(hometown, state){
    console.log(this.firstName+ " "+this.lastName, hometown + " "+ state );
}

// name1.printFullName()

// ------------function borrowing/call
let name2 = {
    firstName: "Junaid",
    lastName: "Bukhari"
}

// name1.printFullName.call(name2)
printFullName.call(name1, "Lahore", "Punjab")
// ---------- apply function
printFullName.apply(name2, ["Lahore", "Punjab"])

// ------------bind function
let myName = printFullName.bind(name1, "Lahore", "Punjab")
console.log(myName);
myName();

