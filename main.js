document.addEventListener('DOMContentLoaded', () => {
  // Funkce pro tlačítko "zpět nahoru"
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 100);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Lightbox pro obrázky
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
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
  }

  // Voucher gallery toggle
  const voucherBtn = document.getElementById('voucherBtn');
  const voucherGallery = document.getElementById('voucherGallery');
  if (voucherBtn && voucherGallery) {
    voucherBtn.addEventListener('click', () => {
      voucherGallery.style.display = voucherGallery.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Otevření modálního okna po načtení stránky
  const openingModal = document.getElementById('opening-modal');
  if (openingModal) {
    const closeBtn = openingModal.querySelector('.opening-modal__close');
    openingModal.style.display = 'flex';
    
    // Zavření kliknutím na tlačítko nebo mimo obrázek
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        openingModal.style.display = 'none';
      });
    }
    
    openingModal.addEventListener('click', (e) => {
      if (e.target === openingModal) {
        openingModal.style.display = 'none';
      }
    });
  }

  // Inicializace nového modálního systému pro masáže
  setupMasazeModals();
});

// Funkce pro nastavení nového modálního systému pro masáže
function setupMasazeModals() {
  // Získat reference na modální elementy
  const modalOverlay = document.getElementById('masazModal');
  if (!modalOverlay) return; // Zastavit funkci, pokud element neexistuje
  
  const modalContent = modalOverlay.querySelector('.masaz-modal-content');
  const modalClose = modalOverlay.querySelector('.masaz-modal-close');
  
  // Odstranit všechny existující event listenery pro rámečky s masážemi
  document.querySelectorAll('.cenik-mobile-item').forEach(item => {
    // Klonování a nahrazení prvku odstraní všechny připojené event listenery
    const newItem = item.cloneNode(true);
    if (item.parentNode) {
      item.parentNode.replaceChild(newItem, item);
    }
    
    // Přidat nový event listener pro kliknutí na rámeček
    newItem.addEventListener('click', function(e) {
      // Pokud bylo kliknuto přímo na odkaz, umožnit jeho normální chování
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }
      
      e.preventDefault();
      e.stopPropagation();
      
      // Získat obsah bubliny
      const info = newItem.querySelector('.cenik-mobile-info');
      
      if (info) {
        // Kopírovat obsah z bubliny do modálu
        modalContent.innerHTML = info.innerHTML;
        
        // Optimalizace odkazů v modálu pro mobilní zařízení
        const reservationLink = modalContent.querySelector('.info-btn');
        if (reservationLink && window.innerWidth < 700) {
          reservationLink.style.display = 'block';
          reservationLink.style.marginTop = '20px';
          reservationLink.style.padding = '12px 16px';
        }
        
        // Zobrazit modální okno
        modalOverlay.style.display = 'flex';
        
        // Zamknout scrollování na body
        document.body.style.overflow = 'hidden';
        
        // Automaticky scrollovat nahoru v modálním obsahu
        modalContent.scrollTop = 0;
      }
    });
  });
  
  // Vylepšené dotykové události pro zavírací tlačítko modálu
  if (modalClose) {
    // Odstranit existující event listenery
    const newCloseBtn = modalClose.cloneNode(true);
    modalClose.parentNode.replaceChild(newCloseBtn, modalClose);
    
    // Přidat vylepšený event listener pro dotykové ovládání
    newCloseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    });
    
    // Přidat dotykovou oblast kolem tlačítka pro lepší dostupnost na mobilních zařízeních
    if ('ontouchstart' in window) {
      newCloseBtn.style.padding = '10px';
    }
  }
  
  // Zavřít modální okno kliknutím na pozadí
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  
  // Zavřít modální okno klávesou Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

function closeMasazInfo(e) {
  if (!e) return;
  e.stopPropagation();
  
  const bubble = e.target.closest('.masaz-info-bubble');
  if (bubble) {
    bubble.style.display = 'none';
    const row = bubble.closest('.masaz-row');
    if (row) row.classList.remove('active');
  }
}
    table.style.display = 'table';
    if (icon) icon.textContent = '▼';
   else {
    table.style.display = 'none';
    if (icon) icon.textContent = '▶';
  }


function toggleMasazInfo(row) {
  if (!row) return;
  
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
  if (!row) return;
  
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
  if (!e) return;
  e.stopPropagation();
  
  const bubble = e.target.closest('.masaz-info-bubble');
  if (bubble) {
    bubble.style.display = 'none';
    const row = bubble.closest('.masaz-row');
    if (row) row.classList.remove('active');
  }
}
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  
  // Zavřít modální okno klávesou Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
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
