// Datos ficticios de la serie temporal (puedes reemplazarlos con tus propios datos)
const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
        label: 'Ventas mensuales',
        data: [50, 75, 120, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo del gráfico
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde del gráfico
        borderWidth: 1
    }]
};

// Configuración del gráfico
const config = {
    type: 'line', // Tipo de gráfico (puedes cambiarlo a 'bar' u otros)
    data: data,
};

// Crear el gráfico en el contexto del lienzo
const ctx = document.getElementById('timeSeriesChart').getContext('2d');
const myChart = new Chart(ctx, config);
