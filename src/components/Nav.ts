export function renderNav(): string {
  return `
    <nav id="nav">
      <div class="nav-logo">lyam<span>.</span>dev</div>
      <button class="nav-burger" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#servicos">serviços</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#sobre">sobre</a></li>
        <li><a href="#contato">contato</a></li>
      </ul>
    </nav>
  `
}

export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('#nav')
  if (!nav) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }, { passive: true })

  const burger = nav.querySelector<HTMLButtonElement>('.nav-burger')
  const linksList = nav.querySelector<HTMLUListElement>('.nav-links')

  burger?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open')
    burger.setAttribute('aria-expanded', String(isOpen))
  })

  linksList?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('nav-open')
      burger?.setAttribute('aria-expanded', 'false')
    })
  })
}
