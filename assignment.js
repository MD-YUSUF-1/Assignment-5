const buyTicketBtn = document.getElementById('buy-ticket-btn');

buyTicketBtn.addEventListener('click', function () {
    const ticket = document.getElementById('ticket');
    ticket.scrollIntoView({ behavior: "smooth" })
})

let count = 0;
const seatChoice = document.getElementsByClassName('seat-choice');
for (let seats of seatChoice) {
    seats.addEventListener('click', function () {
        count = count + 1;
        seats.style.backgroundColor = '#1DD100';

        document.getElementById('selected-seat').innerText = count;

        document.getElementById('left-seats').innerText = 8 - count;
        if(count>4){
            alert('Maximum selected seats reach')
            seats.style.backgroundColor = '';
        }

        const seatText = seats.innerText;
        const seatPrice = document.getElementById('seat-price').innerText;
        console.log(seatPrice);
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

        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice)
        document.getElementById('total-price').innerText = convertedTotalPrice + parseInt(seatPrice);

        const grandtotalPrice = document.getElementById('grand-total').innerText;
        const convertedGrandTotalPrice = parseInt(totalPrice)
        console.log( convertedGrandTotalPrice );
        document.getElementById('grand-total').innerText = convertedGrandTotalPrice + parseInt(seatPrice);
    });

}

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


const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    console.log("YUSUF")
})

