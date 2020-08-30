
var prod = localStorage.getItem('prodUploaded');
prod2 = JSON.parse(prod);
console.log(prod2);
var containerPosts = $(`#postz`);
console.log(containerPosts);
mostrarProductos();
/*if (prod2.name == "Apple") {
    prod2.name === "HTML";
}
else if (prod2.name == "Moto") {
    prod2.name === "CSS";
}
else if (prod2.name == "LG") {
    prod2.name === "JS";
}
else if (prod2.name == "Samsung") {
    prod2.name === "PHP";
}
else if (prod2.name == "Huaweii") {
    prod2.name === "NODEJS";
};*/



function mostrarProductos() {
    prod2.forEach(function (element, index) {
        console.log(element.year)
        containerPosts.append(`
        <div class="post"    data-category="${element.name}" data-id="${index}">
    <div class="ctn-img">
        <img src="${element.year}" alt="">
    </div>
    <h2>${element.category}</h2>
    <span>${element.specification}</span>
    <ul class="ctn-tag">
        <li>$${element.price}</li>
        </ul>
        <a href="${element.link}"><button>Leer Mas</button></a>
    </div>`)
    })
}
