const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

const setMenuOpen = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
  menu?.classList.toggle('is-open', open);
};

toggle?.addEventListener('click', () => {
  setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

menu?.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    toggle.focus();
  }
});

// Reveal content only when JavaScript is available; without JS, content remains visible.
const revealTargets = document.querySelectorAll<HTMLElement>(
  '.intro-grid, .section-heading, .activity-card, .benefit-item, .feature-image, .feature-copy, .package-card, .gallery-grid img, .quote-inner, .final-cta-inner, .step-row, .contact-grid article'
);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reveal-ready');
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 55}ms`;
  });
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
  );
  revealTargets.forEach((element) => revealObserver.observe(element));
}

// Forms: with PUBLIC_FORM_ENDPOINT set they are sent as JSON (or multipart when a file is attached);
// without it they only validate and say so.
const endpoint = document.querySelector<HTMLMetaElement>('meta[name="form-endpoint"]')?.content;

document.querySelectorAll<HTMLFormElement>('[data-form]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const setStatus = (message: string) => {
    if (status) status.textContent = message;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    if (!endpoint) {
      setStatus('Formular în mod demonstrativ: câmpurile sunt valide, dar datele nu au fost trimise sau salvate.');
      return;
    }

    if (submitButton) submitButton.disabled = true;
    setStatus('Se trimite cererea…');

    try {
      const formData = new FormData(form);
      const hasFile = Array.from(formData.values()).some((value) => value instanceof File && value.size > 0);
      const response = await fetch(endpoint, {
        method: 'POST',
        ...(hasFile
          ? { headers: { Accept: 'application/json' }, body: formData }
          : {
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify(Object.fromEntries(formData))
            })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const detail = Array.isArray(payload?.errors)
          ? payload.errors.map((item: { message?: string }) => item.message).filter(Boolean).join(' ')
          : '';
        throw new Error(detail || `Serverul a răspuns cu statusul ${response.status}.`);
      }

      setStatus('Cererea a fost trimisă. Revenim cât mai curând cu un răspuns.');
      form.reset();
    } catch (error) {
      console.error('Form submission failed:', error);
      const detail = error instanceof Error && !(error instanceof TypeError) ? ` (${error.message})` : '';
      setStatus(`Cererea nu a putut fi trimisă${detail}. Te rugăm să încerci din nou sau să ne contactezi direct.`);
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});
