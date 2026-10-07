/**
 * ============================================================================
 * SYNAPSE MD — Assistente de Saúde Humanizado & Acessível
 * Foco: Pacientes, Idosos, Dificuldade Visual ou Motora, Mobile (iOS/Android)
 * ============================================================================
 */

// Estado da Aplicação
const PatientAppState = {
  currentView: 'home',
  fontSize: 'normal', // 'normal' | 'large' | 'xlarge'
  highContrast: false,
  autoSpeech: false,
  activeProblem: null,
  isRecording: false,
  chatMessages: [
    {
      sender: 'assistant',
      text: 'Olá! Meu nome é Sofia, sua assistente de saúde da Synapse MD. Como você está se sentindo hoje? Se preferir não digitar, você pode apertar os botões abaixo ou usar o microfone para falar comigo.',
      speech: 'Olá! Meu nome é Sofia, sua assistente de saúde da Synapse MD. Como você está se sentindo hoje? Se preferir não digitar, você pode usar os botões na tela ou o microfone para falar comigo.'
    }
  ],
  userMeds: [
    { name: 'Losartana Potássica 50mg', dose: '1 comprimido pela manhã', tip: 'Tomar com um copo de água, todos os dias no mesmo horário.', time: '08:00' },
    { name: 'Omeprazol 20mg', dose: '1 cápsula em jejum', tip: 'Tomar 30 minutos antes do café da manhã.', time: '07:30' },
    { name: 'Hidroclorotiazida 25mg', dose: '1 comprimido pela manhã', tip: 'Ajuda a eliminar líquido. É normal urinar mais nas primeiras horas.', time: '08:00' }
  ]
};

