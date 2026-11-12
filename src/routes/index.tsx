import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segunda Geração da Computação (1956–1964) — Transistores" },
      { name: "description", content: "Material educativo e interativo sobre a segunda geração da computação: transistores, IBM 1401, FORTRAN, COBOL, linha do tempo e quiz." },
      { property: "og:title", content: "Segunda Geração da Computação (1956–1964)" },
      { property: "og:description", content: "Transistores, computadores, cientistas, linguagens, linha do tempo e quiz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["contexto", "Contexto"], ["transistor", "Transistor"], ["caracteristicas", "Características"],
  ["computadores", "Computadores"], ["cientistas", "Cientistas"], ["linguagens", "Linguagens"],
  ["linha", "Linha do tempo"], ["impactos", "Impactos"], ["quiz", "Quiz"],
];

function Win({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="xp-window scroll-mt-20">
      <div className="xp-title"><span>🖥 {title}</span><div className="xp-ctrl"><span>_</span><span>□</span><span>×</span></div></div>
      <div className="xp-body">{children}</div>
    </section>
  );
}

function Flip({ front, back }: { front: ReactNode; back: ReactNode }) {
  const [f, setF] = useState(false);
  return (
    <div className={`card-flip ${f ? "flipped" : ""}`} onClick={() => setF(!f)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setF(!f)}>
      <div className="card-inner">
        <div className="card-face xp-window"><div className="xp-title text-sm">Clique para virar ↻</div><div className="xp-body h-full grid place-items-center text-center">{front}</div></div>
        <div className="card-face card-back xp-window"><div className="xp-title text-sm">Informações</div><div className="xp-body h-full text-sm">{back}</div></div>
      </div>
    </div>
  );
}

const COMPUTERS = [
  ["TX-0 (1956)", "Desenvolvido no MIT em 1956, foi um dos primeiros computadores totalmente transistorizados. Estudantes passaram a usá-lo de forma interativa e experimental, criando a cultura hacker e abrindo caminho para o PDP-1."],
  ["IBM 7090 (1959)", "Versão transistorizada do IBM 709 e muito mais rápido que ele. Usado em cálculos científicos e militares; a NASA o utilizou nos programas espaciais da época."],
  ["IBM 1401 (1959)", "Um dos computadores mais vendidos da época, com milhares de unidades pelo mundo. Compacto e relativamente acessível, popularizou o processamento de dados em empresas, geralmente com cartões perfurados."],
  ["PDP-1 (1959)", "Apresentado pela DEC, custava bem menos que os grandes computadores e era feito para ser usado diretamente pelo operador, em tempo real. Foi nele que surgiu o Spacewar."],
  ["Burroughs B500", "Linha voltada ao mercado empresarial. Levou a automação de tarefas como contabilidade e controle administrativo para empresas de médio porte, que antes não tinham acesso a essas máquinas."],
  ["CDC 6600 (1964)", "Projetado por Seymour Cray, é considerado o primeiro supercomputador da história. Foi a máquina mais rápida do mundo por vários anos."],
];

const PEOPLE = [
  ["William Shockley", "Um dos inventores do transistor. A invenção rendeu aos três inventores o Prêmio Nobel de Física de 1956."],
  ["Walter Brattain", "Um dos inventores do transistor, tecnologia fundamental para substituir as válvulas. Nobel de Física de 1956."],
  ["John Bardeen", "Um dos inventores do transistor, que tornou os computadores menores e mais eficientes. Nobel de Física de 1956."],
  ["Grace Hopper", "Cientista da computação que ajudou a desenvolver compiladores. Criadora da linguagem FLOW-MATIC, base para o COBOL."],
  ["John Backus", "Liderou a equipe que desenvolveu o FORTRAN, linguagem criada para facilitar cálculos científicos e matemáticos."],
  ["Seymour Cray", "Projetou o CDC 6600, lançado em 1964, considerado o primeiro supercomputador da história."],
  ["John Kemeny e Thomas Kurtz", "Criaram a linguagem BASIC em 1964, no Dartmouth College, para que qualquer estudante pudesse aprender a programar."],
  ["Douglas Engelbart", "Criou o mouse em 1964, com uma carcaça de madeira; apresentado ao público em 1968."],
  ["Jack Kilby e Robert Noyce", "Entre 1958 e 1959, de forma independente (Texas Instruments e Fairchild), desenvolveram o circuito integrado."],
];

