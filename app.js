/* =========================================================
   APP — navegação, exercícios, mapas, ilustrações e relatório
   ========================================================= */
const WHATSAPP = '5585992621003';           // (85) 99262-1003
const LS_KEY = CONFIG.lsKey;
const LETRAS = ['A', 'B', 'C', 'D'];
const MODS = Object.keys(MODULOS);

/* ---------- estado salvo no aparelho do aluno ---------- */
let S = (() => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; } })();
S.aluno = S.aluno || { nome: '', turma: '' };
S.r = S.r || {}; S.pos = S.pos || {};
MODS.forEach(m => { S.r[m] = S.r[m] || {}; S.pos[m] = S.pos[m] || 0; });
const save = () => localStorage.setItem(LS_KEY, JSON.stringify(S));

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent; };
const INK = '#2b2118';

/* =========================================================
   MAPA ESQUEMÁTICO DO MEDITERRÂNEO
   classes no <svg>: s0..s4 (império) ou i0..i3 (islã)
   ========================================================= */
const MAR = 'M30,160 Q50,135 95,142 Q130,128 165,140 Q180,150 196,132 Q205,150 222,148 Q240,128 262,132 Q285,118 310,128 Q345,120 372,140 Q385,168 355,182 Q315,196 270,182 Q225,205 170,192 Q120,206 75,192 Q38,186 30,160 Z';
const ITALIA = 'M178,104 Q190,102 197,116 Q208,134 222,150 L213,157 Q200,143 190,134 Q180,122 178,104 Z';
const IMPERIO = 'M18,112 Q55,86 130,98 Q175,84 215,92 Q260,72 300,74 Q350,70 392,100 L404,150 Q402,206 360,214 Q300,228 230,216 Q150,232 80,218 Q30,212 16,180 Z';

