function running(count) {

    this.count = count;

    for (let i = 0; i < this.count; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }

}

running(5);