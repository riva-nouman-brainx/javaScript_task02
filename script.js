const validDay = /^(0?[1-9]|[12][0-9]|3[01])$/;
const validMonth = /^(0?[1-9]|1[0-2])$/;
const validYear = /^(19|20)\d{2}$/;
document.addEventListener('DOMContentLoaded', function() {
    let validateMessage;
    let dayVal = false;
    let monthVal = false;
    let yearVal = false;
    document.getElementById("day").addEventListener("input", checkDay);
    function checkDay(event) {
        let day=document.getElementById("day").value;
        validateMessage = document.getElementById("dayError");
        if(day==""){
            dayVal=false;
            validateMessage.innerHTML="Don't leave field empty";
        }
        else if(day.match(validDay)){
            validateMessage.innerHTML="";
            dayVal=true;
        }
        else{
            validateMessage.innerHTML=" Invalid input";
            dayVal=false;
        }
        updateGoButton();
    }
    document.getElementById("month").addEventListener("input", checkMonth);
    function checkMonth(event) {
        let month=document.getElementById("month").value;
        validateMessage = document.getElementById("monthEror");
        if(month==""){
            monthVal=false;
            validateMessage.innerHTML="Don't leave field empty";
        }
        else if(month.match(validMonth)){
            validateMessage.innerHTML="";
            monthVal=true;
        }
        else{
            validateMessage.innerHTML=" Invalid input";
            monthVal=false;
        }
        updateGoButton();
    }
    document.getElementById("year").addEventListener("input", checkYear);
    function checkYear(event) {
        let year=document.getElementById("year").value;
        validateMessage = document.getElementById("yearError");
        if(year==""){
            yearVal=false;
            validateMessage.innerHTML="Don't leave field empty";
        }
        else if(year.match(validYear)){
            validateMessage.innerHTML="";
            yearVal=true;
        }
        else{
            validateMessage.innerHTML=" Invalid input";
            yearVal=false;
        }
        updateGoButton();
    }
    let goButton=document.getElementById("goButton");
    function updateGoButton() {
        if (dayVal==false || monthVal==false || yearVal==false) {
            goButton.setAttribute("disabled", "disabled")
        } 
        else {
            goButton.removeAttribute("disabled")

        }
    }
    function checkAgeRestriction() {
        let day = parseInt(document.getElementById("day").value); // Remove the '1' after 'value'
        let month = parseInt(document.getElementById("month").value);
        let year = parseInt(document.getElementById("year").value);
        var inputDate = new Date(year, month - 1, day); // Subtract 1 from month to match JavaScript's zero-based indexing
        var currentDate = new Date();
        var yearDifference = currentDate.getFullYear() - inputDate.getFullYear() +
                    (currentDate.getMonth() - inputDate.getMonth()) / 12 +
                    (currentDate.getDate() - inputDate.getDate()) / 365;
        var wholeYears = Math.floor(yearDifference);
        if (yearDifference > 15) {
            window.open("https://www.google.com", "_blank");
        } else {
            alert("You must be over 15 years old to submit the form, sorry!");
        }
    }

    goButton.onclick = checkAgeRestriction;
});

   

