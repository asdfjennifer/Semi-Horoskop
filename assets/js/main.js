let input = document.getElementById("sternzeichenInfo");

function horoscope() {
    // console.log("working?");
    switch(input.value) {
        case "jan":
            document.getElementById("result").innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great https://www.horoscopedates.com/img/icon_aquarius.png";
                break;
        case "feb":
            document.getElementById("result").innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all… https://www.horoscopedates.com/img/icon_pisces.png";
                break;
        case "mar":
            document.getElementById("result").innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone… https://www.horoscopedates.com/img/icon_aries.png";
                break;
        case "apr":
            document.getElementById("result").innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
                break;
        case "may":
            document.getElementById("result").innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
                break;
        case "jun":
            document.getElementById("result").innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…";
                break;
        case "jul":
            document.getElementById("result").innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
                break;
        case "aug":
            document.getElementById("result").innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
                break;
        case "sep":
            document.getElementById("result").innerHTML = "Pick a cultural event that's coming up and get some tickets for it today.";
                break;
        case "oct":
            document.getElementById("result").innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
                break;
        case "nov":
            document.getElementById("result").innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
                break;
        case "dec":
            document.getElementById("result").innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.";
                break;
        case "default":
            document.getElementById("result").innerHTML = "Please enter a month";
    }
}
