export function renderContato(): string {
  return `
    <section id="contato">
      <div class="grid-bg"></div>
      <div class="glow-center"></div>
      <div class="rel">
        <div class="section-header">
          <div class="label">// contato</div>
          <h2 class="section-title">Tem um projeto<br>pra <em>resolver?</em></h2>
          <p class="section-sub">resposta rápida · sem enrolação</p>
        </div>
        <p class="code-comment"><span>// </span>pronto pra receber seu projeto</p>
        <div class="contacts">
          <a
            class="contact-card primary"
            href="https://wa.me/5541995525564"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="contact-icon">💬</span>
            <div class="contact-info">
              <div class="contact-type">whatsapp business</div>
              <div class="contact-value">(41) 9552-5564</div>
            </div>
            <span class="badge badge-principal">principal</span>
          </a>
          <a
            class="contact-card"
            href="mailto:matheuslyambusiness@gmail.com"
          >
            <span class="contact-icon">✉</span>
            <div class="contact-info">
              <div class="contact-type">e-mail</div>
              <div class="contact-value">matheuslyambusiness@gmail.com</div>
            </div>
            <span class="badge badge-alt">alternativo</span>
          </a>
        </div>
        <div class="footer-code">
          <div><span class="t-k">const</span><span class="t-w"> next </span><span class="t-k">=</span><span class="t-w"> </span><span class="t-k">await</span><span class="t-w"> lyam.</span><span class="t-b">resolve</span><span class="t-w">(seuProblema)</span></div>
          <div><span class="t-k">return</span><span class="t-w"> { </span><span class="t-k">entregue</span><span class="t-w">: </span><span class="t-o">true</span><span class="t-w">, </span><span class="t-k">prazo</span><span class="t-w">: </span><span class="t-s">"cumprido"</span><span class="t-w"> }</span></div>
        </div>
      </div>
      <div class="footer-bar">
        <div class="footer-logo">lyam<span>.</span>dev</div>
        <div class="footer-copy">© 2026 <span class="sep">·</span> Matheus Lyam <span class="sep">·</span> MEI 64.399.419/0001-40</div>
      </div>
    </section>
  `
}
