function updateProgress(value) {
    const spinner = document.querySelector('.spinner-normal');
    const gradient = `conic-gradient(
        #0084ff ${value}%, 
        #ddd ${value}%
    )`;
    spinner.style.background = gradient;
}

const inputValue = document.querySelector('.normal');
inputValue.addEventListener('input', function () {
    const value = parseInt(this.value) || 0;
    updateProgress(value);
});
updateProgress(parseInt(inputValue.value) || 0);


const checked = document.querySelector('.animated');
const spinnerContainer = document.querySelector('.spiner-container');

checked.addEventListener('change', (e) => {
    e.preventDefault()
    const spinner = document.querySelector('.spinner-normal') || document.querySelector('.spinner-animated');

    if (checked.checked) {
        // Удаляем div с классом spinner-normal
        if (spinner) spinner.remove();

        // Создаем новый div с классом spinner-animated
        const animatedSpinner = document.createElement('div');
        animatedSpinner.classList.add('spinner-animated');
        spinnerContainer.appendChild(animatedSpinner);
    } else {
        // Удаляем div с классом spinner-animated
        if (spinner) spinner.remove();

        // Создаем новый div с классом spinner-normal
        const normalSpinner = document.createElement('div');
        normalSpinner.classList.add('spinner-normal');
        spinnerContainer.appendChild(normalSpinner);
    }
});


const hide = document.querySelector('.hide');
hide.addEventListener('change', (e) => {
    e.preventDefault()
    if (hide.checked) {
        spinnerContainer.style.display = 'none'
    } else {
        spinnerContainer.style.display = 'flex'
    }
})