document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  const elements = document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7');

  elements.forEach(section => {
    observer.observe(section);

    // 🌟 ADD THIS to fix mobile issue
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
    }
  });
});
