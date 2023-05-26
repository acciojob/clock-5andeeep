//your JS code here. If required.
const timer = document.getElementById("timer");

function showTime(){
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let am_pm = "AM";

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }
    if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    // hour = hour<10?"0"+hour : hour;
    // minute = minute<10?"0"+minute : minute;
    // second = second<10?"0"+second : second;

    timer.innerText = `${day}/${month}/${year}, ${hour}:${minute}:${second} ${am_pm}`;
}
// showTime();
setInterval(showTime);



// setInterval(showTime, 1000);
// function showTime(){
//     let d = new Date();
//     let day = d.getDate();
//     let month = d.getMonth();
//     let year = d.getFullYear();
//     let hour = d.getHours();
//     let minute = d.getMinutes();
//     let second = d.getSeconds();
//     let am_pm = "AM";

//     if(hour > 12){
//         hour -= 12;
//         am_pm = "PM";
//     }
//     if(hour == 0){
//         hour = "AM";
//     }

//     hour = hour<10?"0"+hour : hour;
//     minute = min<10?"0"+minute : minute;
//     second = second<10?"0"+second : second;

//     let currentTime = `${day}/${month}/${year}, ${hour}:${minute}:${second} ${am_pm}`;
//     timer.innerText = currentTime;
// }
// showTime();





