


function CoolModule(id) {
    var something = "cool";
    var another = [1,2,3];
    var name = id;

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! " ));
    }

    function printId() {
        console.log("Your ID:  " + name);
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother,
        printId: printId
    }
}

var foo = CoolModule("meow");

// foo.doSomething();
// foo.doAnother();
// foo.printId();