// Base de Dados de Problemas Específicos de Pacientes
const PATIENT_PROBLEMS = {
  coracao: {
    title: 'Coração e Pressão Alta',
    icon: '🫀',
    class: 'coracao',
    desc: 'Pressão alta, coração acelerado, pernas inchadas ou cansaço ao deitar.',
    promptInit: 'Estou com dúvidas sobre meu coração ou minha pressão arterial.',
    response: 'Compreendo sua preocupação com o coração e a pressão. Vamos cuidar disso juntos com calma:\n\n1. **Você mediu sua pressão hoje?** Se sim, sente dor de cabeça na nuca ou visão embaçada?\n2. **Está sentindo inchaço nos pés ou falta de ar quando se deita?**\n3. **Já tomou os remédios da pressão hoje?**\n\n*Atenção importante: Se você estiver sentindo um aperto forte no peito que se espalha para o braço ou queixo, ligue imediatamente para o SAMU no 192.*',
    options: [
      'Minha pressão deu alta na medição',
      'Estou com os pés e pernas inchados',
      'Sinto o coração bater rápido ou fora do ritmo',
      'Esqueci de tomar o remédio da pressão hoje'
    ]
  },
  respiracao: {
    title: 'Falta de Ar e Respiração',
    icon: '🫁',
    class: 'respiracao',
    desc: 'Cansaço no peito, chiado, dificuldade para puxar o ar ou tosse.',
    promptInit: 'Estou sentindo falta de ar ou chiado no peito.',
    response: 'Sentir falta de ar é desconfortável e dá ansiedade. Vamos ver o que podemos fazer agora:\n\n1. **Primeiro passo:** Sente-se confortavelmente, incline o tronco ligeiramente para a frente e apoie os braços nas pernas. Isso ajuda os pulmões a se abrirem.\n2. **Você tem bombinha de alívio (como Salbutamol)?** Se sim, usou nas últimas horas?\n3. **Você tem febre, catarro com cor escura ou dor aguda ao respirar fundo?**\n\n*Sinal de alerta: Se os lábios ou unhas estiverem roxos, ou for muito difícil falar frases completas, vá a um pronto-atendimento.*',
    options: [
      'Estou chiando e o peito está apertado',
      'A falta de ar piora quando me deito',
      'Tenho tosse e catarro há alguns dias',
      'Como usar a bombinha de forma correta?'
    ]
  },
  estomago: {
    title: 'Estômago, Azia e Refluxo',
    icon: '🔥',
    class: 'estomago',
    desc: 'Queimação que sobe para a garganta, dor na boca do estômago ou enjoo.',
    promptInit: 'Estou com queimação forte no estômago ou azia.',
    response: 'Azia e queimação são muito comuns e causam bastante incômodo. Veja orientações práticas que aliviam:\n\n1. **Não se deite logo após comer:** Espere pelo menos 2 horas antes de deitar ou tirar um cochilo.\n2. **Eleve a cabeceira da cama:** Usar um travesseiro extra ou elevar a cabeceira em 15cm impede que o ácido do estômago suba para a garganta durante a noite.\n3. **Evite alimentos que irritam:** Café forte, refrigerantes, frituras, chocolate e bebidas alcoólicas pioram a queimação.\n4. **Remédios de estômago (como Omeprazol):** Devem ser tomados de manhã, em jejum, cerca de 30 minutos antes do café.\n\n*Aviso: Se você estiver vomitando com sangue, fezes pretas como borra de café ou dificuldade para engolir a comida, consulte um médico com urgência.*',
    options: [
      'A queimação piora muito de noite',
      'Como devo tomar o remédio do estômago?',
      'O que posso comer para não piorar a azia?',
      'Sinto a comida voltando para a garganta'
    ]
  },
  remedios: {
    title: 'Dúvidas sobre Remédios',
    icon: '💊',
    class: 'remedios',
    desc: 'Esqueci de tomar o remédio, horários, tomar com comida ou efeitos colaterais.',
    promptInit: 'Tenho dúvidas sobre como tomar meus medicamentos.',
    response: 'Tomar os remédios corretamente faz toda a diferença para sua saúde. Qual é a sua dúvida principal?\n\n• **Se esqueceu de tomar:** Na maioria das vezes, se estiver perto da hora da próxima dose, não tome em dobro. Tome apenas a dose normal seguinte.\n• **Tomar com água:** Tome sempre com um copo cheio de água filtrada. Evite tomar remédios com leite, café, sucos cítricos ou refrigerante.\n• **Sentindo tontura ou enjoo?** Pode ser efeito temporário ou adaptação. Nunca pare de tomar remédios de pressão ou coração por conta própria sem falar com seu médico.',
    options: [
      'Esqueci de tomar o remédio hoje, o que faço?',
      'Posso tomar remédio em jejum ou precisa comer?',
      'Estou sentindo tontura após tomar o remédio',
      'Quero ver a lista dos meus remédios salvos'
    ]
  },
  dor_cabeca: {
    title: 'Dor de Cabeça e Tontura',
    icon: '🧠',
    class: 'dor-cabeca',
    desc: 'Sensação de cabeça pesada, tontura ao levantar ou visão turva.',
    promptInit: 'Estou sentindo dor de cabeça ou tontura.',
    response: 'Tonturas e dores de cabeça podem ter várias causas simples, como desidratação ou cansaço, mas merecem atenção:\n\n1. **Beba um copo d\'água e descanse:** Muitas dores melhoram com hidratação e repouso em local fresco e silencioso.\n2. **Tontura ao levantar rápido?** Isso pode ser uma queda momentânea da pressão. Levante-se sempre devagar, primeiro sentando na beira da cama por 1 minuto antes de ficar de pé.\n\n*Sinais de perigo imediato (Procure socorro rápido): Boca torta, fraqueza em um lado do corpo, fala enrolada ou a pior dor de cabeça da sua vida iniciada de repente.*',
    options: [
      'Sinto tontura quando fico em pé rápido',
      'Minha cabeça está pesada na parte de trás',
      'A dor começou de repente muito forte',
      'Pode ser por causa da pressão alta?'
    ]
  },
  urgente: {
    title: 'Quando ir ao Pronto-Socorro?',
    icon: '🚨',
    class: 'urgente',
    desc: 'Sinais claros de alarme para você e sua família saberem a hora certa.',
    promptInit: 'Quais são os sinais que exigem ir ao pronto-socorro agora?',
    response: 'Aqui está um guia simples e direto de **Sinais de Alerta Imediatos**:\n\n🚨 **Procure o Pronto-Socorro ou ligue 192 (SAMU) se houver:**\n\n1. **Dor ou aperto no peito:** Que aperta, queima ou irradia para o braço esquerdo, costas ou queixo.\n2. **Falta de ar grave e repentina:** Dificuldade para completar uma frase ou lábios azulados/roxos.\n3. **Sinais de Derrame (AVC):** Boca torta ao sorrir, braço que cai sem força ao levantar, fala enrolada ou confusa.\n4. **Perda de consciência ou desmaio.**\n5. **Vômito com sangue ou fezes escuras como carvão.**\n\nSe não tiver nenhum desses sinais graves, você pode relatar com calma o que está sentindo que eu te oriento no passo a passo.',
    options: [
      'Estou sentindo aperto no peito agora',
      'Não é tão grave, quero tirar uma dúvida leve',
      'Ligar para o SAMU 192 agora'
    ]
  }
};

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadSavedSettings();
  renderCurrentView();
  initVoiceRecognition();
});

