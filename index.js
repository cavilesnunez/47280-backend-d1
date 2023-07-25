class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        // Validar que todos los campos sean obligatorios
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        // Validar que no se repita el campo "code"
        if (this.products.some((p) => p.code === product.code)) {
            console.error("El código de producto ya existe.");
            return;
        }

        // Agregar el producto con un id autoincrementable
        const newProduct = {
            ...product,
            id: this.productIdCounter++,
        };

        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    }



    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            console.error("Producto no encontrado.");
        }
        return product;
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();

// Agregar productos
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});

productManager.addProduct({
    title: "Teclado Gamer Asus",
    description: "Teclado en español, rgb switches mecánicos red.",
    price: 100,
    thumbnail: "imagen0.png",
    code: "def456",
    stock: 10,
});

productManager.addProduct({
    title: "Mouse Logitech MX",
    description: "Mouse confogurable, bateria recargables, 6 botones y 2 ruedas, ergonómico.",
    price: 150,
    thumbnail: "imagen1.png",
    code: "ghi789",
    stock: 5,
});

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);



productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});


// Obtener producto por id
const productId = 6;
const productById = productManager.getProductById(productId);

console.log("Producto con id", productId, ":", productById);
