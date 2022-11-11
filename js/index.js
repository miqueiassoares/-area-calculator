function openPage(pagina, tipoDeCalculadora) {
    var indice = pagina;
    var target = tipoDeCalculadora;
    var url = '../calculadoras/' + indice + '.html';
    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function() {
        if(xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText;
        }
    }
    xml.open("GET", url, true);
    xml.send()
}