var productos =[
    {nombre: 'camisa',precio:300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos',precio:400},
    {nombre:'sombrero',precio:200}
];

var carrito=[];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Editar Carrito\n";
    menu += (productos.length + 3) + ". Menú Administrador\n"; 
    menu += (productos.length + 4) + ". Salir\n";

    return menu;

}


// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado =  productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

//Funcion para editar el carrito
function editarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no hay nada que editar.");
        return;
    }

    var opcionEditar;
    do {
        // Mostrar carrito con índices
        var menuEditar = "Selecciona producto a eliminar o Cero para salir:\n";
        for (var i = 0; i < carrito.length; i++) {
            menuEditar += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        }
        menuEditar += "0. Volver al menú principal\n";

        opcionEditar = Number(prompt(menuEditar));

        if (opcionEditar >= 1 && opcionEditar <= carrito.length) {
            var productoEliminado = carrito.splice(opcionEditar - 1, 1)[0];
            console.log('Producto "' + productoEliminado.nombre + '" eliminado del carrito.');
        } else if (opcionEditar !== 0) {
            console.log("Opción inválida, intenta de nuevo.");
        }
    } while (opcionEditar !== 0);
}

//Menu administrador
function menuAdministrador() {
    var opcionAdmin;
    do {
        var menuAdmin = "Menú Administrador:\n";
        menuAdmin += "1. Agregar producto al catálogo\n";
        menuAdmin += "2. Eliminar producto del catálogo\n";
        menuAdmin += "3. Ver catálogo\n";
        menuAdmin += "0. Volver al menú principal\n";

        opcionAdmin = Number(prompt(menuAdmin));

        if (opcionAdmin === 1) {
            var nombreNuevo = prompt("Ingrese el nombre del nuevo producto:");
            var precioNuevo = Number(prompt("Ingrese el precio del nuevo producto:"));
            if (nombreNuevo && !isNaN(precioNuevo) && precioNuevo > 0) {
                productos.push({nombre: nombreNuevo, precio: precioNuevo});
                console.log('Producto "' + nombreNuevo + '" agregado al catálogo.');
            } else {
                console.log("Datos inválidos, producto no agregado.");
            }
        } else if (opcionAdmin === 2) {
            if (productos.length === 0) {
                console.log("Catalogo vacío, no hay nada que eliminar.");
            } else {
                var menuEliminar = "Seleccione el producto a eliminar:\n";
                for (var i = 0; i < productos.length; i++) {
                    menuEliminar += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
                }
                
                menuEliminar += "0. Cancelar\n";

                var opcionEliminar = Number(prompt(menuEliminar));
                if (opcionEliminar >= 1 && opcionEliminar <= productos.length) {
                    var eliminado = productos.splice(opcionEliminar - 1, 1)[0];
                    console.log('Producto "' + eliminado.nombre + '" eliminado del catálogo.');
                }
            }
        } else if (opcionAdmin === 3) {
            if (productos.length === 0) {
                console.log("El catálogo está vacío.");
            } else {
                console.log("Catálogo actual:");
                for (var i = 0; i < productos.length; i++) {
                    console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
                }
            }
        } else if (opcionAdmin !== 0) {
            console.log("Opción inválida, intenta de nuevo.");
        }

    } while (opcionAdmin !== 0);
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    // Convertir la opción ingresada a un número
    opcion = Number(opcion);

    // Verificar si la opción es válida
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        // Si la opción es válida y corresponde a un producto, agregar al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        // Si elige ver el carrito y el total
        mostrarCarritoYTotal();
    }else if (opcion === productos.length + 2) {
        //Si elige editar carrito
        editarCarrito();
    } else if (opcion === productos.length + 3) {
        //si elige pasar al menú como admin
        menuAdministrador();
    }
} while (opcion !== productos.length + 3); // El bucle continúa hasta que elige "Salir"

console.log("Gracias por visitar la tienda.");


//funciónp para hacer menú
//Función para actualizar la compra del usuario. es decir si el usuario no quiere algo que 
//ya tiene en el ccarrito que haya opcion de sacar del carrito y luego continuamos agregando cosas al carrito
//Hacer un menu de administrador donde se pueda agregar cosas al catalogo
//Funcion1 - menu
//fun2-Modificar compra
//Fun3-modificar arreglo prinicpal(modo admin )