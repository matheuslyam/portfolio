import { serviceGroups } from '../utils/services.data'
import type { Service } from '../utils/services.data'

function renderCard(s: Service): string {
  const badgeClass = s.priceType === 'fixed' ? 'badge-fixed' : 'badge-consulta'
  const badgeLabel = s.priceType === 'fixed' ? 'preço fixo' : 'sob consulta'

  return `
    <div class="card">
      <div class="card-top">
        <span class="card-name">${s.name}</span>
        <span class="badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <p class="card-desc">${s.desc}</p>
      <div class="card-code">${s.code}</div>
      <div class="card-footer">
        <span class="card-prazo">${s.prazo}</span>
        <span class="card-valor">${s.valor}</span>
      </div>
    </div>
  `
}

export function renderServicos(): string {
  const groups = serviceGroups.map(g => `
    <div class="service-group">
      <div class="group-label">${g.label}</div>
      <div class="cards-grid">
        ${g.services.map(renderCard).join('')}
      </div>
    </div>
  `).join('')

  return `
    <section id="servicos">
      <div class="rel">
        <div class="section-header">
          <div class="label">// serviços</div>
          <h2 class="section-title">O que eu entrego</h2>
          <p class="section-sub">entregas com escopo definido · prazo real · sem surpresa</p>
        </div>
        ${groups}
        <div class="info-box">
          <span>→</span> Preços em dólar disponíveis para clientes fora do Brasil. Após as primeiras entregas, valores são reajustados. Dúvida sobre escopo? Fala comigo antes.
        </div>
      </div>
    </section>
  `
}
