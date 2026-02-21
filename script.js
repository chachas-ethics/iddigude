  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Filtering
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        item.style.display =
          filter === 'all' || item.classList.contains(filter)
            ? 'block'
            : 'none';
      });
    });
  });

  // Lightbox
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImg.src = '';
  });

  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const answer = toggle.nextElementSibling;
      answer.classList.toggle('hidden');
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

 const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("icon-hamburger");
  const closeIcon = document.getElementById("icon-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
 
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      closeIcon.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
    });
  });
  
 
 // NEXT PAGE HERE
    const nextPage = "indexx.html";
    const delay = 9000; // ms

    // Redirect after delay
    setTimeout(() => {
      window.location.replace(nextPage);
    }, delay);

    