// ============================================================================
// CONTROLE DE ACESSIBILIDADE (FONTE, CONTRASTE, VOZ)
// ============================================================================

function setFontSize(size) {
  PatientAppState.fontSize = size;
  document.body.classList.remove('font-large', 'font-xlarge');
  
  document.getElementById('btn-font-normal')?.classList.remove('active');
  document.getElementById('btn-font-large')?.classList.remove('active');
  document.getElementById('btn-font-xlarge')?.classList.remove('active');

  if (size === 'large') {
    document.body.classList.add('font-large');
    document.getElementById('btn-font-large')?.classList.add('active');
  } else if (size === 'xlarge') {
    document.body.classList.add('font-xlarge');
    document.getElementById('btn-font-xlarge')?.classList.add('active');
  } else {
    document.getElementById('btn-font-normal')?.classList.add('active');
  }

  saveSettings();
}

function toggleHighContrast() {
  PatientAppState.highContrast = !PatientAppState.highContrast;
  document.body.classList.toggle('high-contrast', PatientAppState.highContrast);
  document.getElementById('btn-contrast-toggle')?.classList.toggle('active', PatientAppState.highContrast);
  saveSettings();
}

function toggleAutoSpeech() {
  PatientAppState.autoSpeech = !PatientAppState.autoSpeech;
  const btn = document.getElementById('btn-speech-toggle');
  const icon = document.getElementById('speech-icon');
  
  if (PatientAppState.autoSpeech) {
    btn?.classList.add('active');
    if (icon) icon.innerText = '🔊';
    speakText('Leitura por voz ativada. As mensagens agora serão lidas para você.');
  } else {
    btn?.classList.remove('active');
    if (icon) icon.innerText = '🔈';
    window.speechSynthesis?.cancel();
  }
  saveSettings();
}

// Leitura em Voz Alta com Fala Humana Acolhedora
function speakText(text) {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel(); // Cancela falas anteriores
  const cleanText = text.replace(/[*#•🚨🫀🫁🔥💊🧠]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95; // Leitura um pouco mais calma, ideal para idosos
  utterance.pitch = 1.0;

  // Busca voz feminina natural em português se disponível
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR'));
  if (ptVoice) utterance.voice = ptVoice;

  window.speechSynthesis.speak(utterance);
}

// Reconhecimento de Fala (Microfone) para Dificuldades Motoras/Visão
let recognition = null;
function initVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    PatientAppState.isRecording = true;
    updateMicButtonUI();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('chat-text-input-field');
    if (input) {
      input.value = transcript;
      handleSendMessage();
    }
  };

  recognition.onerror = () => {
    PatientAppState.isRecording = false;
    updateMicButtonUI();
  };

  recognition.onend = () => {
    PatientAppState.isRecording = false;
    updateMicButtonUI();
  };
}