function baseMapa(cls, camadas = '') {
  return `<svg viewBox="0 0 420 250" class="mapa-svg ${cls}" role="img" aria-label="Mapa esquemático do Mediterrâneo">
    <defs><clipPath id="cpO"><rect x="0" y="0" width="238" height="250"/></clipPath><clipPath id="cpE"><rect x="238" y="0" width="182" height="250"/></clipPath>
      ${[['sG', '#7a4a1e'], ['sH', '#c0392b'], ['sI', '#1e8449']].map(([id, c]) => `<marker id="${id}" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${c}"/></marker>`).join('')}
      <pattern id="pont" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="#b9a57d"/></pattern></defs>
    <rect width="420" height="250" fill="#efe2c2"/><rect width="420" height="250" fill="url(#pont)" opacity=".5"/>
    <g class="imp">
      <path class="imp-todo" d="${IMPERIO}"/>
      <path class="imp-o" d="${IMPERIO}" clip-path="url(#cpO)"/>
      <path class="imp-e" d="${IMPERIO}" clip-path="url(#cpE)"/>
    </g>
    <path d="${MAR}" fill="#9fc9d9" stroke="#5f8fa3" stroke-width="2"/>
    <ellipse cx="318" cy="92" rx="38" ry="13" fill="#9fc9d9" stroke="#5f8fa3" stroke-width="2"/>
    <path d="${ITALIA}" fill="#efe2c2" class="italia" stroke="#8a7550" stroke-width="1.5"/>
    <text x="200" y="176" class="mar">Mar Mediterrâneo</text><text x="318" y="96" class="mar sm">Mar Negro</text>
    <line class="divisa" x1="238" y1="60" x2="238" y2="232"/>
    <text class="rot-o" x="80" y="232">OCIDENTE</text><text class="rot-e" x="300" y="232">ORIENTE</text>
    <g class="cid"><circle cx="190" cy="124" r="4.5"/><text x="168" y="121">Roma</text></g>
    <g class="cid rav"><circle cx="196" cy="108" r="3.5"/><text x="202" y="106">Ravena</text></g>
    <g class="cid"><circle cx="292" cy="110" r="4.5"/><text x="252" y="125">Constantinopla</text></g>
    ${camadas}
  </svg>`;
}

const CAM_INVASOES = `<g class="inv">
    <g class="ger"><text x="30" y="40">Anglos e saxões</text><text x="105" y="62">Francos</text><text x="185" y="40">Ostrogodos</text><text x="250" y="58">Visigodos</text><text x="150" y="80">Vândalos</text></g>
    <g class="setas">${['M70,46 Q60,70 60,100', 'M128,68 Q125,85 115,110', 'M215,46 Q205,70 200,98', 'M275,64 Q260,95 228,112', 'M168,86 Q120,120 70,150'].map(d => `<path d="${d}"/>`).join('')}</g>
    <g class="hunos"><text x="352" y="30">🏹 HUNOS</text><text x="352" y="44" class="sub-h">(Ásia Central)</text><path d="M350,36 Q320,40 300,52"/><path d="M350,48 Q330,58 285,62"/></g>
  </g>
  <g class="queda476"><text x="120" y="78" class="x">💥</text><text x="40" y="104" class="x">💥</text><text x="185" y="98" class="x">💥</text><text x="96" y="160" class="reinos">reinos germânicos</text></g>
  <g class="queda1453"><text x="298" y="70" class="x">⚔️</text><text x="330" y="160" class="turcos">turcos</text></g>`;

const CAM_ISLA = `<g class="isla">
    <g class="ara"><circle cx="398" cy="222" r="9"/><text x="340" y="244">Arábia (Maomé)</text></g>
    <path class="is1" d="M392,218 Q240,246 60,214"/>
    <g class="ib"><path class="is2" d="M58,212 Q46,190 56,150"/><text x="12" y="146">Península Ibérica (711)</text></g>
    <g class="poi"><path class="is3" d="M58,146 Q70,120 92,100"/><text x="88" y="92" class="stop">✋</text><text x="104" y="80">Poitiers (732)</text><text x="104" y="68" class="sub-h">Carlos Martel</text></g>
  </g>`;

/* ilustrações fixas da teoria */
const SVG_VILA = `<svg viewBox="0 0 420 210" class="ilus vila" role="img" aria-label="Vila romana e colonato">
  <rect width="420" height="210" rx="14" fill="#f6ecd2"/>
  ${[0, 1, 2, 3, 4].map(i => `<rect x="${20 + i * 26}" y="140" width="22" height="50" fill="${i % 2 ? '#d9c77b' : '#c9b25e'}"/>`).join('')}
  <text x="76" y="132" text-anchor="middle" class="cap">🌾 campos da vila</text>
  <path d="M165,190 V96 H330 V190" fill="none" stroke="#8a6a44" stroke-width="7" stroke-dasharray="14 4"/>
  <rect x="210" y="104" width="76" height="52" fill="#e9d4ae" stroke="${INK}" stroke-width="2"/><path d="M202,106 L248,78 L294,106 Z" fill="#b5522e" stroke="${INK}" stroke-width="2"/>
  <rect x="240" y="128" width="16" height="28" fill="#7b4a2a"/>
  <text x="248" y="176" text-anchor="middle" class="lbl">🏛️ Grande proprietário</text>
  <text x="248" y="90" text-anchor="middle" class="cap">muralha da vila</text>
  <text x="60" y="80" font-size="34">👨‍🌾</text><text x="100" y="80" font-size="30">👩‍🌾</text>
  <text x="92" y="100" text-anchor="middle" class="lbl">Colonos</text>
  <path d="M135,52 Q200,30 262,64" class="fluxo-a" marker-end="url(#sv)"/><text x="196" y="30" text-anchor="middle" class="tg">🌾 parte da colheita</text>
  <path d="M215,110 Q160,112 130,92" class="fluxo-b" marker-end="url(#sv2)"/><text x="355" y="56" class="tg2">🏠 moradia</text><text x="355" y="74" class="tg2">🛡️ proteção</text>
  <path d="M330,64 Q300,40 280,80" fill="none" stroke="#2f7d5b" stroke-width="2" stroke-dasharray="4 3"/>
  <defs><marker id="sv" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#c9852c"/></marker><marker id="sv2" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#2f7d5b"/></marker></defs>
</svg>`;

const SVG_PIRAMIDE = `<svg viewBox="0 0 260 200" class="ilus pir" role="img" aria-label="Pirâmide da sociedade feudal">
  <path d="M130,10 L178,74 L82,74 Z" fill="#7c5cbf" stroke="${INK}" stroke-width="2.5"/>
  <path d="M82,74 L178,74 L216,126 L44,126 Z" fill="#b5522e" stroke="${INK}" stroke-width="2.5"/>
  <path d="M44,126 L216,126 L254,190 L6,190 Z" fill="#7fa34a" stroke="${INK}" stroke-width="2.5"/>
  <text x="130" y="58" text-anchor="middle" class="pt">⛪ Clero</text>
  <text x="130" y="106" text-anchor="middle" class="pt">⚔️ Nobreza</text>
  <text x="130" y="164" text-anchor="middle" class="pt">🌾 Servos</text></svg>`;

const SVG_COROACAO = `<div class="cena"><span class="papa">🧙‍♂️<small>Papa Leão III</small></span><span class="coroa-anim">👑</span><span class="rei-c">🤴<small>Carlos Magno</small></span></div>`;

/* figuras das questões */
const FIG = {
  hunos: () => baseMapa('s2 fixo', CAM_INVASOES),
  divisao: () => baseMapa('s1 fixo', CAM_INVASOES),
  verdun: () => mapaVerdun(true, true)
};

function mapaVerdun(dividido, castelos) {
  const BL = 'M40,60 Q90,20 170,30 Q250,16 320,40 Q380,60 380,120 Q384,190 320,210 Q240,232 160,214 Q80,222 46,180 Q20,120 40,60 Z';
  const cast = [[80, 80], [120, 150], [70, 170], [190, 70], [210, 150], [170, 190], [280, 70], [320, 130], [270, 180], [345, 90], [140, 100], [240, 110]];
  return `<svg viewBox="0 0 420 250" class="mapa-svg verdun ${dividido ? 'div' : ''} ${castelos ? 'cast' : ''}">
    <defs><clipPath id="cpV"><path d="${BL}"/></clipPath></defs>
    <rect width="420" height="250" fill="#efe2c2"/>
    <g clip-path="url(#cpV)">
      <rect class="v-todo" x="0" y="0" width="420" height="250"/>
      <rect class="v1" x="0" y="0" width="150" height="250"/><rect class="v2" x="150" y="0" width="95" height="250"/><rect class="v3" x="245" y="0" width="175" height="250"/>
    </g>
    <path d="${BL}" fill="none" stroke="${INK}" stroke-width="3"/>
    <g class="v-lab-todo"><text x="210" y="120" text-anchor="middle" class="lbl big">Império Carolíngio</text><text x="210" y="142" text-anchor="middle" class="cap">um só imperador</text></g>
    <g class="v-lab">
      <text x="88" y="236" text-anchor="middle" class="lbl">Francia Ocidental</text><text x="88" y="250" text-anchor="middle" class="cap">Carlos, o Calvo</text>
      <text x="198" y="236" text-anchor="middle" class="lbl">Reino do Meio</text><text x="198" y="250" text-anchor="middle" class="cap">Lotário</text>
      <text x="320" y="236" text-anchor="middle" class="lbl">Francia Oriental</text><text x="320" y="250" text-anchor="middle" class="cap">Luís, o Germânico</text>
      <line x1="150" y1="20" x2="150" y2="222" class="corte"/><line x1="245" y1="14" x2="245" y2="226" class="corte"/>
    </g>
    <g class="castelos">${cast.map(([x, y], i) => `<text x="${x}" y="${y}" style="animation-delay:${i * 80}ms">🏰</text>`).join('')}</g>
  </svg>`;
}

/* quiz genérico dos mini-jogos */
function miniQuiz(el, titulo, itens, botoes) {
  let i = 0, ok = 0;
  const draw = (msg = '') => {
    if (i >= itens.length) {
      el.innerHTML = `<div class="jogo"><span class="tag">${titulo}</span><p class="placarj">🎉 Você acertou <b>${ok} de ${itens.length}</b>!</p><div class="row"><button class="btn sm" id="jr">Jogar de novo</button></div></div>`;
      $('#jr', el).onclick = () => { i = 0; ok = 0; draw(); }; return;
    }
    el.innerHTML = `<div class="jogo"><span class="tag">${titulo} (${i + 1}/${itens.length})</span>
      <div class="var">${itens[i][0]}</div>
      <div class="row">${botoes.map((b, k) => `<button class="btn sm" data-v="${k}">${b}</button>`).join('')}</div><p class="msg">${msg}</p></div>`;
    $$('[data-v]', el).forEach(b => b.onclick = () => {
      const k = +b.dataset.v, acertou = k === itens[i][1];
      if (acertou) ok++;
      i++; draw(acertou ? '✅ Isso!' : `❌ Resposta: <b>${botoes[itens[i - 1][1]]}</b>.`);
    });
  };
  draw();
}

/* passos genéricos (mapas com etapas) */
function etapas(el, titulo, passos, render) {
  let k = 0;
  const draw = () => {
    el.innerHTML = `<div class="jogo"><span class="tag">${titulo}</span>
      <div class="row passos-m">${passos.map((p, i) => `<button class="btn sm ${i === k ? 'on' : 'ghost'}" data-k="${i}">${p[0]}</button>`).join('')}</div>
      <div class="palco">${render(k)}</div><p class="msg">${passos[k][1]}</p>
      <div class="row"><button class="btn sm ghost" id="ea" ${k === 0 ? 'disabled' : ''}>← Voltar</button><button class="btn sm" id="ep" ${k === passos.length - 1 ? 'disabled' : ''}>Avançar →</button></div></div>`;
    $$('[data-k]', el).forEach(b => b.onclick = () => { k = +b.dataset.k; draw(); });
    $('#ea', el).onclick = () => { k--; draw(); }; $('#ep', el).onclick = () => { k++; draw(); };
  };
  draw();
}

/* =========================================================
   WIDGETS INTERATIVOS
   ========================================================= */
const WIDGETS = {
  domino(el) {
    const c = [['⚔️', 'Fim das guerras de conquista', 'Roma parou de conquistar novos territórios.'], ['⛓️', 'Menos pessoas escravizadas e riquezas', 'Elas eram a principal mão de obra nas fazendas.'],
      ['🌾', 'Queda na produção agrícola', 'Com menos trabalhadores, produziu-se menos comida.'], ['💰', 'Alimentos caros (inflação)', 'Pouca comida = preços altos.'], ['🛤️', 'Menos comércio e estradas inseguras', 'O império foi ficando cada vez mais fraco.']];
    let n = 1;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><div class="domino">${c.map((x, i) => `<div class="pec ${i < n ? 'on' : ''}" style="--d:${i}"><i>${x[0]}</i><b>${x[1]}</b><small>${x[2]}</small></div>${i < c.length - 1 ? `<span class="arr ${i < n - 1 ? 'on' : ''}">➜</span>` : ''}`).join('')}</div>
        <p class="msg">${n < c.length ? 'Toque em <b>"E aí?"</b> para ver a próxima consequência.' : '🧱 Junte isso às fronteiras enormes e às brigas entre os generais: o império entrou em <b>crise</b>.'}</p>
        <div class="row">${n < c.length ? '<button class="btn sm" id="dn">E aí? ➜</button>' : '<button class="btn sm ghost" id="dr">🔁 Recomeçar</button>'}</div></div>`;
      $('#dn', el) && ($('#dn', el).onclick = () => { n++; draw(); });
      $('#dr', el) && ($('#dr', el).onclick = () => { n = 1; draw(); });
    };
    draw();
  },
  mapa(el) {
    etapas(el, '🗺️ Mapa esquemático: toque nas etapas', [
      ['Séc. II: unido', 'O Império Romano no auge: um único império em volta do <b>Mar Mediterrâneo</b>, com capital em <b>Roma</b>.'],
      ['395: divisão', '<b>Teodósio</b> divide o império: <b>Ocidente</b> (Roma, depois Ravena) e <b>Oriente</b> (Constantinopla).'],
      ['Fim do séc. IV: hunos', 'Os <b>hunos</b>, vindos da Ásia Central, empurram os <b>povos germânicos</b>, que atravessam as fronteiras romanas.'],
      ['476: cai o Ocidente', 'O Ocidente cai e se divide em <b>reinos germânicos</b>. Começa a <b>Idade Média</b>. O Oriente continua de pé.'],
      ['1453: cai o Oriente', 'O Império do Oriente (Bizantino) durou cerca de <b>mil anos</b>, até ser conquistado pelos <b>turcos</b> em 1453.']
    ], k => baseMapa('s' + k, CAM_INVASOES));
  },
  exodo(el) {
    const N = 10; let fora = 0;
    const draw = () => {
      el.innerHTML = `<div class="jogo"><div class="exodo">
        <div class="lugar cidade"><b>🏙️ Cidade</b><div class="ger-c">${fora > 0 ? '🔥 saques · 🍞 falta comida' : 'comércio e mercados'}</div><div class="pess">${'🧑'.repeat(N - fora)}</div><small>${N - fora} moradores</small></div>
        <div class="seta-ex">${fora ? '➜➜➜' : '⋯'}</div>
        <div class="lugar campo"><b>🏰 Vila rural (fortificada)</b><div class="ger-c">🌾 comida · 🛡️ proteção</div><div class="pess">${'🧑‍🌾'.repeat(fora)}</div><small>${fora} colonos</small></div></div>
        <p class="msg">${fora === 0 ? 'Antes da crise, muita gente morava nas cidades.' : fora < N ? 'Com as invasões, as pessoas <b>saem da cidade</b> e vão para o campo…' : '🏃 Isso é o <b>êxodo urbano</b> (ou <b>ruralização</b>): a vida passa a acontecer no campo.'}</p>
        <div class="row">${fora < N ? '<button class="btn sm" id="xa">⚔️ Chegam as invasões!</button>' : '<button class="btn sm ghost" id="xr">🔁 Recomeçar</button>'}</div></div>`;
      $('#xa', el) && ($('#xa', el).onclick = () => { fora = Math.min(N, fora + 3); if (fora === 9) fora = 10; draw(); });
      $('#xr', el) && ($('#xr', el).onclick = () => { fora = 0; draw(); });
    };
    draw();
  },
  linha(el) {
    const ev = [
      [250, 'Séc. III', '🏚️', 'Crise interna do Império Romano', 'Fronteiras enormes, falta de mão de obra escravizada, inflação e disputas entre generais.'],
      [395, '395', '✂️', 'Teodósio divide o Império', 'O império é dividido em <b>Ocidente</b> e <b>Oriente</b>.'],
      [476, '476', '💥', 'Queda de Roma: começa a Idade Média', 'Odoacro depõe Rômulo Augústulo, o último imperador do Ocidente.'],
      [650, 'Séc. VII', '☪️', 'Expansão do Islamismo', 'Fundado por <b>Maomé</b> na Península Arábica, o Islã se espalha pelo norte da África.'],
      [732, '732', '✋', 'Batalha de Poitiers', '<b>Carlos Martel</b> detém o avanço muçulmano na Europa Ocidental.'],
      [800, '800', '👑', 'Carlos Magno coroado imperador', 'Coroado pelo <b>papa Leão III</b>: aliança entre o império e a Igreja.'],
      [843, '843', '📜', 'Tratado de Verdun', 'O império de Carlos Magno é dividido em <b>três</b> reinos entre seus netos.'],
      [1453, '1453', '⚔️', 'Fim do Império Bizantino', 'Os turcos conquistam Constantinopla.']
    ];
    const X = a => 4 + (a - 200) / (1500 - 200) * 92;
    let sel = 2;
    const draw = () => {
      const e = ev[sel];
      el.innerHTML = `<div class="jogo"><span class="tag">⏳ Linha do tempo: toque em cada evento</span>
        <div class="tl">
          <div class="faixa ant" style="left:0;width:${X(476)}%">Antiguidade</div>
          <div class="faixa alta" style="left:${X(476)}%;width:${X(1000) - X(476)}%">Alta Idade Média <small>séc. V–X</small></div>
          <div class="faixa baixa" style="left:${X(1000)}%;width:${X(1500) - X(1000)}%">Baixa Idade Média <small>séc. XI–XV</small></div>
          <div class="eixo"></div>
          ${ev.map((x, i) => `<button class="ev ${i === sel ? 'on' : ''} ${i % 2 ? 'baixo' : ''}" style="left:${X(x[0])}%" data-e="${i}"><i>${x[2]}</i><b>${x[1]}</b></button>`).join('')}
        </div>
        <div class="ev-card"><span class="big">${e[2]}</span><div><b>${e[1]} · ${e[3]}</b><p>${e[4]}</p></div></div>
        <p class="center dica-p">📏 A Idade Média vai do século <b>V</b> (476) ao <b>XV</b> (1453): são 10 séculos!</p></div>`;
      $$('[data-e]', el).forEach(b => b.onclick = () => { sel = +b.dataset.e; draw(); });
    };
    draw();
  },
  trevas(el) {
    const draw = luz => {
      el.innerHTML = `<div class="trevas ${luz ? 'luz' : ''}">
        <div class="row"><button class="btn sm ${luz ? 'ghost' : 'on'}" data-l="0">🌑 Visão do Renascimento</button><button class="btn sm ${luz ? 'on' : 'ghost'}" data-l="1">💡 Visão dos historiadores hoje</button></div>
        ${luz ? `<div class="inv-grid">
            <div><i>🎓</i><b>Universidades</b><small>as primeiras do mundo surgiram nesse período</small></div>
            <div><i>⚙️</i><b>Arado de ferro e charrua</b><small>a agricultura avançou</small></div>
            <div><i>🌬️</i><b>Moinhos</b><small>hidráulicos (de água) e eólicos (de vento)</small></div>
            <div><i>⛪</i><b>Catedrais</b><small>estilos românico e gótico</small></div>
            <div><i>📚</i><b>Cópia de livros</b><small>escolas nos mosteiros</small></div>
          </div><p class="msg">"Idade das Trevas" é um <b>apelido preconceituoso</b>: a Idade Média teve <b>muitas inovações</b>.</p>`
        : `<div class="nevoa"><span>🕯️</span><p>"Mil anos de <b>atraso</b> e <b>ignorância</b>… uma época escura entre a Antiguidade e nós."</p><small>— intelectuais do Renascimento (séculos XV e XVI), que queriam elogiar a Antiguidade e desvalorizar a época medieval</small></div>
          <p class="msg">Essa visão está certa? Toque em <b>💡 Visão dos historiadores hoje</b>.</p>`}</div>`;
      $$('[data-l]', el).forEach(b => b.onclick = () => draw(b.dataset.l === '1'));
    };
    draw(false);
  },
  herancas(el) {
    miniQuiz(el, '🎮 Herança romana ou germânica?', [
      ['📜 Língua latina', 0], ['🤝 Comitatus: fidelidade entre chefe e guerreiros', 1], ['⚖️ Leis escritas', 0], ['🗣️ Leis baseadas nos costumes orais', 1],
      ['✝️ Cristianismo organizado pela Igreja', 0], ['🐄 Economia agropastoril', 1], ['🏡 Colonato nas grandes vilas', 0], ['⚔️ Tradições guerreiras', 1]
    ], ['🏛️ Romana', '🪓 Germânica']);
  },
  islam(el) {
    etapas(el, '☪️ Mapa: a expansão do Islamismo', [
      ['Séc. VII: Arábia', 'O <b>Islamismo</b> foi fundado por <b>Maomé</b> na <b>Península Arábica</b>, no século VII.'],
      ['Norte da África', 'Os exércitos muçulmanos conquistaram rapidamente o <b>norte da África</b>.'],
      ['711: Ibéria', 'Atravessaram o <b>estreito de Gibraltar</b> e conquistaram grande parte da <b>Península Ibérica</b> (atuais Portugal e Espanha).'],
      ['732: Poitiers', '✋ Os <b>francos</b>, liderados por <b>Carlos Martel</b>, detiveram o avanço muçulmano na <b>Batalha de Poitiers</b>.']
    ], k => baseMapa('isl i' + k, CAM_ISLA));
  },
  admin(el) {
    const P = {
      cond: ['🏘️ Condados', 'Regiões do <b>interior</b> do império, governadas por <b>condes</b>.'],
      marc: ['🛡️ Marcas', 'Regiões de <b>fronteira</b>, com muitos soldados, governadas por <b>marqueses</b>.'],
      duc: ['🏯 Ducados', 'Grandes regiões governadas por <b>duques</b>.'],
      missi: ['👁️ Missi dominici', '"Enviados do senhor": viajavam pelo império para <b>fiscalizar</b> condes e marqueses e levar as ordens do imperador.']
    };
    let sel = 'cond';
    const cel = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const borda = r === 0 || r === 3 || c === 0 || c === 5, duc = !borda && (r === 2 && c >= 3);
      cel.push(`<rect x="${30 + c * 60}" y="${20 + r * 50}" width="58" height="48" rx="6" class="${borda ? 'marc' : duc ? 'duc' : 'cond'}"/>`);
    }
    const draw = () => {
      el.innerHTML = `<div class="jogo"><span class="tag">🗂️ O império de Carlos Magno (esquema)</span>
        <div class="row">${Object.keys(P).map(k => `<button class="btn sm ${k === sel ? 'on' : 'ghost'}" data-a="${k}">${P[k][0]}</button>`).join('')}</div>
        <svg viewBox="0 0 420 230" class="ilus adm sel-${sel}"><rect width="420" height="230" rx="14" fill="#efe2c2"/>${cel.join('')}
          <text x="210" y="122" text-anchor="middle" font-size="30">👑</text><text x="210" y="140" text-anchor="middle" class="cap">Carlos Magno</text>
          <g class="missi"><text font-size="22">🐎</text></g></svg>
        <div class="ev-card"><div><b>${P[sel][0]}</b><p>${P[sel][1]}</p></div></div></div>`;
      $$('[data-a]', el).forEach(b => b.onclick = () => { sel = b.dataset.a; draw(); });
    };
    draw();
  },
  verdun(el) {
    etapas(el, '✂️ Mapa esquemático: o império se divide', [
      ['814: um império', 'Carlos Magno governava um império enorme. Depois de sua morte, seu filho <b>Luís, o Piedoso</b>, assumiu.'],
      ['843: Verdun', 'Os <b>três netos</b> de Carlos Magno brigaram pela herança. O <b>Tratado de Verdun</b> dividiu o império em <b>três reinos</b>.'],
      ['Consequência', '🏰 Com o poder dos reis dividido e <b>mais fraco</b>, os <b>senhores locais</b> passaram a cuidar da defesa e da justiça nos seus castelos: o <b>feudalismo</b> se fortaleceu.']
    ], k => mapaVerdun(k >= 1, k >= 2));
  }
};
function initWidgets(root) { $$('[data-w]', root).forEach(el => WIDGETS[el.dataset.w] && WIDGETS[el.dataset.w](el)); }

