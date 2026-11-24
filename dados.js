/* =========================================================
   CONTEÚDO DO SITE — Mentoria Educacional Promover (6º Ano)
   História · Cap. 11 e 12: Da Antiguidade à Idade Média e a Alta Idade Média
   c = índice da correta (0=A,1=B,2=C,3=D)
   ========================================================= */
const CONFIG = { serie: '6º', serieLonga: '6º Ano', lsKey: 'promover_6ano_historia_v1', area: 'História' };

const MODULOS = {
  m1: {
    id: 'm1', titulo: 'História', sub: 'Cap. 11 e 12 · Da Antiguidade à Alta Idade Média', emoji: '🏛️',
    topicos: ['A crise do Império Romano e os povos germânicos', 'A divisão de 395 e o início da Idade Média', 'Idade das Trevas? A Alta Idade Média', 'Os francos e Carlos Magno'],
    questoes: [
      { t: 0, txt: 'A partir do século III d.C., o Império Romano mergulhou em uma profunda crise econômica, militar e política. A interrupção das grandes guerras de conquista afetou diretamente a economia romana porque:',
        ops: ['provocou a redução na oferta de pessoas escravizadas (principal mão de obra da época) e de metais preciosos, gerando queda na produção agrícola e inflação.', 'obrigou todos os imperadores a abolirem imediatamente os impostos cobrados nas províncias.', 'transformou todas as propriedades rurais em grandes indústrias têxteis mecanizadas.', 'eliminou completamente a necessidade de manter tropas nas fronteiras do norte da Europa.'], c: 0,
        dica: 'De onde vinham as pessoas escravizadas que trabalhavam nas fazendas romanas?',
        exp: 'Roma conseguia pessoas escravizadas e riquezas <b>nas guerras de conquista</b>. Quando as conquistas pararam, faltou mão de obra: a produção agrícola caiu, os alimentos ficaram mais caros (<b>inflação</b>) e o império arrecadou menos.' },
      { t: 0, txt: 'Na Antiguidade, os romanos utilizavam a palavra “bárbaros” para designar todos os povos estrangeiros que habitavam fora das fronteiras do império e não falavam latim nem seguiam os costumes romanos. Sobre as relações entre romanos e os chamados povos germânicos, é historicamente correto afirmar que:',
        ops: ['os germânicos formavam um único país centralizado e industrializado na África do Sul.', 'antes das grandes invasões, houve períodos de convivência pacífica, comércio e acordos pelos quais grupos germânicos defendiam fronteiras romanas como federados.', 'os povos germânicos nunca tiveram qualquer contato cultural ou comercial com os habitantes de Roma.', 'todos os povos germânicos falavam exclusivamente o idioma grego clássico e obedeciam ao Senado romano.'], c: 1,
        dica: 'Antes das invasões, romanos e germânicos só brigavam ou também negociavam?',
        exp: 'Durante séculos houve <b>comércio</b> e <b>acordos</b>: alguns grupos germânicos viraram <b>federados</b>, guardando as fronteiras romanas. As grandes invasões só vieram no final do século IV.' },
      { t: 0, fig: 'hunos', txt: 'No final do século IV d.C., o deslocamento de diversos povos germânicos para o interior das fronteiras do Império Romano intensificou-se drasticamente devido à pressão exercida pelo avanço violento de um povo nômade guerreiro vindo das estepes da Ásia Central. Esse povo era constituído pelos:',
        ops: ['fenícios.', 'hunos.', 'egípcios.', 'astecas.'], c: 1,
        dica: 'Veja o mapa animado do tópico 1: quem vem do leste empurrando os germânicos?',
        exp: 'Os <b>hunos</b>, povo nômade guerreiro da <b>Ásia Central</b>, avançaram sobre o território dos germânicos. Fugindo deles, visigodos, ostrogodos, vândalos e outros povos entraram no Império Romano.' },
      { t: 1, fig: 'divisao', txt: 'Em 395 d.C., buscando melhorar a administração e a defesa militar de um território gigantesco, o imperador <b>Teodósio</b> dividiu definitivamente o Império Romano em duas partes: Ocidente e Oriente. Comparando a trajetória histórica dessas duas metades após a divisão, constata-se que:',
        ops: ['o Império Romano do Ocidente enriqueceu rapidamente e conquistou toda a Ásia até o século XV.', 'o Império Romano do Oriente (com capital em Constantinopla) manteve intenso comércio e estabilidade por cerca de mil anos, enquanto o Ocidente entrou em colapso em 476 d.C.', 'ambas as metades desapareceram exatamente no mesmo dia em 395 d.C. sem deixar heranças culturais.', 'Constantinopla foi abandonada no século IV, tornando-se uma pequena aldeia sem importância comercial.'], c: 1,
        dica: 'Compare os dois cartões "Ocidente × Oriente" no tópico 2.',
        exp: 'O <b>Ocidente</b> (Roma, depois Ravena) estava ruralizado e enfraquecido e caiu em <b>476</b>. O <b>Oriente</b> (capital <b>Constantinopla</b>), rico e comercial, durou como Império Bizantino até <b>1453</b>, cerca de mil anos.' },
      { t: 1, txt: 'Durante a transição da Antiguidade para a Idade Média na Europa Ocidental (séculos IV e V), o enfraquecimento do comércio, o desabastecimento e a insegurança provocada pelas invasões geraram um intenso movimento demográfico e social caracterizado pelo:',
        ops: ['êxodo rural massivo, com milhões de camponeses abandonando as terras para morar em arranha-céus urbanos.', 'êxodo urbano (ruralização), levando moradores das cidades a buscarem abrigo e sustento nos grandes domínios rurais (vilas) sob o regime do colonato.', 'crescimento acelerado das exportações marítimas romanas para o continente americano.', 'fim imediato da agricultura e da criação de animais em toda a Europa Ocidental.'], c: 1,
        dica: 'As pessoas saíram da cidade para o campo, ou do campo para a cidade?',
        exp: 'Com saques e falta de comida nas cidades, as pessoas foram para o <b>campo</b>, procurando segurança nas grandes propriedades (<b>vilas</b>). Isso se chama <b>êxodo urbano</b> ou <b>ruralização</b>.' },
      { t: 1, txt: 'O sistema do <b>colonato</b>, que se difundiu nas grandes propriedades rurais romanas durante a crise do Império e serviu de base para o trabalho servil medieval, funcionava da seguinte maneira:',
        ops: ['camponeses livres empobrecidos e antigos escravizados fixavam-se nas terras de um grande proprietário, cultivando-as e entregando parte da colheita em troca de moradia e proteção militar.', 'todos os trabalhadores tornavam-se proprietários privados de terras e recebiam salários em ouro do imperador.', 'os grandes proprietários entregavam suas terras gratuitamente aos guerreiros hunos para evitar impostos.', 'o comércio de moedas de prata substituía totalmente qualquer forma de trabalho agrícola.'], c: 0,
        dica: 'Veja a ilustração da vila romana: o que o colono dá e o que ele recebe?',
        exp: 'O <b>colono</b> (camponês pobre ou antigo escravizado) trabalhava na terra do grande proprietário e entregava <b>parte da colheita</b>. Em troca, recebia <b>moradia e proteção</b>. Essa relação deu origem à <b>servidão</b> feudal.' },
      { t: 2, txt: 'Os historiadores costumam dividir a Idade Média (séculos V ao XV) em dois grandes momentos — <b>Alta Idade Média</b> e <b>Baixa Idade Média</b> — utilizando como marco inicial tradicional do período medieval:',
        ops: ['a fundação da cidade de Roma por Rômulo e Remo em 753 a.C.', 'a deposição do último imperador romano do Ocidente, Rômulo Augústulo, em 476 d.C.', 'a chegada das caravelas portuguesas ao litoral brasileiro em 1500.', 'a Revolução Francesa e a queda da Bastilha em 1789.'], c: 1,
        dica: 'Procure na linha do tempo o ano em que começa a Idade Média.',
        exp: 'Em <b>476 d.C.</b>, o chefe germânico <b>Odoacro</b> depôs <b>Rômulo Augústulo</b>, o último imperador romano do Ocidente. Esse ano marca o fim da Antiguidade e o início da <b>Idade Média</b>.' },
      { t: 2, txt: 'A partir do século XV, intelectuais do Renascimento passaram a chamar a Idade Média de “Idade das Trevas”, expressão que ainda hoje aparece no senso comum. A Historiografia contemporânea critica e rejeita essa denominação porque ela:',
        ops: ['retrata de forma preconceituosa um período de mil anos como se fosse apenas atraso e ignorância, ocultando suas inovações técnicas, culturais, arquitetônicas e o surgimento das universidades.', 'comprova que durante toda a Idade Média não existiu nenhum livro, escola ou produção artística na Europa.', 'refere-se exclusivamente aos eclipses solares ocorridos na Grécia Antiga.', 'ignora que o Império Romano nunca existiu antes do século XV.'], c: 0,
        dica: 'Acenda a luz na ilustração "Idade das Trevas?" do tópico 3.',
        exp: '"Idade das Trevas" é um <b>apelido preconceituoso</b> criado no Renascimento. Na Idade Média surgiram as <b>universidades</b>, o <b>arado de ferro</b>, os <b>moinhos</b> e as catedrais <b>românicas e góticas</b>.' },
      { t: 2, txt: 'A formação da sociedade medieval europeia durante a <b>Alta Idade Média (séculos V–X)</b> resultou da fusão gradual entre elementos culturais romanos e germânicos. Assinale a alternativa que apresenta corretamente uma contribuição de origem <b>romana</b> e uma de origem <b>germânica</b>, respectivamente:',
        ops: ['O direito consuetudinário oral (romana) e o latim clássico escrito (germânica).', 'A língua latina e o Cristianismo organizado pela Igreja Católica (romana) e os laços de fidelidade pessoal entre chefes e guerreiros — comitatus (germânica).', 'A economia industrial urbana (romana) e a democracia direta ateniense (germânica).', 'O islamismo monoteísta (romana) e o sistema de cidades-Estado gregas (germânica).'], c: 1,
        dica: 'Jogue "Romana ou germânica?" no tópico 3.',
        exp: '<b>Romanas</b>: latim, leis escritas e o Cristianismo organizado pela Igreja. <b>Germânicas</b>: leis baseadas nos costumes orais, tradições guerreiras e o <b>comitatus</b> (fidelidade entre chefe e guerreiros).' },
      { t: 2, txt: 'Com a fragmentação do poder político dos reis e imperadores na Europa Ocidental após a queda de Roma, uma instituição destacou-se por preservar a escrita, manter escolas e bibliotecas nos mosteiros e exercer forte influência espiritual, cultural e econômica sobre toda a sociedade medieval. Essa instituição foi a:',
        ops: ['Assembleia Popular de Esparta.', 'Igreja Católica Apostólica Romana.', 'Companhia das Índias Orientais.', 'Liga de Delos.'], c: 1,
        dica: 'Quem copiava livros nos mosteiros?',
        exp: 'A <b>Igreja Católica</b> virou a instituição mais poderosa da Europa Ocidental: nos <b>mosteiros</b>, os monges guardavam e copiavam livros em latim, e a Igreja apoiava os reis cristãos.' },
      { t: 2, txt: 'Além das transformações na Europa cristã, a <b>Alta Idade Média</b> foi marcada pelo surgimento e rápida expansão do <b>Islamismo</b> a partir do século VII na Península Arábica. No século VIII, os exércitos muçulmanos atravessaram o estreito de Gibraltar, conquistaram grande parte da Península Ibérica e só tiveram seu avanço contido na Europa Ocidental pelos francos na:',
        ops: ['Batalha de Poitiers (732), liderada por Carlos Martel.', 'Guerra do Peloponeso, comandada por Péricles.', 'Batalha de Waterloo, liderada por Napoleão Bonaparte.', 'Guerra de Troia, comandada por Alexandre Magno.'], c: 0,
        dica: 'Veja o mapa da expansão islâmica: onde as setas param?',
        exp: 'Depois de chegar à Península Ibérica em <b>711</b>, o avanço muçulmano foi detido pelos francos na <b>Batalha de Poitiers (732)</b>, comandada por <b>Carlos Martel</b>.' },
      { t: 3, txt: 'Entre os vários <b>reinos romano-germânicos</b> formados na Europa Ocidental a partir do século V (como visigodos, ostrogodos, vândalos e anglos), o mais duradouro e poderoso foi o <b>Reino dos Francos</b>. Um passo decisivo para o fortalecimento político desse reino durante a dinastia Merovíngia foi:',
        ops: ['a conversão do rei Clóvis ao catolicismo, estabelecendo uma sólida aliança entre a monarquia franca e a Igreja Católica.', 'a destruição de todas as igrejas cristãs da Gália e o retorno ao politeísmo egípcio.', 'a transferência da capital dos francos para a cidade de Pequim, na China.', 'a abolição completa da propriedade rural e dos títulos de nobreza no reino.'], c: 0,
        dica: 'Veja a "árvore da família real franca" no tópico 4.',
        exp: '<b>Clóvis</b> unificou os francos na Gália e se <b>converteu ao catolicismo</b>. Assim ganhou o apoio da Igreja e da população galo-romana.' },
      { t: 3, txt: 'No ano <b>800 d.C.</b>, após expandir as fronteiras do Reino dos Francos por grande parte da Europa Ocidental e Central, o rei <b>Carlos Magno</b> foi coroado pelo papa Leão III como <b>Imperador do Novo Império Romano do Ocidente</b>. Essa coroação simbolizou:',
        ops: ['o rompimento definitivo entre os reis francos e o papado romano.', 'a estreita aliança política e religiosa entre o poder imperial carolíngio e a Igreja Católica, buscando restaurar a unidade cristã no Ocidente.', 'o fim imediato do feudalismo e o retorno da escravidão antiga nas cidades romanas.', 'a submissão completa dos francos ao domínio dos imperadores bizantinos.'], c: 1,
        dica: 'Quem colocou a coroa na cabeça de Carlos Magno?',
        exp: 'Ao ser coroado pelo <b>papa Leão III</b> no Natal de <b>800</b>, Carlos Magno mostrou a <b>aliança entre o imperador e a Igreja</b>, com a ideia de reconstruir um império cristão no Ocidente.' },
      { t: 3, txt: 'Para governar e defender um território extenso sem contar com uma rede moderna de comunicações, <b>Carlos Magno</b> dividiu seu império em unidades administrativas menores e incentivou a educação nos mosteiros (<b>Renascimento Carolíngio</b>). Sobre essa organização administrativa carolíngia, afirma-se corretamente que:',
        ops: ['as regiões internas eram administradas por <b>condes</b> (condados) e as zonas militarizadas de fronteira por <b>marqueses</b> (marcas), fiscalizados pelos <i>missi dominici</i>.', 'todas as províncias eram governadas diretamente por assembleias de servos camponeses eleitos anualmente.', 'Carlos Magno proibiu a cópia de manuscritos antigos e fechou todas as escolas monásticas.', 'o império era governado por presidentes escolhidos pelo voto universal a cada quatro anos.'], c: 0,
        dica: 'Toque nas partes do mapa administrativo de Carlos Magno.',
        exp: '<b>Condados</b> eram governados por <b>condes</b>; as <b>marcas</b> (regiões de fronteira) por <b>marqueses</b>; também havia <b>ducados</b>. Os <b><i>missi dominici</i></b> ("enviados do senhor") fiscalizavam tudo.' },
      { t: 3, fig: 'verdun', txt: 'Após a morte de Carlos Magno e o governo de seu filho Luís, o Piedoso, disputas sucessórias entre seus três netos levaram à assinatura do <b>Tratado de Verdun (843)</b>, que dividiu o Império Carolíngio em três reinos. A principal consequência política dessa fragmentação foi:',
        ops: ['o fortalecimento imediato do poder absoluto dos reis sobre todos os nobres europeus.', 'o enfraquecimento do poder central monárquico e o fortalecimento da autonomia local dos senhores feudais, consolidando o feudalismo na Europa Ocidental.', 'a reunificação completa de todo o antigo Império Romano sob o comando de Rômulo Augústulo.', 'o fim das invasões de vikings, magiares e muçulmanos na Europa medieval.'], c: 1,
        dica: 'Divida o império no mapa de Verdun e veja o que aparece no território.',
        exp: 'Dividido em três, o poder dos reis <b>enfraqueceu</b>. A defesa e a justiça passaram para os <b>senhores locais</b> nos seus castelos, o que fortaleceu o <b>feudalismo</b>.' }
    ]
  }
};

