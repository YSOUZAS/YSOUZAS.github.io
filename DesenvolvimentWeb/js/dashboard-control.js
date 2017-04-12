function logout() {
    let nPath = window.location.pathname.search('/views/');
    let url = window.location.pathname.substring(0, nPath) + '/views/index.html'
    window.location.assign(url);
}

function returnName() {
    let userName = document.getElementById('userName');
    userName.text = localStorage.user;
}