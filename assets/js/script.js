// Js Modal

const modal = document.querySelector('.modal');
const modal_container = document.querySelector('.modal-container');
const btn_buy_tickets = document.querySelectorAll('.place-button')
const btn_close = document.querySelector('.modal-close');

function hiddenBuyTicket() {
    modal.classList.remove('open');
}

function openBuyTicket() {
    modal.classList.add('open');
}

for (const btnTicket of btn_buy_tickets) {
    btnTicket.addEventListener('click', openBuyTicket);
}

modal.addEventListener('click', hiddenBuyTicket)

btn_close.addEventListener('click', hiddenBuyTicket);

modal_container.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
})


// JS Menu Reponsive


const btn_menu = document.querySelector('.contaniner-icon-header-rps');
const list_item_nav = document.querySelectorAll("#nav li a[href*='#']");
const header = document.querySelector('#header');
const height_header = header.clientHeight;
const sub_nav = document.querySelector('.sub-nav');
sub_nav.style.display = 'none'

btn_menu.addEventListener('click', function() {
    if (header.clientHeight === height_header) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
})


for (const item of list_item_nav) {
    item.addEventListener('click', function(event) {
        var isParnetMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('sub-nav');

        if (!isParnetMenu) {
            header.style.height = null;
            sub_nav.style.display = 'none';
        } else {
            event.preventDefault();
            if (sub_nav.style.display == 'none') {
                sub_nav.style.display = 'block';
            } else {
                sub_nav.style.display = 'none';
            }
        }
    })
}