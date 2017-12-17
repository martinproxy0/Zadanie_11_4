var brands = ['Nokia', 'BalckBerry', 'Samsung'],
    colors = ['black', 'white', 'grey'],
    myPhones = [];

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    return ("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};
Phone.prototype.ringing = function() {
    return ("Your's " + this.color + " phone is ringing now! Pick up " + this.brand);
};

(function() {
    initialize();
})();

function initialize() {
    makePhones();
    addParagraph(myPhones);
    document.getElementById("btn-go").addEventListener("click", chooseRingingPhone);
}

function makePhones() {
    for (let i = 0; i < 3; i++) {
        myPhones[i] = makePhone(i, 1000, i);
    }
}

function makePhone(brand, price, color) {
    var priceCalc = Math.round(Math.random() * price);
    return new Phone(brands[brand], priceCalc, colors[color]);
}

function addParagraph(phones) {
    phones.forEach(function(element) {
        var paragraph = document.createElement('p'),
            myDiv = document.getElementById('phones');
        paragraph.innerHTML = element.printInfo();
        document.getElementById('phones').appendChild(paragraph);
    });
}

function chooseRingingPhone() {
    var variant = Math.round(Math.random() * 2);
    ringingPhone(myPhones[variant]);

}

function ringingPhone(phone) {
    var h1 = document.createElement('h1');
    h1.innerHTML = phone.ringing();
    h1.className = phone.brand;
    h1.id = 'ringing';
    document.body.appendChild(h1);
    document.getElementById('btn-go').innerHTML = 'Pick Up the Phone!';
    document.getElementById("btn-go").removeEventListener("click", chooseRingingPhone);
    document.getElementById('btn-go').addEventListener("click", ringigOff);
}

function ringigOff() {
    document.getElementById('ringing').remove();
    document.getElementById('btn-go').innerHTML = 'Go again :)';
    document.getElementById('btn-go').removeEventListener("click", ringigOff);
    document.getElementById("btn-go").addEventListener("click", chooseRingingPhone);
}