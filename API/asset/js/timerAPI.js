// UI Variables 
const timerDemo2 = document.getElementById("timerDemo2");

//timer 
function startTime() {
    //retrieve date 
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    //get the AM / PM value 
    let am_pm = h > 12 ? 'PM' : 'AM';
    // Convert the hour to 12 format 
    h = h % 12 || 12;
    // add zero 
    m = addZero(m);
    s = addZero(s);
    // Assign to the UI [p]
    timerDemo2.innerHTML = `${h} : ${m} : ${s} ${am_pm }`;
    setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i } // add zero in front of numbers < 10
    return i;
}