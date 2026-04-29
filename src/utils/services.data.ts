export type PriceType = 'fixed' | 'consulta'

export interface Service {
  name: string
  desc: string
  code: string
  prazo: string
  valor: string
  priceType: PriceType
}

export interface ServiceGroup {
  label: string
  services: Service[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    label: 'GitHub & CI/CD',
    services: [
      {
        name: 'Configurar Secrets e variáveis de ambiente',
        desc: 'Setup completo de secrets no GitHub Actions com variáveis de ambiente seguras para staging e produção.',
        code: `<div><span class="t-c"># .github/secrets</span></div><div><span class="t-k">DB_PASSWORD</span><span class="t-w">: </span><span class="t-s">***</span></div><div><span class="t-k">API_KEY</span><span class="t-w">: </span><span class="t-s">***</span></div><div><span class="t-k">AWS_ROLE</span><span class="t-w">: </span><span class="t-o">arn:aws:...</span></div>`,
        prazo: '1 dia útil',
        valor: 'R$ 250 · $60',
        priceType: 'fixed',
      },
      {
        name: 'Workflow GitHub Actions',
        desc: 'Criação de workflow automatizado com build, testes e deploy configurados por branch.',
        code: `<div><span class="t-k">on</span><span class="t-w">: [</span><span class="t-s">push</span><span class="t-w">]</span></div><div><span class="t-k">jobs</span><span class="t-w">:</span></div><div>&nbsp;&nbsp;<span class="t-k">deploy</span><span class="t-w">:</span></div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-k">runs-on</span><span class="t-w">: </span><span class="t-s">ubuntu</span></div>`,
        prazo: '1–2 dias úteis',
        valor: 'R$ 500 · $120',
        priceType: 'fixed',
      },
      {
        name: 'Pipeline CI/CD completo',
        desc: 'Pipeline end-to-end com testes, build, deploy e rollback automático em caso de falha no healthcheck.',
        code: `<div><span class="t-c"># push → test → build</span></div><div><span class="t-c"># → deploy → healthcheck</span></div><div><span class="t-c"># → rollback if fail</span></div>`,
        prazo: '3–5 dias úteis',
        valor: 'sob consulta',
        priceType: 'consulta',
      },
    ],
  },
  {
    label: 'Infraestrutura',
    services: [
      {
        name: 'Setup de VPS do zero',
        desc: 'Configuração completa de servidor: nginx, SSL, domínio, firewall e deploy automatizado.',
        code: `<div><span class="t-k">nginx</span><span class="t-s"> ✓ </span><span class="t-k">ssl</span><span class="t-s"> ✓</span></div><div><span class="t-k">domain</span><span class="t-w">: </span><span class="t-s">"seusite.com"</span></div><div><span class="t-k">status</span><span class="t-w">: </span><span class="t-s">"online"</span></div>`,
        prazo: '1–2 dias úteis',
        valor: 'R$ 400 · $100',
        priceType: 'fixed',
      },
      {
        name: 'Backup automatizado',
        desc: 'Script de backup com dump do banco, compressão, upload para S3 e teste de restore validado.',
        code: `<div><span class="t-c"># cron: 0 2 * * *</span></div><div><span class="t-k">dump</span><span class="t-w"> → </span><span class="t-k">compress</span></div><div><span class="t-k">upload</span><span class="t-w"> → </span><span class="t-s">S3</span></div><div><span class="t-k">restore</span><span class="t-w">: </span><span class="t-s">tested ✓</span></div>`,
        prazo: '1–2 dias úteis',
        valor: 'R$ 350 · $90',
        priceType: 'fixed',
      },
      {
        name: 'Containerização com Docker',
        desc: 'Dockerização da aplicação com multi-stage build, docker-compose e configuração de rede isolada.',
        code: `<div><span class="t-k">FROM</span><span class="t-w"> </span><span class="t-s">node:20-alpine</span></div><div><span class="t-k">COPY</span><span class="t-w"> . /app</span></div><div><span class="t-k">RUN</span><span class="t-w"> npm install</span></div><div><span class="t-k">CMD</span><span class="t-w"> [</span><span class="t-s">"npm"</span><span class="t-w">,</span><span class="t-s">"start"</span><span class="t-w">]</span></div>`,
        prazo: '2–4 dias úteis',
        valor: 'sob consulta',
        priceType: 'consulta',
      },
    ],
  },
  {
    label: 'Desenvolvimento & Integrações',
    services: [
      {
        name: 'Landing page com qualificação de lead',
        desc: 'Landing page com funil de perguntas ponderadas e score automático que classifica e roteia o lead.',
        code: `<div><span class="t-k">score</span><span class="t-w"> >= </span><span class="t-o">80</span><span class="t-w"> → </span><span class="t-s">"hot"</span></div><div><span class="t-k">score</span><span class="t-w"> >= </span><span class="t-o">50</span><span class="t-w"> → </span><span class="t-s">"warm"</span></div><div><span class="t-k">score</span><span class="t-w"> &lt; </span><span class="t-o">50</span><span class="t-w"> → </span><span class="t-s">"cold"</span></div>`,
        prazo: '2–4 dias úteis',
        valor: 'R$ 500 · $100',
        priceType: 'fixed',
      },
      {
        name: 'Integração com gateway de pagamento',
        desc: 'Integração com gateway (Asaas, Stripe ou similar) com suporte a PIX, cartão e modelo híbrido.',
        code: `<div><span class="t-k">methods</span><span class="t-w">:</span></div><div>&nbsp;&nbsp;<span class="t-s">"pix"</span><span class="t-w"> | </span><span class="t-s">"card"</span></div><div>&nbsp;&nbsp;<span class="t-w">| </span><span class="t-s">"pix+card"</span></div><div><span class="t-k">tested</span><span class="t-w">: </span><span class="t-s">production ✓</span></div>`,
        prazo: '3–5 dias úteis',
        valor: 'sob consulta',
        priceType: 'consulta',
      },
    ],
  },
]
