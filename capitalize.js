function capitalize(str, lowerRest) {

    let [
        first,
        ...rest
    ] = str;

    console.log('first is ...', first);
    console.log('the rest is ...', ...rest);

}

module.exports = capitalize;