import './styles/global.css'
import './styles/components.css'

import { renderNav, initNav } from './components/Nav'
import { renderHero } from './components/Hero'
import { renderServicos } from './components/Servicos'
import { renderProjetos } from './components/Projetos'
import { renderSobre } from './components/Sobre'
import { renderContato } from './components/Contato'

function mount(): void {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) return

  app.innerHTML = `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderServicos()}
      ${renderProjetos()}
      ${renderSobre()}
      ${renderContato()}
    </main>
  `

  initNav()
}

mount()
