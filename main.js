document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    const updateScrollBtn = () => {
      scrollBtn.classList.toggle('show', window.scrollY > 300);
    };

    window.addEventListener('scroll', updateScrollBtn);
    updateScrollBtn();

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    const openLightbox = (src) => {
      lightboxImg.src = src;
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('show');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.removeAttribute('src');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.cards img').forEach((img) => {
      const src = img.dataset.full || img.src;
      img.addEventListener('click', () => openLightbox(src));
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('show')) {
        closeLightbox();
      }
    });
  }
});
