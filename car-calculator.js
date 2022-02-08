function validDates(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
}


function calculateDays(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    const timediff = departure.getTime() - arrival.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1; //what does it mean?
    return diffindays; // what does it "mean return"
}

function calculatePrice(days, priceperday) {
    const totalprice = priceperday * days;
    return totalprice;
}

const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");
const form = document.getElementById("form");
const output = document.getElementById("output");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    error.innerHTML = "";
    const datesValid = validDates(arrival.value, departure.value);
    if (datesValid) {
        for (const comfort of comfortcategories) {
        // If true, price calculation must take place here
        const days = calculateDays(arrival.value, departure.value);
        const price = calculatePrice(days, comfort.priceperday);               
        output.insertAdjacentHTML("beforeend", `<br>${comfort.category}: Staying for ${days} days costs dkr. ${price}`);
    }
    } else {
        error.innerHTML = " The day of departure must be later than the day of arrival";
    }

})