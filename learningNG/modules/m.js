const x=5;

function getX(){
    console.log('I am a function');
}

// module.exports = {x,getX};

// {} === exports === module.exports

exports.x = x; // works immutating object is fine
exports = {x}; // failed. why? change the reference to {x} and the module.exports is {} empty.