/* =========================================================
   ESTATÍSTICAS
   ========================================================= */
function stats(m) {
  const qs = MODULOS[m].questoes, porTopico = MODULOS[m].topicos.map(() => ({ ok: 0, n: 0 }));
  let resp = 0, acertos = 0; const erros = [];
  qs.forEach((q, i) => {
    const r = S.r[m][i];
    if (r && r.p !== undefined) {
      resp++; porTopico[q.t].n++;
      if (r.p === q.c) { acertos++; porTopico[q.t].ok++; } else erros.push(i);
    }
  });
  return { total: qs.length, resp, acertos, erros, porTopico, pct: resp ? Math.round(acertos / resp * 100) : 0 };
}

/* =========================================================
   TELAS
   ========================================================= */
const app = () => $('#app');

function header(extra = '') {
  return `<header class="top"><a href="#" class="logo"><span class="selo">${CONFIG.serie}</span><span><b>Mentoria Educacional Promover</b><small>${CONFIG.area} · ${CONFIG.serieLonga}</small></span></a>${extra}</header>`;
}

function renderHome() {
  const cards = MODS.map(m => {
    const mod = MODULOS[m], s = stats(m), prog = Math.round(s.resp / s.total * 100);
    return `<article class="mod ${m}">
      <div class="mod-top"><span class="emoji">${mod.emoji}</span><div class="anel" style="--p:${prog}"><span>${s.resp}/${s.total}</span></div></div>
      <h2>${mod.titulo}</h2><p class="sub">${mod.sub}</p>
      <ul class="tops">${mod.topicos.map((t, i) => `<li><a href="#${m}/t/${i}">${i + 1}. ${t}</a></li>`).join('')}</ul>
      <div class="row"><a class="btn" href="#${m}/t">📖 Estudar a teoria</a><a class="btn alt" href="#${m}/q">✍️ Fazer as ${s.total} questões</a></div>
      ${s.resp ? `<p class="mini-score">Acertos na 1ª tentativa: <b>${s.acertos}/${s.resp}</b></p>` : ''}
    </article>`;
  }).join('');
  app().innerHTML = header() + `
    <section class="hero">
      <div class="hero-txt"><p class="kicker">${CONFIG.serieLonga} · Ensino Fundamental II</p>
      <h1>Viaje de <mark>Roma</mark> até a <mark>Idade Média</mark>!</h1>
      <p>Explore mapas animados, a linha do tempo, a vila romana e o império de Carlos Magno. Depois faça as questões e <b>envie seu relatório de erros</b> para o professor pelo WhatsApp.</p>
      <form class="aluno" onsubmit="return false">
        <span class="fita"></span><b>Quem está estudando?</b>
        <label>Seu nome<input id="nome" value="${esc(S.aluno.nome)}" placeholder="Digite seu nome completo" autocomplete="name"></label>
        <label>Turma<input id="turma" value="${esc(S.aluno.turma)}" placeholder="Ex.: ${CONFIG.serie} A"></label>
        <small>Fica salvo só neste aparelho.</small>
      </form></div>
      <div class="hero-mapa">${baseMapa('s1 fixo hero-m', '')}<p class="cap-h">395 d.C. · o império dividido</p></div>
    </section>
    <section class="passos"><span>1 📖 Estude</span><span>2 🗺️ Explore os mapas</span><span>3 ✍️ Responda</span><span>4 💬 Envie no WhatsApp</span></section>
    <section class="mods">${cards}</section>
    <a class="btn relat" href="#relatorio">📋 Ver meu relatório de erros</a>`;
  $('#nome').oninput = e => { S.aluno.nome = e.target.value; save(); };
  $('#turma').oninput = e => { S.aluno.turma = e.target.value; save(); };
}

