function detalhes() {
    let path = window.location.pathname;
    let url = path.replace('meuscarros', 'meucarro');
    window.location.assign(url);
}