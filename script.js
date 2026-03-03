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

// Chart.js Configuration
const chartColor = {
    primary: '#0ef',
    secondary: '#ff6b6b',
    success: '#51cf66',
    warning: '#ffd93d',
    danger: '#ff6348',
    info: '#4ecdc4'
};

// Plugin to display percentages on charts
const percentagePlugin = {
    id: 'percentagePlugin',
    afterDatasetsDraw(chart) {
        const { ctx, data, chartArea: { left, top, width, height } } = chart;
        ctx.save();
        
        data.datasets.forEach((dataset, datasetIndex) => {
            const { x: centerX, y: centerY } = chart.getDatasetMeta(datasetIndex).data[0];
            const total = dataset.data.reduce((a, b) => a + b, 0);
            
            dataset.data.forEach((value, index) => {
                const meta = chart.getDatasetMeta(datasetIndex);
                const arc = meta.data[index];
                const angle = (arc.startAngle + arc.endAngle) / 2;
                
                const radius = (arc.outerRadius + arc.innerRadius) / 2;
                const x = centerX + Math.cos(angle - Math.PI / 2) * radius;
                const y = centerY + Math.sin(angle - Math.PI / 2) * radius;
                
                const percentage = ((value / total) * 100).toFixed(0);
                
                ctx.fillStyle = '#fff';
                ctx.font = '600 14px poppins';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(percentage + '%', x, y);
            });
        });
        ctx.restore();
    }
};

// Python Chart
const pythonCtx = document.getElementById('pythonChart').getContext('2d');
new Chart(pythonCtx, {
    type: 'doughnut',
    data: {
        labels: ['Expert', 'Proficient', 'Learning'],
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: ['#0ef', '#ff6b6b', '#51cf66'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

// JavaScript Chart
const jsCtx = document.getElementById('javascriptChart').getContext('2d');
new Chart(jsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Expert', 'Proficient', 'Learning'],
        datasets: [{
            data: [75, 20, 5],
            backgroundColor: ['#ffd93d', '#ff6b6b', '#51cf66'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

// HTML & CSS Chart
const htmlcssCtx = document.getElementById('htmlcssChart').getContext('2d');
new Chart(htmlcssCtx, {
    type: 'doughnut',
    data: {
        labels: ['Expert', 'Proficient', 'Learning'],
        datasets: [{
            data: [80, 15, 5],
            backgroundColor: ['#51cf66', '#ff6b6b', '#ffd93d'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

// React Chart
const reactCtx = document.getElementById('reactChart').getContext('2d');
new Chart(reactCtx, {
    type: 'doughnut',
    data: {
        labels: ['Intermediate', 'Proficient', 'Basic'],
        datasets: [{
            data: [50, 35, 15],
            backgroundColor: ['#4ecdc4', '#ff6b6b', '#ffd93d'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

// Web Development Chart
const webdevCtx = document.getElementById('webdevChart').getContext('2d');
new Chart(webdevCtx, {
    type: 'doughnut',
    data: {
        labels: ['Frontend', 'Backend', 'Full Stack'],
        datasets: [{
            data: [70, 40, 30],
            backgroundColor: ['#0ef', '#ff6b6b', '#51cf66'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

// UI/UX Design Chart
const designCtx = document.getElementById('designChart').getContext('2d');
new Chart(designCtx, {
    type: 'doughnut',
    data: {
        labels: ['Design', 'Prototyping', 'User Research'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: ['#ffd93d', '#51cf66', '#0ef'],
            borderColor: ['#1f242d', '#1f242d', '#1f242d'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            percentagePlugin: true,
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    },
    plugins: [percentagePlugin]
});

ScrollReveal().reveal('.skill-chart', { origin: 'bottom', interval: 100 });

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