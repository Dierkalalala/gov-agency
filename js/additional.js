let dButton = document.getElementsByClassName('btn-with-image')
Array.from(dButton).forEach(btn => {
    btn.addEventListener('mouseover', colorHover)
    btn.addEventListener('mouseout', colorBack)
})

function colorHover() {
    let src = this.querySelector('img').getAttribute('data-hover')
    this.querySelector('img').src = src
}

function colorBack() {
    let src = this.querySelector('img').getAttribute('data-src')
    this.querySelector('img').src = src
}

let svg = document.getElementsByClassName('map-svg')[0]
let path = svg.querySelectorAll('.amcharts-map-area')

Array.from(path).forEach(path => {
    path.addEventListener('mouseover', changeTheColor)
    path.addEventListener('mouseout', changeFromHover)
    path.addEventListener('click', changeTheGraph)
})
function changeTheGraph() {
    console.log('123')
    let elClass = this.getAttribute('data-show')
    let charts = document.getElementsByClassName('charts')[0]
    let sections = charts.querySelectorAll('section')
    Array.from(sections).forEach(sections => {
        sections.classList.add('hidden')
        sections.classList.remove('fadeIn')
    })
    document.getElementsByClassName(elClass)[0].classList.remove('hidden')
    document.getElementsByClassName(elClass)[0].classList.add('fadeIn')
}

function changeTheColor(e) {
    let src = this.getAttribute('data-hover-fill')
    this.setAttribute('fill', src)
}

function changeFromHover() {
    let src = this.getAttribute('data-fill')
    this.setAttribute('fill', src)
    document.getElementsByClassName('map-tooltip')[0].style.display = 'none'
}
var canvas = 'pieChart'

// Global Options:
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

var data = [
    {
    labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]
    },
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
    {
        labels: [
        'Молия вазирлиги',
        'Халк банки АЖ',
        'Адлия вазирлиги',
        'Бандлик ва мехнат'
    ],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                '#B1D6C3',
                '#E7F4EF',
                '#2C5051',
                '#528F86'   ],
            data: [30.2, 15, 10.2, 9.8],
// Notice the borderColor
            borderColor:	['#B1D6C3', '#E7F4EF', '#2C5051', '#528F86'],
            borderWidth: [1,1,1,1]
        }
    ]},
];
let options = {
    legend: {
        display: false
    }
}
let regions = document.getElementsByClassName('region')
// Notice the rotation from the documentation.
for (let i = 1; i <= regions.length; i++){
    console.log(i)
    let element = document.querySelector('#pieChart'+i).getContext('2d')
    console.log('#piechart'+i)
    let myBarChart = new Chart(element, {
        type: 'pie',
        data: data[i-1],
        options: options
    })
}

// Chart declaration:
/*var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});*/

