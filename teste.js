var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
                label: 'Laptops',
                data: [12, 19, 3, 5, 2, 3, 27, 20, 14, 27, 11, 22],
                borderColor: 'rgba(100,149,237)',

            }, {
                label: 'Headsets',
                data: [6, 20, 2, 30, 5, 7, 30, 17, 23, 10, 17, 20],
                borderColor: 'rgba(54,54,54)',

            },
            {
                label: 'Monitors',
                data: [10, 1, 1, 5, 8, 7, 5, 18, 30, 10, 11, 27],
                borderColor: 'rgba(124,252,0)'
            },
            {
                label: 'Phones',
                data: [20, 30, 11, 0, 5, 20, 27, 13, 20, 18, 15, 0],
                borderColor: 'rgba(238,130,238)'
            }
        ]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            labels: {
                boxWidth: 20,
            }
        }

    }
});

let dados = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
    }],
    labels: ['Vermelho', 'Amarelo', 'Azul']
};

let context = document.getElementById('top');
let topCategories = new Chart(context, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)']
        }]

    }
});