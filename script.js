
const productos = [
  { nombre: "Pan casero", cantidad: 10, costo: 2200, venta: 3500 },
  { nombre: "Facturas", cantidad: 8, costo: 2600, venta: 3500 },
  { nombre: "Alfajores", cantidad: 1, costo: 4200, venta: 5000 },
  { nombre: "Budines", cantidad: 0, costo: 3000, venta: 3500 },
  { nombre: "Pastafrolas", cantidad: 0, costo: 4200, venta: 5000 },
];

const contenedor = document.getElementById('productos');

function actualizarTotales() {
  let totalCosto = 0;
  let totalVenta = 0;

  productos.forEach((p, i) => {
    const cantidad = parseInt(document.getElementById('cantidad-' + i).value) || 0;
    productos[i].cantidad = cantidad;
    totalCosto += cantidad * p.costo;
    totalVenta += cantidad * p.venta;
    document.getElementById('total-' + i).innerText = '$' + (cantidad * p.venta);
  });

  document.getElementById('total-costo').innerText = totalCosto;
  document.getElementById('total-venta').innerText = totalVenta;
  document.getElementById('ganancia').innerText = totalVenta - totalCosto;
}

productos.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'grid grid-cols-2 md:grid-cols-6 gap-4 items-center bg-gray-50 p-4 rounded-lg shadow';

  card.innerHTML = `
    <div class="font-medium col-span-2">${p.nombre}</div>
    <div>
      <label class="block text-sm">Cantidad</label>
      <input type="number" id="cantidad-${i}" value="${p.cantidad}" class="w-full border rounded p-1" onchange="actualizarTotales()" />
    </div>
    <div>
      <label class="block text-sm">Costo</label>
      <div>$${p.costo}</div>
    </div>
    <div>
      <label class="block text-sm">Venta</label>
      <div>$${p.venta}</div>
    </div>
    <div>
      <label class="block text-sm">Total Venta</label>
      <div id="total-${i}">$${p.cantidad * p.venta}</div>
    </div>
  `;

  contenedor.appendChild(card);
});

actualizarTotales();
