const subirImagen = event => {
    const archivos = event.target.files;
    const data = new FormData();

    data.append('archivo', archivos[0]);

    fetch('/api/subir-archivo', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = 'El archivo ' + data.path + ' se ha subido correctamente.';
    })
    .catch(error => {
        console.error(error);
    });
}

document.querySelector('#subir_archivo').addEventListener('change', event => {
    subirImagen(event);
});

const nombrePDF = document.querySelector("#nombrePDF")
const verPDF = document.querySelector("#verPDF")

verPDF.addEventListener("click", () => {
    window.open("localhost:3000/uploads/"+nombrePDF.value+".pdf","_blank");
})