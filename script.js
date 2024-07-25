function calcularMeta() {
    const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    const tipoSoldado = parseFloat(document.getElementById('tipoSoldado').value);

    if (isNaN(capitalInicial) || isNaN(tipoSoldado)) {
        alert('Por favor, insira valores vÃ¡lidos.');
        return;
    }

    const saldoTotal = capitalInicial;
    const metaDiariaFixa = capitalInicial * tipoSoldado;

    document.getElementById('saldoTotalResult').innerText = saldoTotal.toFixed(2);
    document.getElementById('metaDiaria').innerText = metaDiariaFixa.toFixed(2);
    document.querySelector('.result').style.display = 'block';

    preencherPlanilha(capitalInicial, metaDiariaFixa);
}

function preencherPlanilha(capitalInicial, metaDiariaFixa) {
    const tbody = document.querySelector('#planilha tbody');
    tbody.innerHTML = '';

    let saldoDoDia = capitalInicial;

    for (let dia = 1; dia <= 30; dia++) {
        const valorFinal = saldoDoDia + metaDiariaFixa;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${dia}</td>
            <td>R$ ${saldoDoDia.toFixed(2)}</td>
            <td>R$ ${metaDiariaFixa.toFixed(2)}</td>
            <td>R$ ${valorFinal.toFixed(2)}</td>
        `;

        tbody.appendChild(tr);
        saldoDoDia = valorFinal;
    }
}
