
// ===== MODAL =====

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const price = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('.price').innerHTML = `${price}`
    })
}


document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})