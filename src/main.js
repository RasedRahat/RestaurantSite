function validateForm(theForm) {
    if (theForm.name.value === '')
        alert('Please enter your name.');
    else if (theForm.email.value === '')
        alert('Please enter your email.');
    else if (theForm.phone.value === '')
        alert('Please enter your phone number.');
    else
        alert('Thank you, your information is valid.');
}

window.onload = function() {
    var jsWarning = document.getElementById('js-warning');
    jsWarning.parentNode.removeChild(jsWarning);
}
