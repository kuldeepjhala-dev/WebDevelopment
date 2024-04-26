const student = {
    name: "shraddha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

student.getAvg(); //op: shraddha got avg marks = 95

function thisValue() {
    console.log(this);
}

thisValue(); //op: window object