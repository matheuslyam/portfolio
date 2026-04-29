import { projects } from '../utils/projects.data'
import type { Project } from '../utils/projects.data'

function renderProject(p: Project): string {
  const anchorBadge = p.anchor
    ? `<span class="badge badge-anchor">case principal</span>`
    : ''

  const statusBadge = p.status === 'production'
    ? `<span class="badge badge-prod">produção</span>`
    : `<span class="badge badge-wip">em build</span>`

  const stackTags = p.stack
    .map(t => `<span class="stack-tag">${t}</span>`)
    .join('')

  return `
    <article class="case-card${p.anchor ? ' anchor' : ''}">
      <div class="case-inner">
        <div class="case-body">
          <div class="case-header">
            <span class="case-num">${p.num}</span>
            <div class="case-badges">
              ${anchorBadge}
              ${statusBadge}
            </div>
          </div>
          <h3 class="case-title">${p.title}</h3>
          <p class="case-problem">${p.problem}</p>
          <p class="case-desc">${p.desc}</p>
          <div class="stack-row">${stackTags}</div>
        </div>
        <div class="case-code">${p.code}</div>
      </div>
    </article>
  `
}

export function renderProjetos(): string {
  return `
    <section id="projetos">
      <div class="rel">
        <div class="section-header">
          <div class="label">// projetos</div>
          <h2 class="section-title">Sistemas construídos</h2>
          <p class="section-sub">problemas reais · decisões reais · produção real</p>
        </div>
        <div class="cases">
          ${projects.map(renderProject).join('')}
        </div>
      </div>
    </section>
  `
}
