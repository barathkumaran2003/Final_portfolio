window.addEventListener('load', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3,  // smoother
  });

  const elements = document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7');

  elements.forEach((section, index) => {
    observer.observe(section);

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
    }

    // Small delay for nicer entry
    section.style.transitionDelay = `${index * 0.2}s`;
  });
});
