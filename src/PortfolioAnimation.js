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

// document.addEventListener('Load', () => {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       console.log('Observed:', entry.target, 'Is intersecting?', entry.isIntersecting); // Debug line

//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   },{
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px' // triggers earlier
//   });

//   document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7').forEach(section => {
//     observer.observe(section);
//   });

//   console.log('Observer attached to:', document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7'));
// });
// console.log('Script loaded!');
// document.addEventListener('DOMContentLoaded', () => {
//   const animatedElements = document.querySelectorAll('.in-animation4, .in-animation5, .in-animation6, .in-animation7');

//   function checkVisibility() {
//     const triggerBottom = window.innerHeight * 0.9;

//     animatedElements.forEach(el => {
//       const box = el.getBoundingClientRect();
//       if (box.top < triggerBottom) {
//         console.log('Checking visibility for:', el.className, '→ top:', box.top);
//         el.classList.add('visible');
//       }
//     });
//   }

//   window.addEventListener('scroll', checkVisibility);
//   window.addEventListener('load', checkVisibility); // run once on page load
// });



// window.addEventListener('load', () => {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   }, {
//     threshold: 0.1,               // Start animation early
//     rootMargin: '0px 0px -100px 0px' // Extra buffer from bottom
//   });

//   const elementsToAnimate = document.querySelectorAll(
//     '.in-animation4, .in-animation5, .in-animation6, .in-animation7'
//   );

//   elementsToAnimate.forEach(el => {
//     observer.observe(el);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const elementsToAnimate = document.querySelectorAll(
    '.in-animation4, .in-animation5, .in-animation6, .in-animation7'
  );

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});
