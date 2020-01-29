const p = new Promise((resolve, reject) => {

    let waitTime = 1;

    setTimeout(function (waitTime) {
        console.log(`I have waited ${waitTime} seconds to show.`);
        // resolve(`I have waited ${waitTime} seconds to show.`);
        resolve();
    }, waitTime * 1000)



})



async function delayShow() {
    await p;
    console.log('Finished.');
}

delayShow();