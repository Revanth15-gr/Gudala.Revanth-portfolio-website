let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');  
    menuicon.classList.toggle('fa-bars');   
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
    let header =document.querySelector(head);
    header.classList.toggle('sticky',window.scrollY > 100);

     menuicon.classList.remove('fa-xmark');  
    menuicon.classList.remove('fa-bars');   
    navbar.classList.remove('active');
};

ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
  strings: ['FullStack Developer', 'Digital Marketer', 'UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Chart.js Configuration for Bar Charts
Chart.defaults.font.family = "'Poppins', sans-serif";

// Plugin to display data labels on bars
const dataLabelPlugin = {
    id: 'dataLabelPlugin',
    afterDatasetsDraw(chart) {
        const { ctx } = chart;
        ctx.font = 'bold 14px Poppins';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            meta.data.forEach((bar, index) => {
                const value = dataset.data[index];
                if (value !== null && value !== undefined) {
                    const { x, y, width } = bar.getProps(['x', 'y', 'width']);
                    ctx.fillText(value + '%', x - width/2 + width/2, y - 5);
                }
            });
        });
    }
};

// Python Bar Chart
const pythonCtx = document.getElementById('pythonChart').getContext('2d');
new Chart(pythonCtx, {
    type: 'bar',
    data: {
        labels: ['Python'],
        datasets: [{
            data: [72],
            backgroundColor: ['#0ef'],
            borderColor: ['#0ef'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

// JavaScript Bar Chart
const jsCtx = document.getElementById('javascriptChart').getContext('2d');
new Chart(jsCtx, {
    type: 'bar',
    data: {
        labels: ['JavaScript'],
        datasets: [{
            data: [75],
            backgroundColor: ['#ffd93d'],
            borderColor: ['#ffd93d'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

// HTML & CSS Bar Chart
const htmlcssCtx = document.getElementById('htmlcssChart').getContext('2d');
new Chart(htmlcssCtx, {
    type: 'bar',
    data: {
        labels: ['HTML & CSS'],
        datasets: [{
            data: [70],
            backgroundColor: ['#51cf66'],
            borderColor: ['#51cf66'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

// React Bar Chart
const reactCtx = document.getElementById('reactChart').getContext('2d');
new Chart(reactCtx, {
    type: 'bar',
    data: {
        labels: ['React'],
        datasets: [{
            data: [68],
            backgroundColor: ['#4ecdc4'],
            borderColor: ['#4ecdc4'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

// Node.js Bar Chart
const nodejsCtx = document.getElementById('nodejsChart').getContext('2d');
new Chart(nodejsCtx, {
    type: 'bar',
    data: {
        labels: ['Node.js'],
        datasets: [{
            data: [70],
            backgroundColor: ['#90ee90'],
            borderColor: ['#90ee90'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

// Express Bar Chart
const expressCtx = document.getElementById('expressChart').getContext('2d');
new Chart(expressCtx, {
    type: 'bar',
    data: {
        labels: ['Express'],
        datasets: [{
            data: [67],
            backgroundColor: ['#ff9999'],
            borderColor: ['#ff9999'],
            borderWidth: 2,
            borderRadius: 5
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#fff',
                    font: { size: 12, weight: 'bold' },
                    callback: function(value) {
                        return value + '%';
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [dataLabelPlugin]
});

ScrollReveal().reveal('.skill-item', { origin: 'bottom', interval: 100 });

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});