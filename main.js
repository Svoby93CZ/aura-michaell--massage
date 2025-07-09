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

function toggleCenikSection(section) {
  const table = document.getElementById('cenik-' + section);
  const btn = table.previousElementSibling;
  const icon = btn.querySelector('span');
  if (table.style.display === 'none' || table.style.display === '') {
    table.style.display = 'table';
    icon.textContent = '▼';
  } else {
    table.style.display = 'none';
    icon.textContent = '▶';
  }
}

function toggleMasazInfo(row) {
  // Zavře všechny ostatní info
  document.querySelectorAll('.masaz-row').forEach(function(tr) {
    if (tr !== row) {
      tr.classList.remove('active');
      let info = tr.querySelector('.masaz-info');
      if(info) info.style.display = 'none';
    }
  });
  // Přepne aktuální info
  let info = row.querySelector('.masaz-info');
  if (info) {
    if (info.style.display === 'block') {
      info.style.display = 'none';
      row.classList.remove('active');
    } else {
      info.style.display = 'block';
      row.classList.add('active');
    }
  }
}

function showMasazInfo(row) {
  // Zavřít všechny ostatní bubliny
  document.querySelectorAll('.masaz-info-bubble').forEach(bubble => bubble.style.display = 'none');
  document.querySelectorAll('.masaz-row').forEach(tr => tr.classList.remove('active'));
  // Zobrazit bublinu v aktuálním řádku
  const bubble = row.querySelector('.masaz-info-bubble');
  if (bubble) {
    bubble.style.display = 'block';
    row.classList.add('active');

    // Přidat posluchač pro zavření kliknutím mimo bublinu
    setTimeout(() => {
      function outsideClick(e) {
        if (!bubble.contains(e.target) && !row.contains(e.target)) {
          bubble.style.display = 'none';
          row.classList.remove('active');
          document.removeEventListener('mousedown', outsideClick);
        }
      }
      document.addEventListener('mousedown', outsideClick);
    }, 10);
  }
}

function closeMasazInfo(e) {
  e.stopPropagation();
  const bubble = e.target.closest('.masaz-info-bubble');
  if (bubble) {
    bubble.style.display = 'none';
    const row = bubble.closest('.masaz-row');
    if (row) row.classList.remove('active');
  }
}
