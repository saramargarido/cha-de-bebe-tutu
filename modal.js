
// ===== MODAL =====

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const qrcode = card.querySelector('img').getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `img/${qrcode}.jpg`
    })
}


document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})