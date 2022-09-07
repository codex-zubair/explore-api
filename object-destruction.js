object = {
    car: 'tesla',
    color: 'red',
    price: 1000,
    drive: {
        allowed: "18+",

        owner: function () {
            console.log("he can drive");
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




// !Let loop the date.

for (keys in valueConverted) {
   
    // Getting The all keys

    console.log(keys);


    // Lets access into the properties...

    console.log(valueConverted[`${keys}`]);

    // console.log(typeof keys);
    // console.log(valueConverted['car']);
}




// outPut: 18+ he can drive. 



// ! Need to loop inside also drive...

const { drive } = object;

for (keys in drive) {
    console.log(drive[`${keys}`]);

    // !Accessing Inside nested Object specific property
    if ([`${keys}`] == "allowed") {
        console.log("working");
    }


    // !Accessing Inside nested Object specific  Function
    if ([`${keys}`] == 'ownerAge') {
        console.log(drive[`${keys}`]['ownerAge()']);
        console.log("working 2")
        drive[`${keys}`]();
    }
}