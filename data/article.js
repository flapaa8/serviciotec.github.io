var article = localStorage.getItem('articleUploaded');
article2 = JSON.parse(article);
console.log(article2);
var containerArt = $(`#article-content`);
console.log(containerArt);
mostrarArticulos();
function mostrarArticulos() {
    article2.forEach(function (element, index) {
        containerArt.append(`
        <article data-id="${element.index}">

            <h1>${element.title}</h1>

            <p>
            ${element.resumen}
            </p>

            <h1>${element.subtitle}</h1>

            <p>
            ${element.subtitleResume}
            </p>
            <img src="${element.image}" alt="#">
            <p>${element.contenido}</p>
        </article>`)
    
    })
}

