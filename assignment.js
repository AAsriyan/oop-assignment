class Course {
	#price;

	get price() {
		return `\$${this.#price}`;
	}

	set price(value) {
		if (value < 0) {
			throw "Invalid price";
		}
		this.#price = value;
	}

	constructor(title, length, price) {
		this.title = title;
		this.length = length;
		this.price = price;
	}

	calculateValue() {
		return (this.length / this.#price).toFixed(2);
	}

	summary() {
		return `This course will teach you ${this.title} and it will take you ${this.length} hours to complete. This course costs ${this.price}`;
	}
}

class PracticalCourse extends Course {
	constructor(title, length, price, excercises) {
		super(title, length, price);
		this.numOfExercises = excercises;
	}
}

class TheoreticalCourse extends Course {
	publish() {
		console.log(`${this.title} may be published in the future!`);
	}
}

// const javascript = new Course("JavaScript", 30, 19.99);
// const python = new Course("PythonavaScript", 25, 14.99);
// console.log(javascript);
// console.log(python);
// console.log(javascript.calculateValue());
// console.log(javascript.summary());

const graphQl = new TheoreticalCourse("GraphQl", 50, 10);
const java = new PracticalCourse("Java", 100, 34.99, 25);
console.log(java);
// console.log(java.calculateValue());
// console.log(java.summary());
graphQl.priceValue;
console.log(graphQl);
graphQl.summary();
// console.log(graphQl.calculateValue());
// console.log(graphQl.publish());