function toggleVoiceInput() {
  if (!recognition) {
    alert('Seu navegador não suporta microfone direto. Você pode digitar sua mensagem no campo de texto.');
    return;
  }

  if (PatientAppState.isRecording) {
    recognition.stop();
  } else {
    try {
      recognition.start();
    } catch (e) {
      console.log('Erro ao iniciar microfone:', e);
    }
  }
}

function updateMicButtonUI() {
  const btn = document.getElementById('mic-record-btn');
  if (btn) {
    btn.classList.toggle('recording', PatientAppState.isRecording);
    btn.title = PatientAppState.isRecording ? 'Gravando sua voz... Fale agora' : 'Aperte para falar';
  }
}

// ============================================================================
// NAVEGAÇÃO ENTRE TELAS (MOBILE BOTTOM NAV & TABS)
// ============================================================================

function switchView(viewName) {
  PatientAppState.currentView = viewName;

  document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`nav-btn-${viewName}`)?.classList.add('active');

  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentView() {
  const root = document.getElementById('app-view-root');
  if (!root) return;

  switch (PatientAppState.currentView) {
    case 'home':
      renderHomeView(root);
      break;
    case 'chat':
      renderChatView(root);
      break;
    case 'meds':
      renderMedsView(root);
      break;
    case 'emergency':
      renderEmergencyView(root);
      break;
    default:
      renderHomeView(root);
  }
}

// ============================================================================
// TELA 1: INÍCIO (SELEÇÃO DE PROBLEMAS ESPECÍFICOS)
// ============================================================================

function renderHomeView(container) {
  container.innerHTML = `
    <!-- Cartão Acolhedor de Boas-Vindas -->
    <div class="welcome-card">
      <h2 class="welcome-title">Olá! O que está acontecendo com você hoje?</h2>
      <p class="welcome-desc">
        Toque no botão que melhor descreve o que você está sentindo. Nossa assistente vai te ouvir e orientar passo a passo, com calma e palavras simples.
      </p>
    </div>

    <!-- Grandes Cartões de Toque (À Prova de Erro para Idosos e Tremores) -->
    <h3 class="section-title">
      <span>🩺</span> Escolha o que você está sentindo:
    </h3>

    <div class="problems-grid" role="list">
      ${Object.entries(PATIENT_PROBLEMS).map(([key, item]) => `
        <button 
          class="problem-card ${item.class}" 
          onclick="selectProblemAndOpenChat('${key}')"
          role="listitem"
          aria-label="${item.title}: ${item.desc}"
        >
          <div class="problem-card-icon" aria-hidden="true">${item.icon}</div>
          <div class="problem-card-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
          <span class="problem-card-chevron" aria-hidden="true">›</span>
        </button>
      `).join('')}
    </div>

    <!-- Atalho Rápido para Conversa Livre -->
    <div style="background:#ffffff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; text-align:center; box-shadow:var(--shadow-card);">
      <h4 style="font-size:1.05em; font-weight:800; color:var(--text-main); margin-bottom:4px;">
        Prefere fazer uma pergunta diferente?
      </h4>
      <p style="font-size:0.86em; color:var(--text-muted); margin-bottom:14px;">
        Você pode conversar livremente sobre qualquer remédio, sintoma ou exame.
      </p>
      <button class="send-human-btn" style="margin:0 auto; width:100%; max-width:320px; justify-content:center;" onclick="switchView('chat')">
        💬 Conversar com a Assistente
      </button>
    </div>
  `;
}

