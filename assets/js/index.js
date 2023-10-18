function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
}

const applicantForm = document.getElementById('consult__form')
applicantForm.addEventListener('submit', handleFormSubmit)
