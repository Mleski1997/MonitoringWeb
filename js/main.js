const nav = document.querySelector('.navbar-collapse')
const checkbox = document.getElementById('flexCheckDefault')
const error = document.querySelector('.form-accept')
const myForm = document.getElementById('myForm')

document.addEventListener('submit', function(event) {
    if(!checkbox.checked) {
        event.preventDefault()
        error.style.display ='block'
    }
})

document.addEventListener('click', () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}
})


