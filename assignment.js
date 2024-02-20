const buyTicketBtn= document.getElementById('buy-ticket-btn');

buyTicketBtn.addEventListener('click', function(){
    const ticket=document.getElementById('ticket');
    ticket.scrollIntoView({behavior: "smooth"})
})
