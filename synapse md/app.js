/**
 * ============================================================================
 * SYNAPSE MD — Assistente de Saúde Humanizado & Acessível
 * Ícones Neutros | Fonte Escalável | Alto Contraste Limpo | Diálogos Rápidos
 * ============================================================================
 */

// Biblioteca de Ícones Neutros em SVG
const NEUTRAL_ICONS = {
  heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  lungs: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M12 4c-3.5 0-6 2.5-6 6 0 3 1.5 6 3 8 1 1.5 3 2 3 2"/><path d="M12 4c3.5 0 6 2.5 6 6 0 3-1.5 6-3 8-1 1.5-3 2-3 2"/></svg>`,
  stomach: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4a3 3 0 0 0-3 3v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V7a3 3 0 0 0-6 0c0 7 4 13 11 13 5 0 7-4 7-9V7a3 3 0 0 0-1-3Z"/></svg>`,
  pill: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04ZM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></svg>`,
  alertShield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  stethoscope: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
  clock: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  info: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  audio: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  mic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  assistantShield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="10" r="3"/></svg>`
};

// Diálogos Pré-Prontos para Facilitar a Vida do Paciente
const PRESET_DIALOGUES = [
  { label: 'Pressão deu 15 por 9', text: 'Minha pressão deu 15 por 9 agora na medição. O que devo fazer?' },
  { label: 'Esqueci o remédio da manhã', text: 'Esqueci de tomar meu remédio de pressão pela manhã, posso tomar agora?' },
  { label: 'Azia forte após comer', text: 'Estou sentindo uma queimação forte no estômago que sobe para o peito depois de comer.' },
  { label: 'Falta de ar ao deitar', text: 'Estou sentindo falta de ar quando me deito na cama. O que pode ser?' },
  { label: 'Como medir a pressão em casa', text: 'Qual é o jeito correto de medir a pressão arterial em casa?' },
  { label: 'Dor de cabeça na nuca', text: 'Estou com dor de cabeça pesada na nuca. Devo me preocupar?' },
  { label: 'Tomar remédio com leite ou suco', text: 'Posso tomar meus remédios com leite, café ou suco, ou tem que ser com água?' },
  { label: 'Quando ir ao pronto-socorro', text: 'Quais sinais indicam que preciso ir ao pronto-socorro agora?' }
];

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
      text: 'Olá! Meu nome é Sofia, sua assistente de saúde da Synapse MD. Como você está se sentindo hoje? Se preferir não digitar, toque em uma das dúvidas acima ou aperte o microfone para falar comigo.',
      speech: 'Olá! Meu nome é Sofia, sua assistente de saúde da Synapse MD. Como você está se sentindo hoje? Se preferir não digitar, toque em uma das dúvidas acima ou aperte o microfone para falar comigo.'
    }
  ],
  userMeds: [
    { name: 'Losartana Potássica 50mg', dose: '1 comprimido pela manhã', tip: 'Tomar com água, todos os dias no mesmo horário.', time: '08:00' },
    { name: 'Omeprazol 20mg', dose: '1 cápsula em jejum', tip: 'Tomar 30 minutos antes do café da manhã.', time: '07:30' },
    { name: 'Hidroclorotiazida 25mg', dose: '1 comprimido pela manhã', tip: 'Ajuda a eliminar líquido. É normal urinar mais cedo.', time: '08:00' }
  ]
};

