const buyTicketBtn= document.getElementById('buy-ticket-btn');

buyTicketBtn.addEventListener('click', function(){
    const ticket=document.getElementById('ticket');
    ticket.scrollIntoView({behavior: "smooth"})
})
 let count=0;
const seatChoice= document.getElementsByClassName('seat-choice');
for(let seats of seatChoice ){
    count=count+1;
    // if(count>4){
    //     alert('Maximum selection limit reached')
    // }
    seats.addEventListener('click', function(){
        seats.style.backgroundColor='#1DD100';
    });
    
    console.log(count);
}

