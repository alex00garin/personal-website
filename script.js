window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
  
    // Move element to the right (positive translation value)
    let textContainer1 = document.getElementById('text-1');
    textContainer1.style.transform = 'translateX(' + scrollPosition * 0.2 + 'px)';
  
    let textContainer2 = document.getElementById('text-2');
    textContainer2.style.transform = 'translateX(' + (scrollPosition) * 0.3 + 'px)';

    let textContainer3 = document.getElementById('text-3');
    textContainer3.style.transform = 'translateX(' + (scrollPosition) * 0.4 + 'px)';
    
    // Move element to the left (negative translation value)
    let textContainer4 = document.getElementById('text-4');
    textContainer4.style.transform = 'translateX(' + (-scrollPosition) * 0.5 + 'px)';
  });

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.animate-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-scroll-visible');
            } else {
                entry.target.classList.remove('animate-scroll-visible');
            }
        });
    }, { threshold: 0.5 });

    listItems.forEach(item => {
        observer.observe(item);
    });
});
