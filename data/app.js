// Product Constructor
class Product {
    constructor(name, price, year, link, specification, category) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.link = link;
        this.specification = specification;
        this.category = category;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center ml-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Modelo</strong>: ${product.category} <br> -
                    <strong>Precio</strong>: ${product.price} - <br>
                    <strong>Especificaciones</strong>: ${product.specification} <br>
                    <strong> Img </strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado exitosamente', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM 
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value,
            link = document.getElementById('link').value,
            specification = document.getElementById('spef').value,
            category = document.getElementById('category').value;

        //Nuevo Producto
        const product = new Product(name, price, year, link, specification, category);
        var prodUploaded = [];
        prodUploaded = prodUploaded.push(product);
        localStorage.setItem('prodUploaded', JSON.stringify(prodUploaded));

        
        const ui = new UI();

        // Validacion de campos
        if (name === '' || price === '' || year === '' ||  link === '' ) {
            ui.showMessage('Por favor inserte todos los campos', 'danger');
        }

        // Guardado
        ui.addProduct(product);
        ui.showMessage('Producto agregado exitosamente!', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });
    
   
    