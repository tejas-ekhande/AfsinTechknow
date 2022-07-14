const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card_read-more');

const cardHolder = document
    .querySelector('.card-holder');

cardHolder
    .addEventListener('click', e => {
        const current = e.target;
        const isReadMoreBtn = current.className.includes('.read-more-btn');
        if (!isReadMoreBtn)
            return;
        const currentText = e.target.parrentNode.querySelector('.card_read-more');
        currentText.classList.toggle('card_read-more--open');
    });