function selectProblemAndOpenChat(problemKey) {
  const problem = PATIENT_PROBLEMS[problemKey];
  if (!problem) return;

  PatientAppState.activeProblem = problemKey;

  // Adiciona a pergunta do paciente e a resposta acolhedora especializada
  PatientAppState.chatMessages.push({
    sender: 'user',
    text: problem.promptInit
  });

  PatientAppState.chatMessages.push({
    sender: 'assistant',
    text: problem.response,
    speech: problem.response,
    options: problem.options
  });

  switchView('chat');

  if (PatientAppState.autoSpeech) {
    speakText(problem.response);
  }
}

// ============================================================================
// TELA 2: CONVERSAR COM O ASSISTENTE (CHAT HUMANIZADO)
// ============================================================================

function renderChatView(container) {
  container.innerHTML = `
    <div class="chat-container-human">
      <div class="chat-header-bar">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="a11y-btn" style="min-width:34px; padding:4px 8px; font-size:0.82em;" onclick="switchView('home')" title="Voltar ao início">
            ← Voltar
          </button>
          <div class="chat-assistant-info">
            <div class="chat-avatar-small" aria-hidden="true">👩‍⚕️</div>
            <div>
              <div style="font-size:0.95em; font-weight:800; color:var(--text-main); line-height:1.2;">Sofia</div>
              <div style="font-size:0.75em; color:var(--text-muted);">Assistente Synapse</div>
            </div>
          </div>
        </div>

        <button 
          class="speech-audio-btn" 
          onclick="toggleAutoSpeech()"
          title="Alternar leitura automática"
          style="margin-top:0;"
        >
          ${PatientAppState.autoSpeech ? '🔊 Voz' : '🔈 Voz'}
        </button>
      </div>

      <!-- Fluxo de Mensagens -->
      <div class="chat-stream-box" id="chat-stream-scroll">
        ${renderChatMessagesHTML()}
      </div>

      <!-- Barra de Entrada com Texto e Microfone -->
      <div class="chat-input-container">
        <button 
          class="mic-btn ${PatientAppState.isRecording ? 'recording' : ''}" 
          id="mic-record-btn" 
          onclick="toggleVoiceInput()"
          title="Aperte para falar sua dúvida"
          aria-label="Falar mensagem com o microfone"
        >
          🎙️
        </button>

        <input 
          type="text" 
          class="chat-text-input" 
          id="chat-text-input-field" 
          placeholder="Digite sua dúvida com calma aqui..." 
          aria-label="Campo de mensagem"
          onkeydown="if(event.key === 'Enter') handleSendMessage();"
        >

        <button 
          class="send-human-btn" 
          onclick="handleSendMessage()"
          aria-label="Enviar mensagem"
        >
          <span>Enviar</span> ➔
        </button>
      </div>
    </div>
  `;

  scrollChatToBottom();
}

function renderChatMessagesHTML() {
  return PatientAppState.chatMessages.map((msg, index) => {
    if (msg.sender === 'user') {
      return `
        <div class="chat-bubble-wrap user">
          <div class="chat-bubble">${escapeHtml(msg.text)}</div>
        </div>
      `;
    }

    // Assistente
    const optionsHtml = msg.options && msg.options.length > 0 ? `
      <div class="quick-options-row">
        ${msg.options.map(opt => `
          <button class="quick-opt-btn" onclick="sendQuickAnswer('${escapeHtml(opt)}')">
            ${escapeHtml(opt)}
          </button>
        `).join('')}
      </div>
    ` : '';

    return `
      <div class="chat-bubble-wrap assistant">
        <div class="chat-bubble">
          <div>${msg.text.replace(/\n/g, '<br>')}</div>
          
          <button class="speech-audio-btn" onclick="speakText('${escapeForJs(msg.text)}')">
            🔊 Ouvir esta orientação
          </button>
        </div>
        ${optionsHtml}
      </div>
    `;
  }).join('');
}