const TIMELINE = [
  ["1947", "Transistor é criado nos Laboratórios Bell."],
  ["1956", "Nobel de Física para Shockley, Brattain e Bardeen. TX-0 é desenvolvido no MIT."],
  ["1957", "4 de outubro: a URSS lança o Sputnik, primeiro satélite artificial. Início da corrida espacial."],
  ["1958–1959", "Jack Kilby e Robert Noyce desenvolvem o circuito integrado."],
  ["1959", "Lançamento do IBM 7090 e do IBM 1401; DEC apresenta o PDP-1. Revolução Cubana."],
  ["1960", "“Ano da África”: 17 países africanos declaram independência."],
  ["1963", "Marcha sobre Washington — movimento dos direitos civis ganha força."],
  ["1964", "BASIC (Kemeny e Kurtz), CDC 6600 (Seymour Cray), mouse (Engelbart). No Brasil, golpe militar de 64."],
];

const QUIZ = [
  { q: "Qual tecnologia substituiu as válvulas a vácuo na segunda geração?", o: ["Circuito integrado", "Transistor", "Microprocessador", "Relé"], a: 1 },
  { q: "Em que ano e onde o transistor foi criado?", o: ["1956, no MIT", "1959, na IBM", "1947, nos Laboratórios Bell", "1964, em Dartmouth"], a: 2 },
  { q: "Qual linguagem era voltada para negócios e empresas?", o: ["FORTRAN", "LISP", "ALGOL", "COBOL"], a: 3 },
  { q: "Quem liderou a equipe que desenvolveu o FORTRAN?", o: ["John Backus", "Grace Hopper", "Seymour Cray", "John Bardeen"], a: 0 },
  { q: "A linguagem FLOW-MATIC, base para o COBOL, foi criada por:", o: ["Thomas Kurtz", "Grace Hopper", "Douglas Engelbart", "Jack Kilby"], a: 1 },
  { q: "Em qual computador surgiu o Spacewar?", o: ["IBM 1401", "CDC 6600", "PDP-1", "Burroughs B500"], a: 2 },
  { q: "Qual é considerado o primeiro supercomputador da história?", o: ["IBM 7090", "CDC 6600", "TX-0", "IBM 709"], a: 1 },
  { q: "Qual foi um sistema operacional da segunda geração?", o: ["GM-NAA I/O", "Windows", "UNIX", "MS-DOS"], a: 0 },
  { q: "O que encerrou a segunda geração e iniciou a terceira?", o: ["O mouse", "A linguagem BASIC", "O circuito integrado", "A fita magnética"], a: 2 },
  { q: "Para que a linguagem LISP era usada?", o: ["Negócios", "Inteligência artificial", "Contabilidade", "Ensino de estudantes"], a: 1 },
];

function Quiz() {
  const [ans, setAns] = useState<(number | null)[]>(QUIZ.map(() => null));
  const [done, setDone] = useState(false);
  const score = ans.filter((v, i) => v === QUIZ[i]!.a).length;
  return (
    <div className="space-y-5">
      {QUIZ.map((item, i) => (
        <fieldset key={i} className="border-2 border-[var(--xp-blue-light)] rounded p-3">
          <legend className="px-2 font-bold">{i + 1}. {item.q}</legend>
          <div className="grid sm:grid-cols-2 gap-2">
            {item.o.map((opt, j) => {
              const cls = done ? (j === item.a ? "ok" : ans[i] === j ? "bad" : "") : ans[i] === j ? "on" : "";
              return <button key={j} disabled={done} className={`xp-btn text-left ${cls}`} onClick={() => setAns(ans.map((v, k) => (k === i ? j : v)))}>{opt}</button>;
            })}
          </div>
          {done && <p className="mt-2 text-sm font-bold">{ans[i] === item.a ? "✔ Correto!" : `✘ Resposta certa: ${item.o[item.a]}`}</p>}
        </fieldset>
      ))}
      <div className="flex flex-wrap items-center gap-3">
        {!done ? (
          <button className="xp-btn on" disabled={ans.includes(null)} onClick={() => setDone(true)}>
            {ans.includes(null) ? `Responda todas (${ans.filter((v) => v !== null).length}/${QUIZ.length})` : "Corrigir quiz"}
          </button>
        ) : (
          <>
            <p className="pixel text-3xl text-[var(--xp-blue-dark)]">PONTUAÇÃO: {score}/{QUIZ.length}</p>
            <button className="xp-btn" onClick={() => { setAns(QUIZ.map(() => null)); setDone(false); }}>Tentar novamente</button>
          </>
        )}
      </div>
    </div>
  );
}

