// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     });
//     document.querySelectorAll('.in-animation4,.in-animation5,.in-animation6, .in-animation7').forEach(section => {
//       observer.observe(section);
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('Observed:', entry.target, 'Is intersecting?', entry.isIntersecting); // Debug line

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },{
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' // triggers earlier
  });

  document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7').forEach(section => {
    observer.observe(section);
  });

  console.log('Observer attached to:', document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7'));
});
