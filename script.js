document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', function() {
        const emptySlot = document.querySelector('.letter-slot:empty');
        if (emptySlot) {
            emptySlot.textContent = this.textContent;
        }
    });
});
