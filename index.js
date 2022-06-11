function writeCards(cards, events) {
    const messages = [];
for(let i = 0; i < cards.length; i++) {
let events = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
messages.push(events)
}
return messages;
}
writeCards (cards) ;

function countDown(){
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}