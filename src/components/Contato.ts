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
          <a
            class="contact-card"
            href="https://github.com/matheuslyam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display:block;color:#6b7280">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </span>
            <div class="contact-info">
              <div class="contact-type">github</div>
              <div class="contact-value">github.com/matheuslyam</div>
            </div>
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
