function openTipo(tipo, local) {
    var indice = tipo;
    var target = local;
    var url = './../calculadoras/content' + indice +'.html';

    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText;
        }
    }

    xml.open("GET", url, true);

    xml.send()
}

