function rotate(card_num) {
    card = document.getElementsByClassName('card')[Number(card_num)]
    card.style.transform = 'rotateY(-180deg)'
}

function rotate_back(card_num) {
    card = document.getElementsByClassName('card')[Number(card_num)]
    card.style.transform = 'rotateY(0deg)'
}

