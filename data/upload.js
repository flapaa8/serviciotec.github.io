class Article {
    constructor(title, resumen, subtitle, subtitleResume, image, contenido) {
        this.title = title;
        this.resumen = resumen;
        this.subtitle = subtitle;
        this.subtitleResume = subtitleResume;
        this.image = image;
        this.contenido = contenido;
    }
}
document.getElementById('subir')
    .addEventListener('click', function (e) {

        const title = document.getElementById('title').value,
            resumen = document.getElementById('resumen').value,
            subtitle = document.getElementById('subtitle').value,
            subtitleResume = document.getElementById('subtitleResume').value,
            image = document.getElementById('image').value,
            contenido = document.getElementById('contenido').value;





        const article = new Article(title, resumen, subtitle, subtitleResume, image, contenido);
        var articleUploaded = [];
        articleUploaded.push(article);
        console.log(articleUploaded);
        localStorage.setItem('articleUploaded', JSON.stringify(articleUploaded));
        e.preventDefault();
        location.href = ("./articulo.html");



    });