function sendQuickAnswer(answerText) {
  const input = document.getElementById('chat-text-input-field');
  if (input) {
    input.value = answerText;
    handleSendMessage();
  }
}

function handleSendMessage() {
  const input = document.getElementById('chat-text-input-field');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  input.value = '';

  PatientAppState.chatMessages.push({
    sender: 'user',
    text: userText
  });

  const stream = document.getElementById('chat-stream-scroll');
  if (stream) {
    stream.innerHTML = renderChatMessagesHTML();
    scrollChatToBottom();
  }

  // Gera resposta humanizada e acolhedora
  setTimeout(() => {
    generateEmpatheticPatientResponse(userText);
  }, 600);
}

function generateEmpatheticPatientResponse(userText) {
  const lower = userText.toLowerCase();
  let reply = '';
  let options = [];

  // Verificação de Sinais de Alerta Imediatos
  if (lower.includes('aperto no peito') || lower.includes('dor no peito') || lower.includes('braço esquerdo') || lower.includes('boca torta')) {
    reply = '🚨 **Atenção Imediata:** Os sintomas que você descreveu podem indicar uma urgência cardíaca ou neurológica.\n\nPor favor, **não fique sozinho** e procure ajuda agora mesmo: peça para alguém te levar ao pronto-socorro mais próximo ou **ligue para o SAMU no 192**.\n\nFique sentado com calma, respire devagar e evite fazer qualquer esforço físico.';
    options = ['📞 Ligar para o SAMU 192 agora', 'Não é grave, foi só um exemplo'];
  } else if (lower.includes('pressão') || lower.includes('alta') || lower.includes('pés inchados') || lower.includes('pernas inchadas')) {
    reply = 'Entendido sobre a pressão e o inchaço. Se sua pressão estiver um pouco elevada hoje, siga estes passos seguros:\n\n1. Sente-se em uma cadeira confortável, com os pés no chão e as costas apoiadas, e descanse por 15 minutos em silêncio.\n2. Meça novamente a pressão após esse descanso.\n3. Se você esqueceu de tomar o remédio da manhã, tome-o com água agora.\n4. Para o inchaço nas pernas, coloque as pernas para cima (apoiadas em almofadas) por 20 minutos no final do dia.\n\n*Se a pressão estiver acima de 180 por 110 mmHg ou você sentir dor de cabeça forte e visão turva, procure atendimento médico.*';
    options = ['Vou medir novamente em repouso', 'Já tomei o remédio da pressão hoje'];
  } else if (lower.includes('falta de ar') || lower.includes('chiado') || lower.includes('tosse') || lower.includes('pulmão')) {
    reply = 'Para a respiração:\n\n1. Fique sentado ereto ou ligeiramente inclinado para a frente com os cotovelos apoiados sobre uma mesa. Isso relaxa os músculos do pescoço e tórax.\n2. Respire pelo nariz contando até 2 e solte o ar devagar pela boca entreaberta contando até 4.\n3. Se você usa bombinha prescrita pelo seu médico, use com o espaçador conforme a receita.\n\nComo está sua respiração agora? Consegue falar normalmente?';
    options = ['Consigo falar, mas ainda cansa', 'Melhorou um pouco sentado'];
  } else if (lower.includes('azia') || lower.includes('queimação') || lower.includes('estômago') || lower.includes('refluxo')) {
    reply = 'A queimação no estômago melhora muito com cuidados na rotina:\n\n1. Não deite depois das refeições (espere 2 a 3 horas).\n2. Beba água em pequenos goles ao longo do dia, mas evite grandes volumes de líquido durante o almoço ou jantar.\n3. Evite alimentos muito gordurosos, molho de tomate, café preto e pimenta hoje.\n\nVocê toma algum protetor de estômago como Omeprazol ou Pantoprazol?';
    options = ['Tomo Omeprazol pela manhã', 'Não tomo nenhum remédio de estômago'];
  } else if (lower.includes('esqueci') && lower.includes('remédio')) {
    reply = 'Esquecer o remédio acontece com frequência. A regra de ouro é:\n\n• **Nunca tome dois comprimidos juntos para compensar o esquecimento**, pois isso pode fazer sua pressão cair demais ou causar mal-estar.\n• Se lembrou poucas horas depois, pode tomar o comprimido esquecido.\n• Se já estiver perto da hora da próxima dose, pule a dose esquecida e tome apenas a próxima no horário habitual.';
    options = ['Entendi, vou tomar agora', 'Vou esperar o horário de amanhã'];
  } else {
    reply = `Recebi sua mensagem com atenção. Para que eu possa te ajudar da melhor maneira:\n\nIsso começou hoje ou já faz alguns dias? Você está sentindo alguma dor ou febre no momento?\n\nLembre-se: estou aqui para te orientar, mas se sentir qualquer coisa muito forte ou incomum, procure seu posto de saúde ou médico de confiança.`;
    options = ['Começou hoje', 'Já sinto há alguns dias', 'Não sinto dor, só dúvida'];
  }

  PatientAppState.chatMessages.push({
    sender: 'assistant',
    text: reply,
    speech: reply,
    options: options
  });

  const stream = document.getElementById('chat-stream-scroll');
  if (stream) {
    stream.innerHTML = renderChatMessagesHTML();
    scrollChatToBottom();
  }

  if (PatientAppState.autoSpeech) {
    speakText(reply);
  }
}

