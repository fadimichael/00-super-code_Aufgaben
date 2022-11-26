class ball {
  constructor(ballType) {
    this.ballTypes = ballType;
  }
}

let ball1 = new ball("regular");
let ball2 = new ball("super");

// console.log(ball1);
// console.log(ball2);

console.log(ball1.ballTypes);
console.log(ball2.ballTypes);
