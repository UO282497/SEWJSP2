class Manager {
    manager() {

    }

    ocultar() {

        $("p").hide();
    }
    mostrar() {

        $("p").show();
    }
    modificarTexto() {
        $("p").text("Texto modificado");
    }
    deshacerModificacion() {
        $("p").text("Texto ocultable");
    }
    eliminar() {
        $("li p").remove();
        $("li h2").remove();
    }
    añadirTexto() {
        $("li p").first().append("Más texto ");
    }
    nuevo() {
        $("li section").after("<h2>Nuevo párrafo </h2><p></p>");
    }
    analizar() {
        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $("main p").append("Etiqueta padre : " + etiquetaPadre + " elemento : " + $(this).get(0).tagName + " valor: ");

        });
    }
    contar() {
        var c = 0;
        $("table tr").each(function () {
            c++;
        });

        var d = 0;
        $("table tr:first th").each(function () {
            d++;
        });


        $("aside p").append("La tabla tiene un tSotal de " + c + " filas, y " + d + " columnas");
    }



}
var manager = new Manager();



