let count=0;
const seatChoice= document.getElementsByClassName('seat-choice');
for(let seats of seatChoice ){
    seats.addEventListener('click', function(){
        count=count+1;
        seats.style.backgroundColor='#1DD100';
        document.getElementById('selected-seat').innerText=count;
    });
}
