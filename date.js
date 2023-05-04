module.exports = getDate;
function getDate(){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    day = today.toLocaleDateString("pl-PL",options);
    return day;
}
