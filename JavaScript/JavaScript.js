let productosDisponibles = [
    { id: 1, nombre: "LG", precio: 1000.31, stock: 10 },
    { id: 2, nombre: "Samsung Galaxy S21", precio: 2000, stock: 15 },
    { id: 3, nombre: "Pixel", precio: 3000.15, stock: 8 },
    { id: 4, nombre: "Xiaomi ", precio: 500.25, stock: 20 },
    { id: 5, nombre: "OnePlus", precio: 100.11, stock: 12 },
  ];
  
  let carrito = [];

  
  
  function seleccionarProducto() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productosDisponibles.length; i++) {
      mensaje += `${i + 1}. ${productosDisponibles[i].nombre} (ARS ${productosDisponibles[i].precio})\n`;
    }
    let productoElegido = parseInt(prompt(mensaje));
  
    while (isNaN(productoElegido) || productoElegido < 1 || productoElegido > productosDisponibles.length) {
      productoElegido = parseInt(prompt("Por favor, seleccione un producto válido."));
    }
  
    return productosDisponibles[productoElegido - 1];
  }
  
  function agregarAlCarrito(producto, cantidad) {
    if (producto.stock >= cantidad) {
      producto.stock -= cantidad;
  
      let productoEnCarrito = carrito.find((p) => p.id === producto.id);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
      } else {
        carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad });
      }
  
      alert("Producto agregado al carrito exitosamente.");
    } else {
      alert("Lo siento, no hay suficiente stock disponible.");
    }
  }
  
  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let mensaje = "Productos en el carrito:\n";
      let totalCarrito = 0;
      for (let i = 0; i < carrito.length; i++) {
        let subtotal = carrito[i].precio * carrito[i].cantidad;
        mensaje += `- ${carrito[i].nombre} (x${carrito[i].cantidad}) - ARS ${subtotal}\n`;
        totalCarrito += subtotal;
      }
      mensaje += `Total del carrito: ARS ${totalCarrito}`;
      alert(mensaje);
    }
  }
  
  while (true) {
    
    let opcion = parseInt(prompt("Ingrese una opción:\n1. Ver productos disponibles\n2. Agregar producto al carrito\n3. Ver carrito\n4. Salir"));
  
    
    while (isNaN(opcion) || opcion < 1 || opcion > 4) {
      opcion = parseInt(prompt("Por favor, ingrese una opción válida."));
    }
  
    
    if (opcion === 1) {
      seleccionarProducto();
   

      



    } else if (opcion === 2) {
        let productoSeleccionado = seleccionarProducto();
        let cantidad = parseInt(prompt(`Ingrese la cantidad de "${productoSeleccionado.nombre}" que desea agregar al carrito:`));
        while (isNaN(cantidad) || cantidad < 1) {
          cantidad = parseInt(prompt("Por favor, ingrese una cantidad válida."));
        }
        agregarAlCarrito(productoSeleccionado, cantidad);
      } else if (opcion === 3) {
        mostrarCarrito();
      } else {
        break; 
      }
    }
    alert("¡Gracias por comprar con nosotros!"); 
    