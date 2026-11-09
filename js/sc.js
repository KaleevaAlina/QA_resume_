(function () {
  // Back to top button logic
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });

    backBtn.addEventListener('click', function (e) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Optional: add smooth anchor behavior & dynamic year (not needed but clean)
  // ensure all external links have security
  const allLinks = document.querySelectorAll('a[href^="http"]');
  allLinks.forEach((link) => {
    if (!link.getAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
(function () {
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });
    backBtn.addEventListener('click', function (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  const allLinks = document.querySelectorAll('a[href^="http"]');
  allLinks.forEach((link) => {
    if (!link.getAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
