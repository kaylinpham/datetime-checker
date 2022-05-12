function check() {
    const str = document.getElementById('checker').value;
    if (Date.parse(str) && parseInt(str[0])) {
        document.getElementById('message').innerHTML = "Valid date";
        document.getElementById('message').classList.add('green');
        setTimeout(() => {
            document.getElementById('message').classList.remove('green');
        }, 1000);
    } else {
        document.getElementById('message').innerHTML = "Invalid date";
        document.getElementById('message').classList.add('red');
        setTimeout(() => {
            document.getElementById('message').classList.remove('red');
        }, 1000);
    }
}
