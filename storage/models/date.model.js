function isWeekend() {

    let today = new Date().getDay();

    // console.log(today);

    return today === 0 || today === 6 ? true : false; 
}

console.log(isWeekend());

//---------------------------------------------------------------------------------------------------------------------

module.exports = {
    isWeekend,
};
