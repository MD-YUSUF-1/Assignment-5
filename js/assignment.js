
// Buy ticket button Code
const buyTicketBtn = document.getElementById('buy-ticket-btn');
buyTicketBtn.addEventListener('click', function () {
    const ticket = document.getElementById('ticket');
    ticket.scrollIntoView({ behavior: "smooth" })
})

// Seat choice code
let count = 0;
const seatChoice = document.getElementsByClassName('seat-choice');
for (let seats of seatChoice) {
    seats.addEventListener('click', function () {
        // Multiple click problem solution code
        if(seats.style.backgroundColor==='rgb(29, 209, 0)'){
            return;
        }
        
        // seat color change code
        count = count + 1;
        seats.style.backgroundColor = '#1DD100';
        if(count>4){
            alert('Maximum selected seats reach')
            seats.style.backgroundColor = '';
            return;
        }

        // seat number counter code
        document.getElementById('selected-seat').innerText = count;
        document.getElementById('left-seats').innerText = 8 - count;

        // Selected seats Adding in Seat Booking section
        const seatText = seats.innerText;
        const seatPrice = document.getElementById('seat-price').innerText;
        const selectedContainer = document.getElementById('choice-seats-details')
        const li = document.createElement("li");
        const seatNumber = document.createElement("p");
        seatNumber.innerText = seatText;
        const price = document.createElement("p");
        price.innerText = seatPrice;
        const seatType = document.createElement("p");
        seatType.innerText = "Economy"

        li.appendChild(seatNumber);
        li.appendChild(seatType);
        li.appendChild(price);
        selectedContainer.appendChild(li);

        // total price calculator
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice)
        document.getElementById('total-price').innerText = convertedTotalPrice + parseInt(seatPrice);

        // GRAND total price calculator
        const grandtotalPrice = document.getElementById('grand-total').innerText;
        const convertedGrandTotalPrice = parseInt(totalPrice)
        document.getElementById('grand-total').innerText = convertedGrandTotalPrice + parseInt(seatPrice);
    });

}

// Coupon code applying part
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const grandTotalPrice1 = document.getElementById('total-price').innerText;
    const convertedGrandTotalPrice1 = parseInt(grandTotalPrice1);

    const inputText = document.getElementById('input-coupon').value;
    if (inputText === "NEW15") {
        document.getElementById('grand-total').innerText = convertedGrandTotalPrice1 - (convertedGrandTotalPrice1 * .15)
        document.getElementById('apply-coupon').style.display='none';
    }
    else if (inputText === "Couple 20") {
        document.getElementById('grand-total').innerText = convertedGrandTotalPrice1 - (convertedGrandTotalPrice1 * .20)
        document.getElementById('apply-coupon').style.display='none';
    }
    else{
        alert('Wrong Coupon Code');
    }
})

// After clicking next btn, success page showing part
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    const grandTotalPriceForNextBtn = document.getElementById('grand-total').innerText;
    const convertedGrandTotalPriceForNextBtn = parseInt(grandTotalPriceForNextBtn)
    if(convertedGrandTotalPriceForNextBtn!==0){
    document.getElementById('success-pop-up').style.display='block';
    }
    else{
        alert("You did not select any seat ")
    }
})

// continue button of Success page click event code
const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function () {
    document.getElementById('success-pop-up').style.display='none';
})

