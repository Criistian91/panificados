const productos = [
  { nombre: "Pan casero", cantidad: 10, vendidos: 8, costo: 2200, venta: 3500 },
  { nombre: "Facturas", cantidad: 8, vendidos: 6, costo: 2600, venta: 3500 },
  { nombre: "Alfajores", cantidad: 1, vendidos: 1, costo: 4200, venta: 5000 },
  { nombre: "Budines", cantidad: 0, vendidos: 0, costo: 3000, venta: 3500 },
  { nombre: "Pastafrolas", cantidad: 0, vendidos: 0, costo: 4200, venta: 5000 },
];

const contenedor = document.getElementById('productos');

function actualizarTotales() {
  let totalCosto = 0, totalVenta = 0;
  let ingresosReales = 0, gananciaReal = 0;

  productos.forEach((p, i) => {
    const cantidad = parseInt(document.getElementById('cantidad-' + i).value) || 0;
    const vendidos = parseInt(document.getElementById('vendidos-' + i).value) || 0;

    productos[i].cantidad = cantidad;
    productos[i].vendidos = vendidos;

    totalCosto += cantidad * p.costo;
    totalVenta += cantidad * p.venta;

    ingresosReales += vendidos * p.venta;
    gananciaReal += vendidos * (p.venta - p.costo);

    document.getElementById('total-' + i).innerText = '$' + (cantidad * p.venta);
    document.getElementById('ingresos-' + i).innerText = '$' + (vendidos * p.venta);
  });

  document.getElementById('total-costo').innerText = totalCosto;
  document.getElementById('total-venta').innerText = totalVenta;
  document.getElementById('ganancia').innerText = totalVenta - totalCosto;

  document.getElementById('ingresos-reales').innerText = ingresosReales;
  document.getElementById('ganancia-real').innerText = gananciaReal;
}

productos.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'grid grid-cols-2 md:grid-cols-7 gap-4 items-center bg-gray-50 p-4 rounded-lg shadow';

  card.innerHTML = \`
    <div class="font-medium col-span-2">\${p.nombre}</div>
    <div>
      <label class="block text-sm">Cantidad</label>
      <input type="number" id="cantidad-\${i}" value="\${p.cantidad}" class="w-full border rounded p-1" onchange="actualizarTotales()" />
    </div>
    <div>
      <label class="block text-sm">Vendidos</label>
      <input type="number" id="vendidos-\${i}" value="\${p.vendidos}" class="w-full border rounded p-1" onchange="actualizarTotales()" />
    </div>
    <div>
      <label class="block text-sm">Costo</label>
      <div>$\${p.costo}</div>
    </div>
    <div>
      <label class="block text-sm">Venta</label>
      <div>$\${p.venta}</div>
    </div>
    <div>
      <label class="block text-sm">Total Venta</label>
      <div id="total-\${i}">$${p.cantidad * p.venta}</div>
    </div>
    <div>
      <label class="block text-sm">Ingresos Reales</label>
      <div id="ingresos-\${i}">$${p.vendidos * p.venta}</div>
    </div>
  \`;

  contenedor.appendChild(card);
});

const resumen = document.createElement('div');
resumen.className = 'mt-6 text-right text-lg font-semibold space-y-1';

resumen.innerHTML = \`
  <p>Total costo: $<span id="total-costo">0</span></p>
  <p>Total venta: $<span id="total-venta">0</span></p>
  <p>Ganancia (planificada): $<span id="ganancia">0</span></p>
  <hr class="my-2" />
  <p>Ingresos reales: $<span id="ingresos-reales">0</span></p>
  <p>Ganancia real: $<span id="ganancia-real">0</span></p>
\`;

document.querySelector('.max-w-4xl').appendChild(resumen);

actualizarTotales();