/* ---------------- TEORIA ---------------- */
const TEORIA = {
  m1: [
    () => `
      <p class="lead">Roma chegou ao seu <b>tamanho máximo</b> em volta do Mar Mediterrâneo. Ficou difícil defender fronteiras tão grandes, cobrar impostos e controlar as disputas entre os generais.</p>
      <h4 class="no-top">🔗 A crise do século III: uma coisa leva à outra</h4>
      <div data-w="domino"></div>
      <h4>🗺️ Mapa animado: os povos germânicos e os hunos</h4>
      <div data-w="mapa"></div>
      <div class="duo">
        <div class="box"><b>🛡️ Quem eram os "bárbaros"?</b><p>Para os romanos, eram <b>todos os estrangeiros</b> que viviam fora das fronteiras e não falavam latim. Entre eles estavam os <b>povos germânicos</b>: visigodos, ostrogodos, vândalos, francos, anglos e saxões.</p></div>
        <div class="box"><b>🤝 Nem sempre houve guerra</b><p>Durante séculos houve <b>comércio</b> e <b>acordos</b>. Alguns grupos germânicos viraram <b>federados</b> e guardavam as fronteiras para Roma.</p></div>
      </div>
      <div class="alerta">🏹 No <b>final do século IV</b>, os <b>hunos</b> (povo nômade guerreiro da Ásia Central) atacaram os germânicos. Fugindo deles, <b>milhões</b> de germânicos atravessaram as fronteiras romanas em busca de terra e abrigo.</div>`,
    () => `
      <p class="lead">Em <b>395 d.C.</b>, para facilitar o governo e a defesa, o imperador <b>Teodósio</b> dividiu o império em duas partes, de forma definitiva.</p>
      <div class="ladoalado">
        <div class="lado oc"><span class="selo-l">🏛️</span><h3>Império Romano do Ocidente</h3>
          <p><b>Capital:</b> Roma (depois Ravena)</p><p><b>Economia:</b> fraca, ruralização e pouco comércio</p>
          <p class="destino">💥 Sofreu invasões germânicas e <b>caiu em 476 d.C.</b>, dividido em reinos</p></div>
        <div class="vs">VS</div>
        <div class="lado or"><span class="selo-l">⛪</span><h3>Império Romano do Oriente <small>(Bizantino)</small></h3>
          <p><b>Capital:</b> Constantinopla (antiga Bizâncio)</p><p><b>Economia:</b> rico, cheio de cidades e com muito comércio marítimo</p>
          <p class="destino">🛡️ Resistiu e durou <b>cerca de mil anos</b>, até os turcos o conquistarem em <b>1453</b></p></div>
      </div>
      <h4>🏃 O êxodo urbano: da cidade para o campo</h4>
      <div data-w="exodo"></div>
      <h4>🌾 Como funcionava o colonato</h4>
      <div class="colonato">${SVG_VILA}</div>
      <p class="center">Esse acordo entre o <b>colono</b> e o <b>grande proprietário</b> foi a base do <b>feudalismo</b>, que veio depois.</p>
      <div class="queda"><span class="ano">476</span><div><b>O fim de Roma no Ocidente</b><p>O chefe germânico <b>Odoacro</b> depôs <b>Rômulo Augústulo</b>, o último imperador romano do Ocidente. Esse ano marca o <b>fim da Antiguidade</b> e o <b>início da Idade Média</b>.</p></div></div>`,
    () => `
      <p class="lead">A Idade Média durou <b>dez séculos</b> (do V ao XV). Ela se divide em <b>Alta Idade Média</b> (séculos V a X) e <b>Baixa Idade Média</b> (séculos XI a XV).</p>
      <div data-w="linha"></div>
      <h4>🕯️ Foi mesmo a "Idade das Trevas"?</h4>
      <div data-w="trevas"></div>
      <h4>🤝 A fusão romano-germânica</h4>
      <div class="fusao">
        <div class="f-lado ro"><b>🏛️ Herança romana</b><span>📜 Língua latina (origem do português!)</span><span>⚖️ Leis escritas</span><span>✝️ Cristianismo e Igreja</span><span>🏡 Grandes propriedades (vilas) e colonato</span></div>
        <div class="f-meio">➕<b>Europa medieval</b></div>
        <div class="f-lado ge"><b>🪓 Herança germânica</b><span>🗣️ Leis baseadas nos costumes orais (direito consuetudinário)</span><span>⚔️ Tradições guerreiras</span><span>🤝 Fidelidade entre chefe e guerreiros (comitatus)</span><span>🐄 Economia agropastoril</span></div>
      </div>
      <div data-w="herancas"></div>
      <h4>🏰 A sociedade feudal</h4>
      <div class="duo">
        <div class="box center">${SVG_PIRAMIDE}</div>
        <div class="box"><b>Uma sociedade em camadas (estamental)</b><p>Os <b>feudos</b> eram grandes propriedades rurais que produziam quase tudo de que precisavam (<b>autossuficientes</b>).</p><p>⛪ <b>Clero</b>: rezava · ⚔️ <b>Nobreza</b>: guerreava · 🌾 <b>Servos</b>: trabalhavam a terra.</p><p>Quem nascia numa camada quase nunca mudava de camada.</p>
          <p>A <b>Igreja Católica</b> era a instituição mais poderosa: nos <b>mosteiros</b>, os monges copiavam livros e mantinham escolas.</p></div>
      </div>
      <h4>☪️ A expansão do Islamismo</h4>
      <div data-w="islam"></div>`,
    () => `
      <p class="lead">Com o fim do Império do Ocidente, surgiram vários <b>reinos romano-germânicos</b>: <b>visigodos</b> (Península Ibérica), <b>ostrogodos</b> e depois <b>lombardos</b> (Itália), <b>anglos e saxões</b> (Britânia) e <b>francos</b> (Gália, atual França). Os francos formaram o reino mais duradouro e poderoso.</p>
      <div class="dinastia">
        <div class="rei"><i>👑</i><b>Clóvis</b><small>dinastia Merovíngia</small><p>Unificou a Gália e se <b>converteu ao catolicismo</b>: aliança com a Igreja.</p></div>
        <div class="rei"><i>⚔️</i><b>Carlos Martel</b><small>mordomo do palácio</small><p>Venceu os muçulmanos em <b>Poitiers (732)</b>.</p></div>
        <div class="rei"><i>🌱</i><b>Pepino, o Breve</b><small>filho de Carlos Martel</small><p>Começou a <b>dinastia Carolíngia</b>.</p></div>
        <div class="rei grande"><i>🦅</i><b>Carlos Magno</b><small>768–814 · filho de Pepino</small><p>Conquistou grande parte da Europa e foi <b>coroado imperador</b> pelo papa Leão III em <b>800</b>.</p></div>
      </div>
      <h4>👑 A coroação do ano 800</h4>
      <div class="coroa">${SVG_COROACAO}<p>No Natal de <b>800</b>, o <b>papa Leão III</b> coroou <b>Carlos Magno</b> "Imperador do Novo Império Romano do Ocidente". A cena mostra a <b>aliança</b> entre o poder do imperador e a Igreja Católica.</p></div>
      <h4>🗂️ Como Carlos Magno governava</h4>
      <div data-w="admin"></div>
      <div class="alerta">📚 <b>Renascimento Carolíngio</b>: Carlos Magno criou <b>escolas</b> junto aos mosteiros e catedrais e mandou <b>copiar livros antigos</b>.</div>
      <h4>✂️ O Tratado de Verdun (843)</h4>
      <div data-w="verdun"></div>`
  ]
};
