document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = event.currentTarget.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const toggle = faqItem.querySelector('.faq-toggle');

        if (answer.style.display === 'none' || !answer.style.display) {
            answer.style.display = 'block';
            toggle.textContent = '-';
        } else {
            answer.style.display = 'none';
            toggle.textContent = '+';
        }
    });
});
