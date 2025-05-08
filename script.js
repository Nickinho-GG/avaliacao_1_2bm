// script.js
const form = document.getElementById('plantForm');
const lista = document.getElementById('listaPlantas');

let plantas = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const frequencia = parseInt(document.getElementById('frequencia').value);

  const planta = {
    nome,
    tipo,
    frequencia,
    ultimaRega: new Date()
  };

  plantas.push(planta);
  renderizarPlantas();

  form.reset();
});

function renderizarPlantas() {
  lista.innerHTML = '';
  const hoje = new Date();

  plantas.forEach((planta, index) => {
    const dataUltimaRega = new Date(planta.ultimaRega);
    const diffDias = Math.floor((hoje - dataUltimaRega) / (1000 * 60 * 60 * 24));

    const precisaRegar = diffDias >= planta.frequencia;

    const item = document.createElement('li');
    item.innerHTML = `
      <strong>${planta.nome}</strong> (${planta.tipo}) - regar a cada ${planta.frequencia} dias.
      ${precisaRegar ? '<span style="color: red;">🚨 Hora de regar!</span>' : '✅ Tudo certo'}
    `;
    lista.appendChild(item);
  });
}