function Index() {
  const [tl, setTl] = useState(0);
  const [menu, setMenu] = useState(false);
  return (
    <div className="circuit-bg min-h-screen pb-20">
      <header className="taskbar sticky top-0 z-50 text-[oklch(1_0_0)]">
        <div className="max-w-6xl mx-auto flex items-center gap-2 px-2 py-1">
          <a href="#topo" className="start-btn px-4 py-1">⊞ início</a>
          <button className="md:hidden ml-auto xp-btn" onClick={() => setMenu(!menu)}>☰ Menu</button>
          <nav className={`${menu ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 taskbar md:bg-none gap-1 p-2 md:p-0 text-sm`}>
            {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="px-2 py-1 rounded hover:bg-[oklch(1_0_0/.2)]">{l}</a>)}
          </nav>
        </div>
      </header>

      <main id="topo" className="max-w-6xl mx-auto px-4 pt-10 space-y-10">
        <Win title="SegundaGeracao.exe">
          <div className="text-center py-8">
            <p className="pixel text-xl text-[var(--xp-gray)]">C:\HISTORIA\COMPUTACAO&gt; run 2a_geracao<span className="blink">_</span></p>
            <h1 className="pixel text-6xl md:text-8xl text-[var(--xp-blue-dark)] mt-4">SEGUNDA GERAÇÃO</h1>
            <p className="text-xl mt-2 font-bold">da Computação · 1956–1964</p>
            <p className="mt-4 max-w-2xl mx-auto">A era dos <strong>transistores</strong>: computadores menores, mais rápidos, mais confiáveis e com menor consumo de energia.</p>
            <a href="#contexto" className="xp-btn on inline-block mt-6">Começar a explorar ▶</a>
          </div>
        </Win>

        <Win id="contexto" title="1. Contexto histórico">
          <div className="grid md:grid-cols-2 gap-6">
            <div><h3 className="pixel text-3xl text-[var(--xp-blue)]">No Brasil</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1"><li>Governo JK: construção de Brasília; “50 anos em 5”.</li><li>Golpe militar de 64.</li></ul></div>
            <div><h3 className="pixel text-3xl text-[var(--xp-blue)]">No mundo</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Corrida armamentista e espacial: Sputnik, chegada do homem à Lua, criação da NASA.</li>
                <li>Movimento dos direitos civis ganha força (Marcha sobre Washington, 1963).</li>
                <li>Crise dos mísseis em Cuba: após a Revolução Cubana (1959), a URSS instalou mísseis em Cuba e o mundo ficou perto de um conflito nuclear.</li>
                <li>Construção do Muro de Berlim.</li>
                <li>“Ano da África”: em 1960, 17 países declararam independência.</li>
              </ul></div>
          </div>
          <div className="mt-5 p-3 border-2 border-dashed border-[var(--xp-blue-light)] rounded"><strong>💡 Curiosidade:</strong> nessa época a TV ultrapassou o rádio como principal meio de entretenimento e informação nos lares dos países desenvolvidos, impulsionada pela produção em massa de aparelhos, queda de preços, expansão das redes de transmissão e surgimento de programas de auditório e novelas.</div>
        </Win>

        <Win id="transistor" title="2. Das válvulas aos transistores">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <p>A principal tecnologia da segunda geração foi o <strong>transistor</strong>, que substituiu as <strong>válvulas a vácuo</strong> da primeira geração.</p>
              <p>Criado em <strong>1947 nos Laboratórios Bell</strong>, substituiu as válvulas, que eram grandes, esquentavam demais e queimavam com frequência.</p>
              <p>O transistor funciona como um pequeno <strong>interruptor eletrônico</strong> que controla a passagem da corrente elétrica, ligando ou desligando — representando os números <strong>1 e 0</strong> usados pelos computadores.</p>
            </div>
            <Switch />
          </div>
        </Win>

        <Win id="caracteristicas" title="3. Principais características">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[["🔌","Transistores no lugar de válvulas"],["📦","Menores e mais rápidos"],["⚡","Menos energia elétrica"],["❄️","Produziam menos calor"],["🛡️","Mais confiáveis, menos defeitos"],["💾","Memória magnética, discos rígidos e fitas magnéticas"],["⌨️","Linguagens como COBOL e FORTRAN"],["🏢","Usados em empresas, universidades e pesquisas científicas"]].map(([i,t]) => (
              <div key={t} className="xp-window p-4 text-center hover:-translate-y-1 transition-transform"><div className="text-3xl">{i}</div><p className="mt-2 text-sm font-bold">{t}</p></div>
            ))}
          </div>
        </Win>

        <Win id="computadores" title="4. Computadores e tecnologias marcantes">
          <p className="mb-4">Clique nos cards para ver detalhes de cada máquina.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPUTERS.map(([n, d]) => <Flip key={n} front={<p className="pixel text-3xl text-[var(--xp-blue-dark)]">🖥 {n}</p>} back={<p>{d}</p>} />)}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
            <div className="xp-window p-4"><strong>🖱 A invenção do mouse:</strong> criado por Douglas Engelbart em 1964, com uma carcaça de madeira, apresentado em 1968. Em vez de digitar comandos, passamos a apontar e clicar.</div>
            <div className="xp-window p-4"><strong>🔲 Circuito integrado:</strong> entre 1958 e 1959, Jack Kilby (Texas Instruments) e Robert Noyce (Fairchild) desenvolveram a ideia de reunir vários componentes em uma única peça. Ele encerrou a segunda geração e deu início à terceira.</div>
          </div>
        </Win>

        <Win id="cientistas" title="5. Cientistas e personalidades">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PEOPLE.map(([n, d]) => <Flip key={n} front={<div><div className="text-4xl">👤</div><p className="pixel text-2xl mt-2">{n}</p></div>} back={<p><strong>{n}:</strong> {d}</p>} />)}
          </div>
        </Win>

        <Win id="linguagens" title="6. Linguagens e sistemas operacionais">
          <p>Os computadores passaram do <strong>código de máquina</strong> para o <strong>Assembly</strong> e as <strong>linguagens de alto nível</strong>, facilitando a programação.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
            {[["FORTRAN","Ciência e engenharia"],["COBOL","Negócios e empresas"],["ALGOL","Influenciou outras linguagens"],["LISP","Inteligência artificial"],["BASIC (1964)","Simples para qualquer estudante aprender"]].map(([l,d]) => (
              <div key={l} className="xp-window"><div className="xp-title text-sm">{l}.exe</div><div className="p-3 bg-[oklch(0.2_0.03_260)] text-[oklch(0.85_0.15_145)] pixel text-xl min-h-24">&gt; {d}</div></div>
            ))}
          </div>
          <p className="mt-4">⚙️ Também surgiram sistemas operacionais, como o <strong>GM-NAA I/O</strong>, e o <strong>processamento em lote (batch)</strong>, que executava vários programas em sequência.</p>
        </Win>

        <Win id="linha" title="7. Linha do tempo">
          <div className="flex flex-wrap gap-2">
            {TIMELINE.map(([y], i) => <button key={y} className={`xp-btn pixel text-xl ${tl === i ? "on" : ""}`} onClick={() => setTl(i)}>{y}</button>)}
          </div>
          <div className="relative h-2 bg-[var(--xp-sky)] rounded mt-4"><div className="absolute h-2 rounded bg-[var(--xp-blue)] transition-all" style={{ width: `${((tl + 1) / TIMELINE.length) * 100}%` }} /></div>
          <div className="xp-window mt-4"><div className="xp-title">📅 {TIMELINE[tl]![0]}</div><div className="xp-body text-lg">{TIMELINE[tl]![1]}</div></div>
          <div className="flex justify-between mt-3">
            <button className="xp-btn" disabled={tl === 0} onClick={() => setTl(tl - 1)}>◀ Anterior</button>
            <button className="xp-btn" disabled={tl === TIMELINE.length - 1} onClick={() => setTl(tl + 1)}>Próximo ▶</button>
          </div>
        </Win>

        <Win id="impactos" title="8. Impactos e importância histórica">
          <p>A segunda geração marcou a transição dos primeiros computadores instáveis, totalmente dependentes de válvulas, para dispositivos capazes de serem utilizados no mercado com sucesso — graças aos transistores.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-sm">
            <div className="xp-window p-3"><strong>Programação:</strong> linguagens de alto nível (FORTRAN, COBOL) e sistemas de processamento por lotes.</div>
            <div className="xp-window p-3"><strong>Armazenamento:</strong> cartões perfurados substituídos por fitas e discos magnéticos.</div>
            <div className="xp-window p-3"><strong>Uso empresarial:</strong> computadores como o IBM 1401 ampliaram a informática nas empresas.</div>
            <div className="xp-window p-3"><strong>Corrida espacial:</strong> após o Sputnik, os EUA criaram a NASA e a ARPA, acelerando a computação.</div>
          </div>
          <p className="mt-4">Contribuiu para a inovação técnica, comercial e de software necessária para o desenvolvimento dos computadores modernos.</p>
        </Win>

        <Win id="quiz" title="9. Quiz — teste seus conhecimentos"><Quiz /></Win>
      </main>
      <footer className="text-center mt-10 pixel text-xl text-[var(--xp-blue-dark)]">FIM · Segunda Geração da Computação · Material educativo</footer>
    </div>
  );
}

function Switch() {
  const [on, setOn] = useState(false);
  return (
    <div className="xp-window text-center p-6">
      <p className="font-bold">Simulador de transistor</p>
      <div className={`pixel text-8xl my-4 ${on ? "text-[var(--xp-blue)]" : "text-[var(--xp-gray)]"}`}>{on ? "1" : "0"}</div>
      <p className="mb-3">{on ? "⚡ Corrente passando (ligado)" : "Corrente bloqueada (desligado)"}</p>
      <button className="xp-btn on" onClick={() => setOn(!on)}>{on ? "Desligar" : "Ligar"} corrente</button>
    </div>
  );
}
