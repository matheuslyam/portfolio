export function renderHero(): string {
  return `
    <section id="hero">
      <div class="grid-bg"></div>
      <div class="glow-tr"></div>
      <div class="glow-bl"></div>
      <div class="rel hero-content">
        <div class="hero-left">
          <div class="hero-tags">
            <span class="hero-tag">TypeScript</span>
            <span class="hero-tag">Hono</span>
            <span class="hero-tag">Docker</span>
            <span class="hero-tag">GitHub</span>
            <span class="hero-tag">AWS/VPS</span>
            <span class="hero-tag">Databases</span>
            <span class="hero-tag">Drizzle</span>
          </div>
          <h1>Sistemas que funcionam<br>em <em>produção.</em></h1>
          <p class="hero-sub">Você me passa o problema. Eu entrego funcionando — do primeiro commit à URL no ar.</p>
          <div class="cta-group">
            <a
              class="cta-primary"
              href="https://wa.me/5541995525564"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
              <div class="cta-icon">↗</div>
            </a>
            <span class="cta-secondary"><span>$</span> MEI ativo · emite NF</span>
          </div>
          <div class="stats-row">
            <div class="stat">
              <span class="stat-num">4</span>
              <span class="stat-label">sistemas entregues</span>
            </div>
            <div class="stat">
              <span class="stat-num">3</span>
              <span class="stat-label">em produção</span>
            </div>
          </div>
        </div>
        <div class="hero-code code-panel">
          <div class="cb-header">
            <div class="cb-dot"></div>
            <div class="cb-dot"></div>
            <div class="cb-dot"></div>
            <span class="cb-filename">lyam.config.ts</span>
          </div>
          <div class="code-body">
            <div><span class="t-k">const</span><span class="t-w"> lyam </span><span class="t-k">=</span><span class="t-w"> {</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">infra</span><span class="t-w">: </span><span class="t-s">"AWS"</span><span class="t-w">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">cicd</span><span class="t-w">: </span><span class="t-s">"Actions"</span><span class="t-w">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">backend</span><span class="t-w">: </span><span class="t-s">"TypeScript/Node"</span><span class="t-w">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">containers</span><span class="t-w">: </span><span class="t-s">"Docker"</span><span class="t-w">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">city</span><span class="t-w">: </span><span class="t-s">"Curitiba"</span><span class="t-w">,</span></div>
            <div>&nbsp;&nbsp;<span class="t-b">available</span><span class="t-w">: </span><span class="t-o">true</span></div>
            <div><span class="t-w">} </span><span class="t-k">as const</span></div>
          </div>
        </div>
      </div>
    </section>
  `
}
