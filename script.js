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

inputValue.addEventListener('focusout', function () {
    this.value = '';
    updateProgress(value);
});

const checked = document.querySelector('.animated');
const hide = document.querySelector('.hide');
const spinnerContainer = document.querySelector('.spiner-container');

checked.addEventListener('change', (e) => {
    e.preventDefault()
    const spinner = document.querySelector('.spinner-normal') || document.querySelector('.spinner-animated');

    if (checked.checked) {
        if (spinner) spinner.remove();

        const animatedSpinner = document.createElement('div');
        animatedSpinner.classList.add('spinner-animated');
        spinnerContainer.appendChild(animatedSpinner);
    } else {
        if (spinner) spinner.remove();

        const normalSpinner = document.createElement('div');
        normalSpinner.classList.add('spinner-normal');
        spinnerContainer.appendChild(normalSpinner);
    }
});


hide.addEventListener('change', (e) => {
    e.preventDefault()
    if (hide.checked) {
        spinnerContainer.style.display = 'none'
    } else {
        spinnerContainer.style.display = 'flex'
    }
})