export type ProjectStatus = 'production' | 'wip'

export interface Project {
  num: string
  title: string
  problem: string
  desc: string
  stack: string[]
  code: string
  status: ProjectStatus
  anchor?: boolean
  repo?: string
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'CRM — Clicca',
    problem: '// problema: CRMs do mercado são genéricos demais ou caros demais para o nicho',
    desc: 'CRM completo com pipeline de leads, kanban, dashboard de vendas e separação entre Lead e Deal. Integração nativa com WhatsApp via Evolution API e gateway financeiro. Migrado de VPS para AWS com CI/CD automatizado, backup pré-deploy e multi-container.',
    stack: ['PHP 8.1 Vanilla', 'Node.js', 'MySQL · Redis', 'Docker', 'AWS EC2/RDS/S3', 'GitHub Actions', 'Evolution API', 'Tailwind CSS'],
    code: `<div><span class="t-k">const</span><span class="t-w"> stack </span><span class="t-k">=</span><span class="t-w"> {</span></div><div>&nbsp;&nbsp;<span class="t-k">infra</span><span class="t-w">: </span><span class="t-s">"AWS"</span><span class="t-w">,</span></div><div>&nbsp;&nbsp;<span class="t-k">db</span><span class="t-w">: </span><span class="t-s">"RDS"</span><span class="t-w">,</span></div><div>&nbsp;&nbsp;<span class="t-k">rt</span><span class="t-w">: </span><span class="t-s">"Socket.io"</span><span class="t-w">,</span></div><div>&nbsp;&nbsp;<span class="t-k">wa</span><span class="t-w">: </span><span class="t-s">"Evolution"</span><span class="t-w">,</span></div><div>&nbsp;&nbsp;<span class="t-k">ci</span><span class="t-w">: </span><span class="t-s">"Actions"</span><span class="t-w">,</span></div><div>&nbsp;&nbsp;<span class="t-k">prod</span><span class="t-w">: </span><span class="t-o">true</span></div><div><span class="t-w">}</span></div>`,
    status: 'production',
    anchor: true,
    repo: 'https://github.com/matheuslyam/crm',
  },
  {
    num: '02',
    title: 'Checkout Híbrido',
    problem: '// problema: vender via chave PIX de pessoa física descredibiliza a loja',
    desc: 'Checkout com três modalidades: PIX, cartão e modelo híbrido — entrada mínima no PIX com o restante parcelado no cartão, cálculo automático do saldo descontado. Validado com transação real em produção.',
    stack: ['TypeScript 5.9', 'Next.js 16', 'React 19', 'Zod', 'Asaas API', 'Docker multi-stage', 'Vitest'],
    code: `<div><span class="t-k">import</span><span class="t-w"> { </span><span class="t-b">pix</span><span class="t-w">, </span><span class="t-b">card</span><span class="t-w">, </span><span class="t-b">hybrid</span><span class="t-w"> }</span></div><div><span class="t-w">&nbsp;&nbsp;</span><span class="t-k">from</span><span class="t-w"> </span><span class="t-s">"asaas"</span></div><div>&nbsp;</div><div><span class="t-c">// tested in prod ✓</span></div>`,
    status: 'production',
    repo: 'https://github.com/matheuslyam/checkout',
  },
  {
    num: '03',
    title: 'Quiz de Qualificação de Lead',
    problem: '// problema: qualificação de lead era manual, dependente de vendedor no WhatsApp',
    desc: 'Landing page com funil de 5 perguntas ponderadas. Score automático classifica o lead em cold, warm ou hot — cada perfil vê uma página diferente e é roteado de forma distinta. Todos os dados capturados no Supabase.',
    stack: ['TypeScript', 'Next.js 16', 'React 19', 'Supabase', 'Framer Motion', 'Docker multi-stage'],
    code: `<div><span class="t-k">if</span><span class="t-w"> (score >= </span><span class="t-o">80</span><span class="t-w">)</span></div><div>&nbsp;&nbsp;<span class="t-b">route</span><span class="t-w">(</span><span class="t-s">"vendedor"</span><span class="t-w">)</span></div><div><span class="t-k">else if</span><span class="t-w"> (score >= </span><span class="t-o">50</span><span class="t-w">)</span></div><div>&nbsp;&nbsp;<span class="t-b">route</span><span class="t-w">(</span><span class="t-s">"instagram"</span><span class="t-w">)</span></div><div><span class="t-k">else</span><span class="t-w"> </span><span class="t-b">capture</span><span class="t-w">(</span><span class="t-s">"cold"</span><span class="t-w">)</span></div>`,
    status: 'production',
    repo: 'https://github.com/matheuslyam/quizz',
  },
  {
    num: '04',
    title: 'Dashboard de Métricas — PyVIP',
    problem: '// problema: empresários lendo dados de campanhas no Meta Ads sem contexto de negócio',
    desc: 'Dashboard interativo conectado diretamente à API do Meta Ads. Sem inserção manual — dados organizados por visão de negócio: Performance Global, Marketing Ads com ROAS por campanha e Creative Lab. Tema personalizável por empresa.',
    stack: ['Python 3.10', 'Streamlit', 'Pandas · Plotly', 'Meta Ads SDK', 'Docker', 'SQLAlchemy'],
    code: `<div><span class="t-k">import</span><span class="t-w"> </span><span class="t-b">facebook</span></div><div><span class="t-k">import</span><span class="t-w"> </span><span class="t-b">streamlit</span></div><div><span class="t-k">import</span><span class="t-w"> </span><span class="t-b">plotly</span></div><div>&nbsp;</div><div><span class="t-c"># sem planilha</span></div><div><span class="t-c"># automático ✓</span></div>`,
    status: 'wip',
    repo: 'https://github.com/matheuslyam/pyvip',
  },
]
