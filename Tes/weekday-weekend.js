let today = new Date().getDay();

// console.log(today);

if (today === 0 || today === 6) {
    console.log("Today is weekend");
} else {
    console.log("Today is weekday");
}