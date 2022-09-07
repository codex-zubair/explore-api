object = {
    car: 'tesla',
    color: 'red',
    price: 1000,
    drive: {
        allowed: "18+",

        owner: function () {
            return ('he can drive');
        },


        ownerAge: function () {
            // console.log(`He is ${this.allowed}`);
            console.log(this.allowed);
            this.owner();

        }
    }
}






value = JSON.stringify(object);

// !Stringified Value
console.log(value);
// ----------

// convert StringiFied to OBJECT...JSON.

valueConverted = JSON.parse(value);
console.log(valueConverted);




// outPut: 18+ he can drive. 