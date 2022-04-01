

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');

form.addEventListener('submit', e => {
	e.preventDefault();

    checkInputs();

});

function checkInputs() {
	// trim to remove the whitespaces

	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordcheckValue = passwordcheck.value.trim();

	if(emailValue === '') {
		ErrorFor(email, 'Email cannot be blank');
	} else if (!Email(emailValue)) {
		ErrorFor(email, 'Not a valid email');
	} else {
		SuccessFor(email);
	}

    //email format
    function Email(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }   
	
	if(passwordValue === '') {
		ErrorFor(password, 'Password cannot be blank');
	} else {
		SuccessFor(password);
	}
	
	if(passwordcheckValue === '') {
		ErrorFor(passwordcheck, 'Password cannot be blank');
	} else if(passwordValue !== passwordcheckValue) {
		ErrorFor(passwordcheck, 'Passwords does not match');
	} else{
		SuccessFor(passwordcheck);
	}

    return  window.open (
        "https://www.google.com", "__blank");
     
    
}

function ErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function SuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

//toggle eye

var iconeye = true;

function click() {
    if (iconeye){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color = "#7a797e";
        iconeye = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color = "black";
        iconeye = true;
    }
}