function renderModulo(m, tab, arg) {
  const mod = MODULOS[m];
  app().innerHTML = header(`<a href="#relatorio" class="btn sm ghost">📋 Relatório</a>`) + `
    <div class="mhead ${m}"><a href="#" class="voltar">← Início</a><h1>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h1>
      <nav class="tabs"><a href="#${m}/t" class="${tab === 't' ? 'on' : ''}">📖 Teoria</a><a href="#${m}/q" class="${tab === 'q' ? 'on' : ''}">✍️ Questões</a></nav></div>
    <main id="main" class="${m}"></main>`;
  if (tab === 'q') { if (arg !== undefined && !isNaN(+arg)) { S.pos[m] = +arg; save(); } renderQuestao(m); }
  else renderTeoria(m, arg);
}

function renderTeoria(m, foco) {
  const mod = MODULOS[m], main = $('#main');
  main.innerHTML = `<nav class="indice">${mod.topicos.map((t, i) => `<a href="#${m}/t/${i}">${i + 1}. ${t}</a>`).join('')}</nav>` +
    TEORIA[m].map((fn, i) => {
      const primeira = mod.questoes.findIndex(q => q.t === i), qtd = mod.questoes.filter(q => q.t === i).length;
      return `<section class="topico" id="top-${i}"><span class="num">${i + 1}</span><h2>${mod.topicos[i]}</h2>${fn()}
        <a class="btn alt pratica" href="#${m}/q/${primeira}">✍️ Praticar este tópico (${qtd} questões) →</a></section>`;
    }).join('');
  initWidgets(main);
  if (foco !== undefined) setTimeout(() => { const t = $('#top-' + foco); t && t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
}

function renderQuestao(m) {
  const mod = MODULOS[m], i = Math.min(S.pos[m] || 0, mod.questoes.length - 1), q = mod.questoes[i];
  const r = S.r[m][i] || {}, feito = r.u !== undefined, s = stats(m);
  const dotsNav = mod.questoes.map((qq, k) => {
    const rr = S.r[m][k]; let c = '';
    if (rr && rr.u !== undefined) c = rr.u === qq.c ? (rr.p === qq.c ? 'ok' : 'fix') : 'err';
    else if (rr && rr.p !== undefined) c = 'err';
    return `<button class="qd ${c} ${k === i ? 'cur' : ''}" data-k="${k}" aria-label="Questão ${k + 1}">${k + 1}</button>`;
  }).join('');
  const ops = q.ops.map((o, k) => {
    let c = '';
    if (feito) { if (k === q.c) c = 'certa'; else if (k === r.u) c = 'errada'; else c = 'apagada'; }
    return `<button class="op ${c}" data-o="${k}" ${feito ? 'disabled' : ''}><span class="let">${LETRAS[k]}</span><span>${o}</span></button>`;
  }).join('');
  const acertou = feito && r.u === q.c;
  const fb = !feito ? '' : `<div class="fb ${acertou ? 'sim' : 'nao'}">
      <b>${acertou ? (r.p === q.c ? '🎉 Acertou de primeira!' : '💪 Agora sim! (conta como erro no relatório, mas você aprendeu)') : `😕 Não foi dessa vez. A resposta certa é a <span class="let">${LETRAS[q.c]}</span>.`}</b>
      <div class="exp"><span class="tag">🧑‍🏫 Resolução comentada</span><p>${q.exp}</p></div>
      ${acertou ? '' : `<a class="link" href="#${m}/t/${q.t}">📖 Rever a teoria: ${mod.topicos[q.t]}</a>`}
    </div>`;
  const todas = s.resp === s.total;
  const temErradas = mod.questoes.some((qq, k) => S.r[m][k] && S.r[m][k].u !== undefined && S.r[m][k].u !== qq.c);
  $('#main').innerHTML = `
    <div class="qnav">${dotsNav}</div>
    <p class="legenda"><i class="ok"></i>acertou <i class="fix"></i>corrigiu <i class="err"></i>errou</p>
    <article class="qcard">
      <div class="qmeta"><span class="qn">Questão ${i + 1}<small>/${mod.questoes.length}</small></span><span class="pill">${mod.topicos[q.t]}</span></div>
      <p class="enun">${q.txt}</p>
      ${q.fig ? `<div class="fig">${FIG[q.fig]()}</div>` : ''}
      ${!feito ? `<details class="dica"><summary>💡 Preciso de uma dica</summary><p>${q.dica}</p></details>` : ''}
      <div class="ops">${ops}</div>
      ${fb}
      <div class="row nav">
        <button class="btn ghost" id="ant" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
        ${i < mod.questoes.length - 1 ? `<button class="btn" id="prox">Próxima →</button>` : `<a class="btn" href="#relatorio">📋 Ver relatório</a>`}
      </div>
    </article>
    ${todas ? `<div class="fim"><b>🏁 Você respondeu todas as questões de ${mod.titulo}!</b><p>Acertos na 1ª tentativa: <b>${s.acertos}/${s.total}</b> (${s.pct}%).</p>
      <div class="row">${temErradas ? `<button class="btn alt" id="refazer">🔁 Refazer só as que errei</button>` : ''}<a class="btn" href="#relatorio">📋 Ver e enviar relatório</a></div></div>` : ''}
    <p class="reset"><button class="linkbtn" id="zerar">Apagar respostas deste módulo e recomeçar</button></p>`;

  $$('.qd').forEach(b => b.onclick = () => { S.pos[m] = +b.dataset.k; save(); renderQuestao(m); scrollTo({ top: 0, behavior: 'smooth' }); });
  $$('.op:not([disabled])').forEach(b => b.onclick = () => {
    const k = +b.dataset.o, rr = S.r[m][i] || {};
    if (rr.p === undefined) rr.p = k;
    rr.u = k; rr.n = (rr.n || 0) + 1; S.r[m][i] = rr; save();
    renderQuestao(m);
    const f = $('.fb'); f && f.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (k === q.c) estrelas();
  });
  const go = d => { S.pos[m] = i + d; save(); renderQuestao(m); scrollTo({ top: 0, behavior: 'smooth' }); };
  $('#ant') && ($('#ant').onclick = () => go(-1));
  $('#prox') && ($('#prox').onclick = () => go(1));
  $('#refazer') && ($('#refazer').onclick = () => {
    let primeira = null;
    mod.questoes.forEach((qq, k) => { const rr = S.r[m][k]; if (rr && rr.u !== qq.c) { delete rr.u; if (primeira === null) primeira = k; } });
    S.pos[m] = primeira || 0; save(); renderQuestao(m); scrollTo({ top: 0 });
  });
  $('#zerar').onclick = () => { if (confirm('Apagar todas as respostas de ' + mod.titulo + '?')) { S.r[m] = {}; S.pos[m] = 0; save(); renderQuestao(m); } };
}

function estrelas() {
  const box = document.createElement('div'); box.className = 'estrelas';
  box.innerHTML = Array.from({ length: 14 }, (_, k) => `<i style="--x:${Math.cos(k / 14 * 6.28) * 140}px;--y:${Math.sin(k / 14 * 6.28) * 140}px">${['⭐', '✨', '🌟'][k % 3]}</i>`).join('');
  document.body.appendChild(box); setTimeout(() => box.remove(), 1000);
}

/* ---------------- RELATÓRIO ---------------- */
function textoRelatorio() {
  const d = new Date().toLocaleDateString('pt-BR');
  let t = `*RELATÓRIO DE ESTUDO – ${CONFIG.serieLonga.toUpperCase()}*\nMentoria Educacional Promover · ${CONFIG.area}\n\n👤 Aluno(a): ${S.aluno.nome || '(sem nome)'}\n🏫 Turma: ${S.aluno.turma || '-'}\n📅 Data: ${d}\n`;
  const revisar = [];
  MODS.forEach(m => {
    const mod = MODULOS[m], s = stats(m);
    t += `\n*${mod.titulo} – ${mod.sub}*\n`;
    if (!s.resp) { t += 'Ainda não respondeu.\n'; return; }
    t += `Respondidas: ${s.resp}/${s.total}\n✅ Acertos de 1ª: ${s.acertos}/${s.resp} (${s.pct}%)\n`;
    if (s.erros.length) {
      t += `❌ Erros (${s.erros.length}):\n`;
      s.erros.forEach(i => {
        const q = mod.questoes[i], r = S.r[m][i];
        t += `• Q${i + 1} (${mod.topicos[q.t]}): marcou ${LETRAS[r.p]}, certa ${LETRAS[q.c]}${r.u === q.c ? ' – corrigiu depois' : ''}\n`;
      });
    } else t += '🎉 Nenhum erro!\n';
    s.porTopico.forEach((p, k) => { if (p.n && p.ok / p.n < 0.7) revisar.push(`${mod.titulo}: ${mod.topicos[k]}`); });
  });
  if (revisar.length) t += `\n📌 *Preciso revisar:*\n${revisar.map(x => '• ' + x).join('\n')}\n`;
  return t;
}

function renderRelatorio() {
  const total = MODS.reduce((a, m) => { const s = stats(m); a.r += s.resp; a.a += s.acertos; a.t += s.total; return a; }, { r: 0, a: 0, t: 0 });
  const bloco = m => {
    const mod = MODULOS[m], s = stats(m);
    if (!s.resp) return `<section class="rbloco ${m}"><h2>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h2><p class="vazio">Você ainda não respondeu nenhuma questão. <a href="#${m}/q">Começar agora →</a></p></section>`;
    return `<section class="rbloco ${m}">
      <h2>${mod.emoji} ${mod.titulo}<small>${mod.sub}</small></h2>
      <div class="placar"><div class="nota"><b>${s.acertos}</b><span>de ${s.resp} respondidas</span></div><div class="nota"><b>${s.pct}%</b><span>acertos de 1ª</span></div><div class="nota"><b>${s.total - s.resp}</b><span>sem responder</span></div></div>
      <div class="barras">${mod.topicos.map((t, k) => { const p = s.porTopico[k], pc = p.n ? Math.round(p.ok / p.n * 100) : 0; return `<div class="bt"><span>${t}</span><div class="trilho"><div style="width:${pc}%;background:${!p.n ? '#ccc' : pc >= 70 ? '#2bb673' : pc >= 40 ? '#ffb000' : '#e5484d'}"></div></div><em>${p.n ? `${p.ok}/${p.n}` : '–'}</em>${p.n && pc < 70 ? `<a href="#${m}/t/${k}" class="rev no-print">revisar</a>` : ''}</div>`; }).join('')}</div>
      ${s.erros.length ? `<h3>❌ Questões que errei</h3><ol class="erros">${s.erros.map(i => {
        const q = mod.questoes[i], r = S.r[m][i];
        return `<li><div class="eh"><b>Questão ${i + 1}</b><span class="pill">${mod.topicos[q.t]}</span>${r.u === q.c ? '<span class="pill verde">corrigi depois ✔</span>' : ''}</div>
          <p class="eq">${strip(q.txt).slice(0, 170)}${strip(q.txt).length > 170 ? '…' : ''}</p>
          <p class="cmp"><span class="m">Marquei: <b>${LETRAS[r.p]}</b> ${q.ops[r.p]}</span><span class="c">Certa: <b>${LETRAS[q.c]}</b> ${q.ops[q.c]}</span></p>
          <details><summary>Ver resolução</summary><p>${q.exp}</p></details></li>`;
      }).join('')}</ol>` : '<p class="parabens">🎉 Nenhum erro nas questões respondidas!</p>'}
    </section>`;
  };
  const txt = textoRelatorio();
  app().innerHTML = header(`<a href="#" class="btn sm ghost">← Início</a>`) + `
    <section class="rel-capa">
      <p class="kicker">Relatório de erros · ${CONFIG.area} · ${CONFIG.serieLonga}</p>
      <h1>${S.aluno.nome ? esc(S.aluno.nome) : 'Aluno(a) sem nome'}</h1>
      <p>${S.aluno.turma ? 'Turma ' + esc(S.aluno.turma) + ' · ' : ''}${new Date().toLocaleDateString('pt-BR')} · ${total.r}/${total.t} questões respondidas · ${total.a} acertos de 1ª</p>
      <div class="aluno inline no-print"><label>Nome<input id="nome" value="${esc(S.aluno.nome)}" placeholder="Seu nome"></label><label>Turma<input id="turma" value="${esc(S.aluno.turma)}" placeholder="${CONFIG.serie} A"></label></div>
    </section>
    ${MODS.map(bloco).join('')}
    <section class="enviar no-print">
      <h2>💬 Enviar para o professor</h2>
      <p>O WhatsApp vai abrir com a mensagem pronta para <b>(85) 99262-1003</b>. É só tocar em enviar.</p>
      <pre class="previa">${esc(txt)}</pre>
      <div class="row"><a class="btn whats" id="wpp" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener">📲 Enviar pelo WhatsApp</a>
      <button class="btn ghost" id="copiar">📋 Copiar texto</button><button class="btn ghost" onclick="print()">🖨️ Imprimir / PDF</button></div>
      <p class="msg" id="cmsg"></p>
    </section>`;
  const upd = () => {
    save();
    const t = textoRelatorio();
    $('.previa').textContent = t;
    $('#wpp').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
    $('.rel-capa h1').textContent = S.aluno.nome || 'Aluno(a) sem nome';
  };
  $('#nome').oninput = e => { S.aluno.nome = e.target.value; upd(); };
  $('#turma').oninput = e => { S.aluno.turma = e.target.value; upd(); };
  $('#wpp').onclick = e => { upd(); if (!S.aluno.nome.trim()) { e.preventDefault(); $('#cmsg').innerHTML = '⚠️ Escreva seu nome lá em cima antes de enviar.'; $('#nome').focus(); } };
  $('#copiar').onclick = () => { navigator.clipboard.writeText(textoRelatorio()).then(() => $('#cmsg').textContent = '✅ Copiado! Cole no WhatsApp.', () => $('#cmsg').textContent = 'Não consegui copiar — selecione o texto acima.'); };
}

/* ---------------- ROTAS ---------------- */
function route() {
  const [mod, tab, arg] = (location.hash.slice(1) || '').split('/');
  if (MODULOS[mod]) renderModulo(mod, tab || 't', arg);
  else if (mod === 'relatorio') renderRelatorio();
  else renderHome();
  if (!(tab === 't' && arg !== undefined)) scrollTo(0, 0);
}
addEventListener('hashchange', route);
route();