function scrollChatToBottom() {
  const stream = document.getElementById('chat-stream-scroll');
  if (stream) stream.scrollTop = stream.scrollHeight;
}

// ============================================================================
// TELA 3: MEUS REMÉDIOS & LEMBRETES VISUAIS
// ============================================================================

function renderMedsView(container) {
  container.innerHTML = `
    <div>
      <div class="welcome-card">
        <h2 class="welcome-title">💊 Seus Remédios Diários</h2>
        <p class="welcome-desc">
          Aqui estão seus remédios cadastrados com horários e orientações de como tomar com segurança.
        </p>
      </div>

      <div class="meds-card-list">
        ${PatientAppState.userMeds.map(med => `
          <div class="med-card">
            <div>
              <div class="med-title">${med.name}</div>
              <div style="font-size:0.95em; color:var(--text-main); font-weight:600; margin-top:2px;">
                Dose: ${med.dose}
              </div>
              <div class="med-instructions">💡 ${med.tip}</div>
            </div>
            <div class="med-time-tag">⏰ ${med.time}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top:24px; text-align:center;">
        <button class="a11y-btn" style="min-height:50px; padding:12px 24px; border-radius:var(--radius-full);" onclick="addCustomMedPrompt()">
          ➕ Adicionar Outro Remédio à Lista
        </button>
      </div>
    </div>
  `;
}

function addCustomMedPrompt() {
  const name = prompt('Nome do remédio (ex: Dipirona 500mg):');
  if (!name) return;
  const time = prompt('Horário em que você costuma tomar (ex: 08:00):', '08:00') || '08:00';
  const dose = prompt('Como tomar (ex: 1 comprimido após o almoço):', '1 comprimido') || '1 comprimido';

  PatientAppState.userMeds.push({
    name: name,
    dose: dose,
    tip: 'Tomar com água conforme prescrito pelo seu médico.',
    time: time
  });

  saveSettings();
  renderCurrentView();
  alert(`Remédio ${name} adicionado com sucesso à sua lista!`);
}

// ============================================================================
// TELA 4: SINAIS DE ALERTA & QUANDO IR AO PRONTO-SOCORRO
// ============================================================================

function renderEmergencyView(container) {
  container.innerHTML = `
    <div>
      <div style="background:var(--bg-soft-rose); border:2px solid var(--danger); border-radius:var(--radius-lg); padding:24px; margin-bottom:20px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
          <span style="font-size:32px;">🚨</span>
          <h2 style="font-size:1.35em; font-weight:800; color:var(--danger); line-height:1.2;">
            Quando Ir Imediatamente ao Pronto-Socorro
          </h2>
        </div>
        <p style="font-size:0.98em; color:#881337; line-height:1.6;">
          Se você ou alguém próximo apresentar qualquer um dos sinais abaixo, não espere. Procure atendimento de urgência ou ligue para o 192.
        </p>
        <div style="margin-top:16px;">
          <a href="tel:192" class="emergency-btn" style="width:100%; justify-content:center; font-size:1.1em; padding:14px;">
            📞 LIGAR AGORA PARA O SAMU (192)
          </a>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:14px;">
        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:6px solid var(--danger); border-radius:var(--radius-md); padding:18px 20px;">
          <h3 style="font-size:1.1em; font-weight:800; color:var(--text-main); margin-bottom:6px;">
            1. Dor no Peito em Aperto ou Queimação
          </h3>
          <p style="font-size:0.92em; color:var(--text-muted);">
            Dor intensa no peito que dura mais de 10 minutos, principalmente se espalhar para o braço esquerdo, costas, queixo ou vier com suor frio.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:6px solid var(--danger); border-radius:var(--radius-md); padding:18px 20px;">
          <h3 style="font-size:1.1em; font-weight:800; color:var(--text-main); margin-bottom:6px;">
            2. Sinais de Alerta para AVC (Derrame)
          </h3>
          <p style="font-size:0.92em; color:var(--text-muted);">
            Boca torta ao sorrir, perda de força em um braço ou perna de repente, fala enrolada ou dificuldade de entender o que os outros dizem.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:6px solid var(--danger); border-radius:var(--radius-md); padding:18px 20px;">
          <h3 style="font-size:1.1em; font-weight:800; color:var(--text-main); margin-bottom:6px;">
            3. Falta de Ar Grave
          </h3>
          <p style="font-size:0.92em; color:var(--text-muted);">
            Sensação de sufoco intenso, incapacidade de falar frases inteiras sem parar para respirar, lábios arroxeados ou confusão mental.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:6px solid var(--danger); border-radius:var(--radius-md); padding:18px 20px;">
          <h3 style="font-size:1.1em; font-weight:800; color:var(--text-main); margin-bottom:6px;">
            4. Sangramentos Importantes ou Desmaios
          </h3>
          <p style="font-size:0.92em; color:var(--text-muted);">
            Vômito com sangue, fezes escuras e pastosas (com cheiro forte), desmaios com perda total dos sentidos ou convulsões.
          </p>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// PERSISTÊNCIA EM LOCALSTORAGE & UTILITÁRIOS
// ============================================================================

function saveSettings() {
  try {
    const data = {
      fontSize: PatientAppState.fontSize,
      highContrast: PatientAppState.highContrast,
      autoSpeech: PatientAppState.autoSpeech,
      userMeds: PatientAppState.userMeds
    };
    localStorage.setItem('SYNAPSE_PATIENT_SETTINGS_V1', JSON.stringify(data));
  } catch (e) {}
}

function loadSavedSettings() {
  try {
    const saved = localStorage.getItem('SYNAPSE_PATIENT_SETTINGS_V1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.fontSize) setFontSize(parsed.fontSize);
      if (parsed.highContrast) {
        PatientAppState.highContrast = false;
        toggleHighContrast();
      }
      if (parsed.autoSpeech) {
        PatientAppState.autoSpeech = false;
        toggleAutoSpeech();
      }
      if (parsed.userMeds) PatientAppState.userMeds = parsed.userMeds;
    }
  } catch (e) {}
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function escapeForJs(str) {
  if (!str) return '';
  return str.replace(/['"\\]/g, ' ').replace(/\n/g, ' ');
}
