try {
    console.log(a + b);
} catch(err) {
    console.log(err)
    console.log("There was an error");
    console.log("The error was saved in the error log")
}
console.log("My program does not stop")

// Manually throw error
try {
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log("There was a Reference Error");
}
console.log("My program does not stop")