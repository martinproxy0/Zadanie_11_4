var brands = ['Nokia','BalckBerry','Samsung'],
colors = ['black','white','grey'];

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};
Phone.prototype.ringing = function() {
    console.log("Your's " + this.color + " phone is ringing now! Pick up " + this.brand);
};

function makePhone(brand, price, color) {
    var phone = new Phone(brand, price, color);
    return phone;
}

function makePhones() {
    brands.forEach(function (element, index) {
        var price = Math.random()*100;
        makePhone(element,price,colors[index]);
      });
    return phones;
}

var myPhones = [];
myPhones = makePhones();
console.log(myPhones[0]);