console.log('IntersectionObserver supported?', 'IntersectionObserver' in window);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log('Observing:', entry.target);
    if (entry.isIntersecting) {
      console.log('Visible:', entry.target);
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7').forEach(section => {
  observer.observe(section);
});
