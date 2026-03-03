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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
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
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: { size: 12 },
                    padding: 15
                }
            }
        }
    }
});

ScrollReveal().reveal('.skill-chart', { origin: 'bottom', interval: 100 });