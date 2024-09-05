

const obj = {
    nam : "harkirat",
    age : 24
};





class Rectangle
{
    constructor(width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area()
    {
        const area = this.width * this.height;
        return area;
    }

    paint()
    {
        console.log(`Painting with color ${this.color}`);
    }
}


const rect = new Rectangle(2, 4, "RED");
const area = rect.area();
console.log(area);

rect.paint();


const now = new Date();
console.log(now.getFullYear());


const map = new Map();
map.set("name", "Harkirat");
map.set("age", "30");
console.log(map.get("name"));

setTimeout(callback, 3000);

function callback()
{
    console.log("HI")
}

setTimeout(() => {
    console.log("ok")
}, 1000);

// setTimeout(5000).then(callback);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(5000).then( () => console.log("k"))


// console.log(delay())