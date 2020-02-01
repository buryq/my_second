function likes(names) {

    this.names = names;

    let length = this.names.length;

    if (length === 0) {
        console.log('No one likes it.');
    }

    if (length === 1) {
        console.log(`${this.names[0]} likes it.`);
    }

    if (length === 2) {
        console.log(`${this.names[0]} and ${this.names[1]} like it.`);
    }

    if (length === 3) {
        console.log(`${this.names[0]}, ${this.names[1]} and ${this.names[2]} like it.`);
    }

    console.log(`${this.names[0]}, ${this.names[1]} and ${length - 2} others like it.`);


}

let names = ['Jack', 'Mary', 'Tracy', 'Alex', 'Brian'];

likes(names);