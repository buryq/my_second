const genObj = (function* () {
    console.log('A');
    yield;
    console.log('B');
    yield;
    console.log('C');
    return;
})();

genObj.next();
genObj.next();