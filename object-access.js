object = {
    car: 'tesla',
    color: 'red',
    price: 1000,
    drive: {
        allowed: "18+",

        owner: function ()
        {
            return('he can drive');
        },


        ownerAge:function(){
            // console.log(`He is ${this.allowed}`);
            console.log(this.allowed);
            this.owner();

        }
    }
}


object.drive.ownerAge();

const {car,price} = object;
const {owner} = object.drive;


console.log(car);
console.log(price);
console.log(owner());

// outPut: 18+ he can drive. 