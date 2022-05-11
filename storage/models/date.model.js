function isWeekend() {

    let today = new Date().getDay();

    console.log(new Date().getDay());

    return today == 0 || today == 6 ? true : false;
}

// console.log(isWeekend());

//---------------------------------------------------------------------------------------------------------------------

function leapYear() {

    let thisYear = new Date().getFullYear();
    // let thisYear = 2024;

    console.log(thisYear);

    //   return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 == 0);
    return (thisYear % 400) ? ((thisYear % 100) ? ((thisYear % 4) ? false : true) : false) : true;
}

// console.log(leapYear());

//---------------------------------------------------------------------------------------------------------------------

module.exports = {
    isWeekend,
    leapYear,
};
