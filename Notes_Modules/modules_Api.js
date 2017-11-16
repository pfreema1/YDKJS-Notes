

//name the object you are returning as your public API

var foo = (function CoolModule(id) {
    
    function change() {
        //modifying the public API
        //switches the function being called when using foo.identify() !
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log(id.toUpperCase());
    }

    var publicAPI = {
        change: change,
        identify: identify1,
        turd: 42
    };

    return publicAPI;

})("foo module");

// foo.identify();

// console.log(foo.turd);

// foo.change();

// foo.identify();

