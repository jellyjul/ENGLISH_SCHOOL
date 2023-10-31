const button = document.getElementById("submit")

function formValidation() {
    const form = document.getElementById('consult__form')
    const name = form.querySelector('.form__name')
    const number = form.querySelector('.form__number')
    const error = document.querySelector('.red')

    if (allLetter(name)){
        if (validateNumber(number)){
            let user = {
                userName : name.value,
                userNumber : number.value,
                }
                console.log(user)
    
            fetch('https://httpbin.org/post ', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(user => {
                    console.log(user);})
                .catch(error => console.error('Произошла ошибка:', error));

            alert(`${name.value}, Форма успешна отправлена!`);
            
            clearInput()
            
            return true;
        }
    }
    return false;

    function allLetter(name){ 
        const nameErrorWarning = document.querySelector('.consult__name')

        if (nameErrorWarning.contains(error)){
            nameErrorWarning.removeChild(error)
        }
        
        const letters = /^[А-яЁёA-aZ-z]/;
        if(name.value.match(letters)){
            return true;
        }
        else {
            const newElement = document.createElement('p')
            newElement.classList.add('red')
            newElement.textContent = "Имя должно содержать только  буквы!"
            nameErrorWarning.append(newElement);
            name.focus();
            return false;
        }
    }
    function validateNumber(number){ 
        const numberErrorWarning = document.querySelector('.consult__number')
        
        if (numberErrorWarning.contains(error)){
            numberErrorWarning.removeChild(error)
        }
        const numberFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if(number.value.match(numberFormat)){
            return true;
        }
        else {
            let newElement = document.createElement('p')
            newElement.classList.add('red')
            newElement.textContent = "Введите корректный номер телефона"
            numberErrorWarning.appendChild(newElement);
            number.focus();
            return false;
        }

    }
    function  clearInput() {
        name.value = ''
        number.value = ''
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    formValidation()
})


//// ошибки

const isOnline = window.navigator.onLine;
console.log(isOnline)
try {
    isOnline === true ;
    console.log('You are online');
    }
catch (err) {
    console.log(err.name);
    alert('You are offline')
}