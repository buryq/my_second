function* step() {

    wait(1);
    yield;
    wait(2);
    yield;
    wait(3);
    return;

}

function wait(s) {
    setTimeout(() => {
        console.log(`I have waited ${s} seconds to show..`);
    }, s * 1000);
}

let genObj = step();

genObj.next();
genObj.next();
// genObj.next();