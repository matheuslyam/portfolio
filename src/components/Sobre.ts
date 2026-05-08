export function renderSobre(): string {
  return `
    <section id="sobre">
      <div class="rel">
        <div class="section-header">
          <div class="label">// sobre</div>
          <h2 class="section-title">Quick about me</h2>
          <p class="section-sub">do planejamento ao deploy · ciclo completo</p>
        </div>
        <div class="about-box">
        <div class="about-grid">
          <div class="about-left">
            <p class="about-text">
              Lyam, 22 anos, Curitiba. Trabalho com desenvolvimento e infraestrutura cobrindo o ciclo completo — do planejamento à URL em produção. Já construí sistemas reais, tomei decisões arquiteturais sob pressão e opero infraestrutura em produção na AWS no dia a dia.
            </p>
            <div class="process-block">
              <div class="process-step">
                <span class="step-num">01</span>
                <div class="step-content">
                  <span class="step-title">Entendo a missão.</span>
                  <span class="step-desc">Antes de qualquer código, quero saber o problema real — não o sintoma.</span>
                </div>
              </div>
              <div class="process-step">
                <span class="step-num">02</span>
                <div class="step-content">
                  <span class="step-title">Documento o escopo.</span>
                  <span class="step-desc">Defino o que entra, o que não entra e o indicador exato de que o trabalho está concluído.</span>
                </div>
              </div>
              <div class="process-step">
                <span class="step-num">03</span>
                <div class="step-content">
                  <span class="step-title">Dou prazo com buffer.</span>
                  <span class="step-desc">Sem promessa vazia. Você sabe o que vai receber e quando.</span>
                </div>
              </div>
              <div class="process-step">
                <span class="step-num">04</span>
                <div class="step-content">
                  <span class="step-title">Executo e entrego.</span>
                  <span class="step-desc">Comunicação direta — se algo não vai funcionar do jeito que você imaginou, falo antes de começar.</span>
                </div>
              </div>
            </div>
            <div class="mei-badge">
              <div class="mei-dot"></div>
              MEI ativo · emite nota fiscal · CNPJ 64.399.419/0001-40
            </div>
          </div>
          <div class="about-code code-panel">
            <div class="cb-header">
              <div class="cb-dot"></div>
              <div class="cb-dot"></div>
              <div class="cb-dot"></div>
              <span class="cb-filename">lyam.json</span>
            </div>
            <div class="code-body" style="padding: 16px;">
              <div><span class="t-w">{</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"name"</span><span class="t-w">: </span><span class="t-s">"Lyam"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"age"</span><span class="t-w">: </span><span class="t-o">22</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"city"</span><span class="t-w">: </span><span class="t-s">"Curitiba"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"role"</span><span class="t-w">: </span><span class="t-s">"dev+infra"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"systems"</span><span class="t-w">: [</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-s">"CRM"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-s">"Checkout"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-s">"Quiz"</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-s">"Dashboard"</span></div>
              <div>&nbsp;&nbsp;<span class="t-w">],</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"learning"</span><span class="t-w">: [</span><span class="t-s">"Data Structures &amp; Algorithms"</span><span class="t-w">],</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"mei"</span><span class="t-w">: </span><span class="t-o">true</span><span class="t-w">,</span></div>
              <div>&nbsp;&nbsp;<span class="t-b">"available"</span><span class="t-w">: </span><span class="t-o">true</span></div>
              <div><span class="t-w">}</span></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  `
}
