document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 100);
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  // Věrnostní karty
  document.querySelectorAll('.cards img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.full;
      lightbox.classList.add('show');
    });
  });
  // Poukazy
  document.querySelectorAll('.voucher-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
    });
  });
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  // Voucher gallery toggle
  const voucherBtn = document.getElementById('voucherBtn');
  const voucherGallery = document.getElementById('voucherGallery');
  if (voucherBtn && voucherGallery) {
    voucherBtn.addEventListener('click', () => {
      voucherGallery.style.display = voucherGallery.style.display === 'none' ? 'flex' : 'none';
    });
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('openingModal');
      const closeBtn = document.getElementById('closeOpeningModal');

      // Zobrazit modal
      modal.style.display = 'flex';

      // Zavřít kliknutím na křížek
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      // Zavřít kliknutím mimo obsah
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });

      // (volitelné) Jednou za session
      // if (!sessionStorage.getItem('openedSoonShown')) {
      //   modal.style.display = 'flex';
      //   sessionStorage.setItem('openedSoonShown', '1');
      // }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Otevření modálního okna po načtení stránky
  const openingModal = document.getElementById('opening-modal');
  const closeBtn = document.querySelector('.opening-modal__close');

  if (openingModal) {
    openingModal.style.display = 'flex';
    // Zavření kliknutím na tlačítko nebo mimo obrázek
    closeBtn.addEventListener('click', () => {
      openingModal.style.display = 'none';
    });
    openingModal.addEventListener('click', (e) => {
      if (e.target === openingModal) {
        openingModal.style.display = 'none';
      }
    });
  }
});