// Base de Dados de Problemas Específicos com Ícones Neutros
const PATIENT_PROBLEMS = {
  coracao: {
    title: 'Coração e Pressão Alta',
    iconSvg: NEUTRAL_ICONS.heart,
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
    iconSvg: NEUTRAL_ICONS.lungs,
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
    iconSvg: NEUTRAL_ICONS.stomach,
    class: 'estomago',
    desc: 'Queimação que sobe para a garganta, dor na boca do estômago ou enjoo.',
    promptInit: 'Estou com queimação forte no estômago ou azia.',
    response: 'Azia e queimação são muito comuns e causam bastante incômodo. Veja orientações práticas que aliviam:\n\n1. **Não se deite logo após comer:** Espere pelo menos 2 horas antes de deitar ou tirar um cochilo.\n2. **Eleve a cabeceira da cama:** Usar um travesseiro extra ou elevar a cabeceira em 15cm impede que o ácido suba para a garganta durante a noite.\n3. **Evite alimentos que irritam:** Café forte, refrigerantes, frituras, chocolate e bebidas alcoólicas pioram a queimação.\n4. **Remédios de estômago (como Omeprazol):** Devem ser tomados de manhã, em jejum, cerca de 30 minutos antes do café.\n\n*Aviso: Se você estiver vomitando com sangue, fezes pretas como borra de café ou dificuldade para engolir a comida, consulte um médico com urgência.*',
    options: [
      'A queimação piora muito de noite',
      'Como devo tomar o remédio do estômago?',
      'O que posso comer para não piorar a azia?',
      'Sinto a comida voltando para a garganta'
    ]
  },
  remedios: {
    title: 'Dúvidas sobre Remédios',
    iconSvg: NEUTRAL_ICONS.pill,
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
    iconSvg: NEUTRAL_ICONS.brain,
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
    iconSvg: NEUTRAL_ICONS.alertShield,
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
// CONTROLE DE ACESSIBILIDADE CORRIGIDO (HTML E BODY SINCRONIZADOS)
// ============================================================================

function setFontSize(size) {
  PatientAppState.fontSize = size;
  
  // Remove classes anteriores tanto de html quanto de body
  document.documentElement.classList.remove('font-large', 'font-xlarge');
  document.body.classList.remove('font-large', 'font-xlarge');
  
  document.getElementById('btn-font-normal')?.classList.remove('active');
  document.getElementById('btn-font-large')?.classList.remove('active');
  document.getElementById('btn-font-xlarge')?.classList.remove('active');

  if (size === 'large') {
    document.documentElement.classList.add('font-large');
    document.body.classList.add('font-large');
    document.getElementById('btn-font-large')?.classList.add('active');
  } else if (size === 'xlarge') {
    document.documentElement.classList.add('font-xlarge');
    document.body.classList.add('font-xlarge');
    document.getElementById('btn-font-xlarge')?.classList.add('active');
  } else {
    document.getElementById('btn-font-normal')?.classList.add('active');
  }

  saveSettings();
}

function toggleHighContrast() {
  PatientAppState.highContrast = !PatientAppState.highContrast;
  document.documentElement.classList.toggle('high-contrast', PatientAppState.highContrast);
  document.body.classList.toggle('high-contrast', PatientAppState.highContrast);
  document.getElementById('btn-contrast-toggle')?.classList.toggle('active', PatientAppState.highContrast);
  saveSettings();
}

function toggleAutoSpeech() {
  PatientAppState.autoSpeech = !PatientAppState.autoSpeech;
  const btn = document.getElementById('btn-speech-toggle');
  const label = document.getElementById('speech-label');
  
  if (PatientAppState.autoSpeech) {
    btn?.classList.add('active');
    if (label) label.innerText = 'Voz Ativa';
    speakText('Leitura por voz ativada. As mensagens agora serão lidas para você.');
  } else {
    btn?.classList.remove('active');
    if (label) label.innerText = 'Voz';
    window.speechSynthesis?.cancel();
  }
  saveSettings();
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const cleanText = text.replace(/[*#•🚨🫀🫁🔥💊🧠]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR'));
  if (ptVoice) utterance.voice = ptVoice;

  window.speechSynthesis.speak(utterance);
}

// Reconhecimento de Fala
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
      console.log('Erro no microfone:', e);
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
// NAVEGAÇÃO ENTRE TELAS
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
// TELA 1: INÍCIO (SELEÇÃO DE PROBLEMAS ESPECÍFICOS COM ÍCONES NEUTROS)
// ============================================================================

function renderHomeView(container) {
  container.innerHTML = `
    <!-- Cartão Acolhedor de Boas-Vindas -->
    <div class="welcome-card">
      <h2 class="welcome-title">Olá! O que você está sentindo hoje?</h2>
      <p class="welcome-desc">
        Toque no assunto que melhor descreve o que você precisa. Nossa assistente vai te ouvir e orientar passo a passo, com calma e palavras simples.
      </p>
    </div>

    <!-- Grandes Cartões de Toque com Ícones Neutros -->
    <h3 class="section-title">
      ${NEUTRAL_ICONS.stethoscope}
      <span>Escolha o que você está sentindo:</span>
    </h3>

    <div class="problems-grid" role="list">
      ${Object.entries(PATIENT_PROBLEMS).map(([key, item]) => `
        <button 
          class="problem-card ${item.class}" 
          onclick="selectProblemAndOpenChat('${key}')"
          role="listitem"
          aria-label="${item.title}: ${item.desc}"
        >
          <div class="problem-card-icon" aria-hidden="true">${item.iconSvg}</div>
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
        Conversar com a Assistente
      </button>
    </div>
  `;
}

function selectProblemAndOpenChat(problemKey) {
  const problem = PATIENT_PROBLEMS[problemKey];
  if (!problem) return;

  PatientAppState.activeProblem = problemKey;

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
// TELA 2: CONVERSAR COM O ASSISTENTE (COM BARRA DE DIÁLOGOS PRÉ-PRONTOS)
// ============================================================================

function renderChatView(container) {
  container.innerHTML = `
    <div class="chat-container-human">
      <!-- Cabeçalho do Chat -->
      <div class="chat-header-bar">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="a11y-btn" style="min-width:34px; padding:4px 8px; font-size:0.82em;" onclick="switchView('home')" title="Voltar ao início">
            ← Voltar
          </button>
          <div class="chat-assistant-info">
            <div class="chat-avatar-small" aria-hidden="true">${NEUTRAL_ICONS.assistantShield}</div>
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
          ${NEUTRAL_ICONS.audio}
          <span>${PatientAppState.autoSpeech ? 'Voz Ativa' : 'Voz'}</span>
        </button>
      </div>

      <!-- Barra de Diálogos Pré-Prontos (Dúvidas Rápidas Frequentes) -->
      <div class="preset-dialogues-bar">
        <div class="preset-title-label">
          <span>Dúvidas Frequentes (Toque para enviar):</span>
        </div>
        <div class="preset-chips-scroll">
          ${PRESET_DIALOGUES.map(d => `
            <button class="preset-chip-btn" onclick="sendPresetDialogue('${escapeHtml(d.text)}')">
              ${escapeHtml(d.label)}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Fluxo de Mensagens -->
      <div class="chat-stream-box" id="chat-stream-scroll">
        ${renderChatMessagesHTML()}
      </div>

      <!-- Barra de Entrada com Microfone Neutro e Envio -->
      <div class="chat-input-container">
        <button 
          class="mic-btn ${PatientAppState.isRecording ? 'recording' : ''}" 
          id="mic-record-btn" 
          onclick="toggleVoiceInput()"
          title="Aperte para falar sua dúvida"
          aria-label="Falar mensagem com o microfone"
        >
          ${NEUTRAL_ICONS.mic}
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

function sendPresetDialogue(questionText) {
  const input = document.getElementById('chat-text-input-field');
  if (input) {
    input.value = questionText;
    handleSendMessage();
  }
}

function renderChatMessagesHTML() {
  return PatientAppState.chatMessages.map((msg) => {
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
            ${NEUTRAL_ICONS.audio}
            <span>Ouvir orientação</span>
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

  setTimeout(() => {
    generateEmpatheticPatientResponse(userText);
  }, 500);
}

function generateEmpatheticPatientResponse(userText) {
  const lower = userText.toLowerCase();
  let reply = '';
  let options = [];

  if (lower.includes('aperto no peito') || lower.includes('dor no peito') || lower.includes('braço esquerdo') || lower.includes('boca torta')) {
    reply = '🚨 **Atenção Imediata:** Os sintomas que você descreveu podem indicar uma urgência cardíaca ou neurológica.\n\nPor favor, **não fique sozinho** e procure ajuda agora mesmo: peça para alguém te levar ao pronto-socorro mais próximo ou **ligue para o SAMU no 192**.\n\nFique sentado com calma, respire devagar e evite fazer qualquer esforço físico.';
    options = ['Ligar para o SAMU 192 agora', 'Não é grave, foi só um exemplo'];
  } else if (lower.includes('pressão') || lower.includes('15 por 9') || lower.includes('alta') || lower.includes('pés inchados') || lower.includes('pernas inchadas')) {
    reply = 'Sobre a pressão arterial e inchaço:\n\n1. **Faça um repouso:** Sente-se em uma cadeira confortável, com as costas apoiadas e os pés no chão, e descanse por 15 minutos em silêncio antes de medir de novo.\n2. **Tome o remédio prescrito:** Se você esqueceu de tomar o remédio da manhã, tome-o com água agora.\n3. **Inchaço nos pés:** Coloque as pernas para cima (apoiadas em almofadas) por 20 a 30 minutos.\n\n*Procure atendimento se a pressão estiver acima de 18 por 11, ou se vier com dor forte na nuca ou visão embaçada.*';
    options = ['Vou medir novamente em repouso', 'Já tomei o remédio da pressão hoje', 'Como medir a pressão do jeito certo?'];
  } else if (lower.includes('falta de ar') || lower.includes('chiado') || lower.includes('tosse') || lower.includes('pulmão')) {
    reply = 'Para ajudar com a respiração agora:\n\n1. Sente-se inclinado ligeiramente para a frente com os braços apoiados sobre as pernas ou mesa. Essa postura relaxa o diafragma.\n2. Respire devagar pelo nariz e solte o ar suavemente com os lábios entreabertos.\n3. Se você tem bombinha de alívio prescrita pelo seu médico, use com o espaçador conforme a receita.\n\nComo está sua respiração neste momento? Consegue falar normalmente?';
    options = ['Consigo falar, mas ainda cansa', 'Melhorou um pouco sentado', 'Como usar a bombinha correta?'];
  } else if (lower.includes('azia') || lower.includes('queimação') || lower.includes('estômago') || lower.includes('refluxo')) {
    reply = 'A queimação no estômago e o refluxo aliviam com estes cuidados práticos:\n\n1. **Não se deite após comer:** Espere pelo menos 2 a 3 horas antes de deitar ou tirar um cochilo.\n2. **Elevação na cama:** Usar um travesseiro extra para elevar a cabeça e o tronco evita que o ácido suba para o esôfago à noite.\n3. **Alimentação:** Evite café forte, refrigerante, frituras, chocolate e bebidas alcoólicas hoje.\n\nVocê toma remédio protetor como Omeprazol ou Pantoprazol?';
    options = ['Tomo Omeprazol pela manhã em jejum', 'Não tomo nenhum remédio de estômago', 'O que comer para não piorar a azia?'];
  } else if (lower.includes('esqueci') && lower.includes('remédio')) {
    reply = 'Esquecer o remédio é muito comum. A regra de ouro é:\n\n• **Nunca tome dois comprimidos juntos para compensar**, pois isso pode fazer sua pressão despencar ou causar mal-estar.\n• Se lembrou poucas horas depois, tome a dose agora.\n• Se já estiver perto do horário da próxima dose, pule a dose esquecida e siga o horário normal.';
    options = ['Entendi, vou tomar agora', 'Vou esperar o horário de amanhã'];
  } else if (lower.includes('leite') || lower.includes('suco') || lower.includes('água') || lower.includes('como tomar')) {
    reply = 'Sobre como ingerir remédios:\n\n• **Sempre tome com água filtrada:** A água é neutra e não atrapalha a absorção do remédio.\n• **Evite leite:** O cálcio do leite pode anular o efeito de diversos antibióticos e remédios.\n• **Evite sucos cítricos e café:** Eles podem irritar o estômago e alterar o efeito de remédios da pressão e do coração.';
    options = ['Vou tomar sempre com água', 'Tenho outra dúvida de remédio'];
  } else {
    reply = `Recebi sua mensagem com toda a atenção.\n\nPara te orientar melhor: isso começou hoje ou você já vem sentindo há alguns dias? Sente dor, febre ou algum outro desconforto associado?\n\nEstou aqui com você. Pode me contar mais detalhes ou escolher uma das opções abaixo.`;
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
// TELA 3: MEUS REMÉDIOS (COM ÍCONES NEUTROS)
// ============================================================================

function renderMedsView(container) {
  container.innerHTML = `
    <div>
      <div class="welcome-card">
        <h2 class="welcome-title">Seus Remédios Diários</h2>
        <p class="welcome-desc">
          Horários e instruções para tomar seus medicamentos com segurança e sem esquecimentos.
        </p>
      </div>

      <div class="meds-card-list">
        ${PatientAppState.userMeds.map(med => `
          <div class="med-card">
            <div>
              <div class="med-title">${med.name}</div>
              <div style="font-size:0.92em; color:var(--text-main); font-weight:600; margin-top:2px;">
                Dose: ${med.dose}
              </div>
              <div class="med-instructions">
                ${NEUTRAL_ICONS.info}
                <span>${med.tip}</span>
              </div>
            </div>
            <div class="med-time-tag">
              ${NEUTRAL_ICONS.clock}
              <span>${med.time}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top:24px; text-align:center;">
        <button class="a11y-btn" style="min-height:46px; padding:10px 20px; border-radius:var(--radius-full);" onclick="addCustomMedPrompt()">
          + Adicionar Outro Remédio
        </button>
      </div>
    </div>
  `;
}

function addCustomMedPrompt() {
  const name = prompt('Nome do remédio (ex: Dipirona 500mg):');
  if (!name) return;
  const time = prompt('Horário habitual (ex: 08:00):', '08:00') || '08:00';
  const dose = prompt('Como tomar (ex: 1 comprimido):', '1 comprimido') || '1 comprimido';

  PatientAppState.userMeds.push({
    name: name,
    dose: dose,
    tip: 'Tomar com água conforme prescrito pelo seu médico.',
    time: time
  });

  saveSettings();
  renderCurrentView();
  alert(`Remédio ${name} adicionado com sucesso!`);
}

// ============================================================================
// TELA 4: SINAIS DE ALERTA (COM ALERTA SAMU)
// ============================================================================

function renderEmergencyView(container) {
  container.innerHTML = `
    <div>
      <div style="background:var(--bg-soft-rose); border:2px solid var(--danger); border-radius:var(--radius-md); padding:20px; margin-bottom:18px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <span style="font-size:26px;">🚨</span>
          <h2 style="font-size:1.25em; font-weight:800; color:var(--danger); line-height:1.2;">
            Quando Ir ao Pronto-Socorro Imediatamente
          </h2>
        </div>
        <p style="font-size:0.92em; color:#881337; line-height:1.5;">
          Se você ou alguém próximo apresentar qualquer um dos sinais abaixo, procure atendimento médico sem esperar ou ligue para o 192.
        </p>
        <div style="margin-top:14px;">
          <a href="tel:192" class="emergency-btn" style="width:100%; justify-content:center; font-size:1em; padding:12px;">
            📞 LIGAR AGORA PARA O SAMU (192)
          </a>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:5px solid var(--danger); border-radius:var(--radius-md); padding:16px;">
          <h3 style="font-size:1.02em; font-weight:800; color:var(--text-main); margin-bottom:4px;">
            1. Dor no Peito em Aperto ou Queimação
          </h3>
          <p style="font-size:0.88em; color:var(--text-muted);">
            Dor forte no peito que dura mais de 10 minutos, especialmente se espalhar para o braço esquerdo, queixo ou vier com suor frio e náusea.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:5px solid var(--danger); border-radius:var(--radius-md); padding:16px;">
          <h3 style="font-size:1.02em; font-weight:800; color:var(--text-main); margin-bottom:4px;">
            2. Sinais de Alerta para AVC (Derrame)
          </h3>
          <p style="font-size:0.88em; color:var(--text-muted);">
            Boca torta ao sorrir, perda de força repentina em um lado do corpo, dificuldade para falar ou entender frases simples.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:5px solid var(--danger); border-radius:var(--radius-md); padding:16px;">
          <h3 style="font-size:1.02em; font-weight:800; color:var(--text-main); margin-bottom:4px;">
            3. Falta de Ar Grave e Repentina
          </h3>
          <p style="font-size:0.88em; color:var(--text-muted);">
            Sufoco intenso, lábios azulados/aroxeados ou incapacidade de falar frases inteiras sem parar para respirar.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid var(--border-color); border-left:5px solid var(--danger); border-radius:var(--radius-md); padding:16px;">
          <h3 style="font-size:1.02em; font-weight:800; color:var(--text-main); margin-bottom:4px;">
            4. Sangramentos ou Desmaios com Perda de Consciência
          </h3>
          <p style="font-size:0.88em; color:var(--text-muted);">
            Vômito com sangue, fezes escuras como carvão, desmaios súbitos com queda ou convulsões.
          </p>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// PERSISTÊNCIA LOCAL
// ============================================================================

function saveSettings() {
  try {
    const data = {
      fontSize: PatientAppState.fontSize,
      highContrast: PatientAppState.highContrast,
      autoSpeech: PatientAppState.autoSpeech,
      userMeds: PatientAppState.userMeds
    };
    localStorage.setItem('SYNAPSE_PATIENT_SETTINGS_V2', JSON.stringify(data));
  } catch (e) {}
}

function loadSavedSettings() {
  try {
    const saved = localStorage.getItem('SYNAPSE_PATIENT_SETTINGS_V2');
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
