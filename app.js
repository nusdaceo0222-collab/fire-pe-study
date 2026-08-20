const cards = [

  {
    id: 'fire-compartment-summary', title: '방화구획 핵심 정리', category: '건축방재', image: 'assets/images/fire_compartment_summary.png',
    tags: ['오늘15', '방화구획', 'Passive system', '면적구획'], keywords: '방화문 방화셔터 방화댐퍼 내화채움구조 수직관통부 1000 200 500', priority: true
  },
  {
    id: 'fire-structure-comparison', title: '방화구조·내화구조·방화구획 비교', category: '건축방재', image: 'assets/images/fire_structure_comparison.png',
    tags: ['오늘15', '방화구조', '내화구조', '방화구획'], keywords: '초기방화 구조내화 구획차단 passive post-flashover', priority: true
  },
  {
    id: 'steel-high-temp-strength', title: '철골재 고온 강도저하 암기법', category: '내화', image: 'assets/images/steel_high_temp_strength.png',
    tags: ['오늘15', '철골', '고온', '강도저하'], keywords: '350 538 650 1/3 1/2 2/3 탄성계수 항복강도', priority: true
  },
  {
    id: 'stair-comparison', title: '직통·피난·특별피난계단 비교', category: '피난', image: 'assets/images/stair_comparison.png',
    tags: ['오늘15', '직통계단', '피난계단', '특별피난계단'], keywords: '부속실 방화문 내화구조 연기차단 층수별', priority: true
  },
  {
    id: 'delay-elements', title: '시간지연 요소 암기법', category: '가스계', image: 'assets/images/delay_elements.png',
    tags: ['오늘15', '시간지연', '감피밀이방'], keywords: '감지시간 피난시간 밀폐시간 이송시간 방사시간 감피밀이방', priority: true
  },
  {
    id: 'iso834-fire-resistance', title: '표준온도시간곡선·내화성능 핵심', category: '내화', image: 'assets/images/iso834_fire_resistance.png',
    tags: ['오늘15', 'ISO834', '내화성능', '표준온도시간곡선'], keywords: '345 log 8t+1 차열성 차염성 하중지지력 요구내화시간 840 945 1050 1100', priority: true
  },
  {
    id: 'agent-quantity-formula', title: '약제량 산정 공식 암기법', category: '가스계', image: 'assets/images/agent_quantity_formula.png',
    tags: ['오늘15', '약제량', '무유출', '자유유출'], keywords: '할로겐화합물 이산화탄소 불활성기체 ln Vs 선형상수', priority: true
  },
  {
    id: 'vapor-delay-time', title: 'Vapor delay time 공식 암기법', category: '가스계', image: 'assets/images/vapor_delay_time.png',
    tags: ['오늘15', 'Vapor delay time', 'CO2', '공식'], keywords: 'Dt 0.507 16830 열적지연 체적지연 설계유량 배관체적', priority: true
  },
  {
    id: 'design-concentration', title: '설계농도 암기법', category: '가스계', image: 'assets/images/design_concentration.png',
    tags: ['오늘15', '설계농도', 'A급', 'B급', 'C급'], keywords: '1.2 1.3 1.35 A급 소화농도 C급 A기준', priority: true
  },
  {
    id: 'agent-discharge-time', title: '약제별 방사시간 암기법', category: '가스계', image: 'assets/images/agent_discharge_time.png',
    tags: ['오늘15', '방사시간', '가스계'], keywords: '10초 30초 1분 2분 7분 할로겐 분말 CO2 불활성 심부화재', priority: true
  },
  {
    id: 'hinckley-understanding', title: '힝클리 연기 하강시간 공식 이해', category: '연기', image: 'assets/images/hinckley_formula_understanding.png',
    tags: ['오늘15', '힝클리', '하강시간', '공식'], keywords: '20A P 루트g y h 청결층 연기층', priority: true
  },
  {
    id: 'hinckley-story', title: '힝클리 공식 스토리텔링 암기', category: '연기', image: 'assets/images/hinckley_story_memory.png',
    tags: ['오늘15', '힝클리', '스토리텔링'], keywords: '20명 A급 피땀 루트쥐 y계곡 h고지', priority: true
  },
  {
    id: 'smoke-exhaust-derivation', title: '연기 배출량 y³⁄² 유체역학적 이해', category: '연기', image: 'assets/images/smoke_exhaust_derivation.png',
    tags: ['오늘15', '배출량', '유체역학', 'y3/2'], keywords: 'Q A V 면적 속도 P 루트g 10 y 3/2', priority: true
  },
  {
    id: 'smoke-exhaust-story', title: '연기 배출량 공식 스토리 암기', category: '연기', image: 'assets/images/smoke_exhaust_story_memory.png',
    tags: ['오늘15', '배출량', '스토리텔링'], keywords: 'P 루트쥐 10명 y계곡 3박2일', priority: true
  },
  {
    id: 'co2-storage-state', title: 'CO₂ 상태도와 고압식·저압식 저장조건', category: '가스계', image: 'assets/images/co2_storage_state.png',
    tags: ['오늘15', 'CO2', '상태도', '고압식', '저압식'], keywords: '저팔이 -18 2.1MPa 고이육 20 6MPa 승화점 삼중점 임계점', priority: true
  },

  {
    id: 'egress-time-matrix',
    title: '피난가능시간 기준 암기법',
    category: '피난',
    image: 'assets/images/pihan_time_matrix.png',
    tags: ['피난', 'W1', 'W2', 'W3', '피난가능시간', '기준', '매트릭스'],
    keywords: '경고방송 육성지침 비훈련직원 사무실 상점 기숙사 호텔 병원'
  },
  {
    id: 'life-safety-criteria',
    title: '인명안전기준 암기법',
    category: '피난',
    image: 'assets/images/life_safety.png',
    tags: ['피난', '인명안전기준', '가시거리', '독성', '열'],
    keywords: '판집10 고7 기5 일사 이오 산일오 1.8m 60도'
  },
  {
    id: 'pipe-shadow-effect',
    title: '파이프 새도 이펙트 발생원인',
    category: '설비',
    image: 'assets/images/pipe_shadow.png',
    tags: ['설비', '스프링클러', '파이프새도', '배관', '암기법'],
    keywords: '가구 행거 꺾임 가지배관 헤드 행거 구경'
  },
  {
    id: 'rti-formula',
    title: 'RTI 공식 암기법',
    category: '공식',
    image: 'assets/images/rti_formula.png',
    tags: ['공식', 'RTI', '스프링클러', '수식', '암기법'],
    keywords: '탑우산 씨우산 에너지원 위 감열체 열기류'
  },
  {
    id: 'standard-time-temperature',
    title: '표준시간-온도 곡선 암기법',
    category: '공식',
    image: 'assets/images/std_time_temp.png',
    tags: ['공식', '표준시간온도곡선', '화재', '온도', '시간'],
    keywords: '930 1010 1050 1100 1260 증가폭 화재 곡선'
  },
  {
    id: 'co2-state-diagram',
    title: '이산화탄소 상태도 암기법',
    category: '공식',
    image: 'assets/images/co2_state_diagram.png',
    tags: ['공식', '이산화탄소', '상태도', '승화점', '삼중점', '임계점'],
    keywords: 'CO2 상태도 압력 온도 1atm -78.5 5.1atm -56.6 72.8atm 31도'
  },
  {
    id: 'trip-time-formula',
    title: '트립(Trip) 시간 공식 암기법',
    category: '공식',
    image: 'assets/images/trip_time_formula.png',
    tags: ['공식', '트립시간', 'Trip', '압력', '배관', '헤드'],
    keywords: '0.0352 VT An To ln Pao Pa 트립 시간 공식'
  },
  {
    id: 'hagen-poiseuille',
    title: '하겐-포아쥬일 방정식 암기법',
    category: '공식',
    image: 'assets/images/hagen_poiseuille.png',
    tags: ['공식', '하겐포아쥬일', '유체역학', '압력차', '점성'],
    keywords: '주사기 128 Q 뮤 L 파이 D4 압력차 점성 유량 관 길이 직경'
  },
  {
    id: 'formula-memory-overview-1',
    title: '소방기술사 공식 암기법 모음 1',
    category: '공식',
    image: 'assets/images/formula_memory_overview_1.png',
    tags: ['공식', 'Babrauskas', 'Thomas', 'McCaffrey', 'MQ식', '암기법'],
    keywords: '바보라도 아휴 토마스 칠떡팔기 아르떼 맥카페 610 육포 6.85 공식 암기'
  },
  {
    id: 'formula-memory-overview-2',
    title: '소방기술사 공식 암기법 모음 2',
    category: '공식',
    image: 'assets/images/formula_memory_overview_2.png',
    tags: ['공식', 'Babrauskas', 'Thomas', 'McCaffrey', 'Pre-flashover', '암기법'],
    keywords: '바브라우스카스 토마스 맥카프리 프리플래시오버 아르떼 히터 아휴'
  },
  {
    id: 'memory-method-4step',
    title: '기술사 합격을 위한 4단계 실전 암기법',
    category: '학습법',
    image: 'assets/images/memory_method_4step.png',
    tags: ['학습법', '암기법', '두음법칙', '목차정리', '인출'],
    keywords: '4단계 실전 암기법 원리 수치 서랍장 정리 파인만 기법'
  },
  {
    id: 'alpert-note',
    title: '알퍼트 상관식 초간단 암기노트',
    category: '공식',
    image: 'assets/images/alpert_note.png',
    tags: ['공식', '알퍼트', '상관식', '온도', '속도'],
    keywords: '알퍼트 상관식 16.9 5.38 0.96 0.195 온도 속도 r/H'
  },
  {
    id: 'alpert-summary',
    title: '알퍼트 상관식 암기 총정리',
    category: '공식',
    image: 'assets/images/alpert_summary.png',
    tags: ['공식', '알퍼트', '상관식', '암기총정리', '온도', '속도'],
    keywords: '알퍼트 온18 속15 가까우면 r없다 멀어지면 r있다 16.9 5.38 0.96 0.195'
  }
];

const STORAGE_KEY = 'fire-pe-memory-progress-v1';
const state = {
  query: '',
  category: '전체',
  view: 'all',
  progress: loadProgress(),
  filtered: [],
  currentCardId: null,
  deferredPrompt: null
};

const elements = {
  searchInput: document.getElementById('searchInput'),
  categoryChips: document.getElementById('categoryChips'),
  viewChips: document.getElementById('viewChips'),
  cardGrid: document.getElementById('cardGrid'),
  emptyState: document.getElementById('emptyState'),
  resultCount: document.getElementById('resultCount'),
  totalCount: document.getElementById('totalCount'),
  favoriteCount: document.getElementById('favoriteCount'),
  reviewCount: document.getElementById('reviewCount'),
  doneCount: document.getElementById('doneCount'),
  randomBtn: document.getElementById('randomBtn'),
  todayBtn: document.getElementById('todayBtn'),
  reviewRandomBtn: document.getElementById('reviewRandomBtn'),
  exportBtn: document.getElementById('exportBtn'),
  importInput: document.getElementById('importInput'),
  viewerModal: document.getElementById('viewerModal'),
  viewerTitle: document.getElementById('viewerTitle'),
  viewerMeta: document.getElementById('viewerMeta'),
  viewerImage: document.getElementById('viewerImage'),
  viewerTags: document.getElementById('viewerTags'),
  viewerFavoriteBtn: document.getElementById('viewerFavoriteBtn'),
  viewerStatusSelect: document.getElementById('viewerStatusSelect'),
  closeViewer: document.getElementById('closeViewer'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  installBtn: document.getElementById('installBtn'),
  pwaStatus: document.getElementById('pwaStatus')
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error('progress load error', error);
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getCardProgress(cardId) {
  return state.progress[cardId] || { favorite: false, status: 'unknown' };
}

function updateCardProgress(cardId, updates) {
  state.progress[cardId] = { ...getCardProgress(cardId), ...updates };
  saveProgress();
  render();
  syncViewer(cardId);
}

function buildCategoryChips() {
  const categories = ['전체', ...new Set(cards.map(card => card.category))];
  elements.categoryChips.innerHTML = categories.map(category => `
    <button class="chip ${state.category === category ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');

  elements.categoryChips.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function setViewEvents() {
  elements.viewChips.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
      state.view = button.dataset.view;
      render();
    });
  });
}

function filterCards() {
  const q = state.query.trim().toLowerCase();
  return cards.filter(card => {
    const progress = getCardProgress(card.id);
    const matchCategory = state.category === '전체' || card.category === state.category;
    const matchView =
      state.view === 'all' ||
      (state.view === 'favorites' && progress.favorite) ||
      (state.view === 'review' && progress.status !== 'done');
    const haystack = `${card.title} ${card.category} ${card.tags.join(' ')} ${card.keywords}`.toLowerCase();
    const matchQuery = !q || haystack.includes(q);
    return matchCategory && matchView && matchQuery;
  });
}

function statusLabel(status) {
  return {
    unknown: '🔴 모름',
    review: '🟡 애매',
    done: '🟢 암기완료'
  }[status] || '🔴 모름';
}

function statusClass(status) {
  return `status-${status}`;
}

function renderCards(filtered) {
  if (!filtered.length) {
    elements.cardGrid.innerHTML = '';
    elements.emptyState.classList.remove('hidden');
    return;
  }

  elements.emptyState.classList.add('hidden');
  elements.cardGrid.innerHTML = filtered.map(card => {
    const progress = getCardProgress(card.id);
    return `
      <article class="memo-card">
        <div class="card-image-wrap" data-open="${card.id}">
          <span class="status-badge ${statusClass(progress.status)}">${statusLabel(progress.status)}</span>
          ${progress.favorite ? '<span class="favorite-badge">★ 즐겨찾기</span>' : ''}
          <img src="${card.image}" alt="${card.title}" loading="lazy" />
        </div>
        <div class="card-content">
          <div class="card-title-row">
            <div>
              <h3>${card.title}</h3>
              <small class="muted">${card.category}</small>
            </div>
            <button class="star-btn" data-favorite="${card.id}" aria-label="즐겨찾기">${progress.favorite ? '★' : '☆'}</button>
          </div>
          <div class="tag-list">
            ${card.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="card-footer">
            <select class="status-select" data-status="${card.id}">
              <option value="unknown" ${progress.status === 'unknown' ? 'selected' : ''}>🔴 모름</option>
              <option value="review" ${progress.status === 'review' ? 'selected' : ''}>🟡 애매</option>
              <option value="done" ${progress.status === 'done' ? 'selected' : ''}>🟢 암기완료</option>
            </select>
            <button class="ghost-btn open-btn" data-open="${card.id}">보기</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  bindCardEvents();
}

function bindCardEvents() {
  elements.cardGrid.querySelectorAll('[data-favorite]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.favorite;
      const progress = getCardProgress(id);
      updateCardProgress(id, { favorite: !progress.favorite });
    });
  });

  elements.cardGrid.querySelectorAll('[data-status]').forEach(select => {
    select.addEventListener('change', () => {
      updateCardProgress(select.dataset.status, { status: select.value });
    });
  });

  elements.cardGrid.querySelectorAll('[data-open]').forEach(target => {
    target.addEventListener('click', () => openViewer(target.dataset.open));
  });
}

function renderStats() {
  const progressList = cards.map(card => getCardProgress(card.id));
  elements.totalCount.textContent = cards.length;
  elements.favoriteCount.textContent = progressList.filter(p => p.favorite).length;
  elements.reviewCount.textContent = progressList.filter(p => p.status !== 'done').length;
  elements.doneCount.textContent = progressList.filter(p => p.status === 'done').length;
}

function render() {
  buildCategoryChips();

  elements.viewChips.querySelectorAll('[data-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.view === state.view);
  });

  state.filtered = filterCards();
  renderCards(state.filtered);
  renderStats();
  elements.resultCount.textContent = `${state.filtered.length}개 표시`;
}

function openViewer(cardId) {
  const card = cards.find(item => item.id === cardId);
  if (!card) return;
  state.currentCardId = cardId;
  syncViewer(cardId);
  elements.viewerModal.showModal();
}

function syncViewer(cardId) {
  const card = cards.find(item => item.id === cardId);
  if (!card || !elements.viewerModal.open) {
    if (!card) return;
  }
  const progress = getCardProgress(card.id);
  elements.viewerTitle.textContent = card.title;
  elements.viewerMeta.textContent = `${card.category} · ${statusLabel(progress.status)}`;
  elements.viewerImage.src = card.image;
  elements.viewerImage.alt = card.title;
  elements.viewerTags.innerHTML = card.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  elements.viewerFavoriteBtn.textContent = progress.favorite ? '★ 즐겨찾기 해제' : '☆ 즐겨찾기';
  elements.viewerStatusSelect.value = progress.status;
}

function moveViewer(step) {
  if (!state.filtered.length || !state.currentCardId) return;
  const currentIndex = state.filtered.findIndex(card => card.id === state.currentCardId);
  const nextIndex = (currentIndex + step + state.filtered.length) % state.filtered.length;
  openViewer(state.filtered[nextIndex].id);
}

function openRandomCard() {
  if (!state.filtered.length) return;
  const randomCard = state.filtered[Math.floor(Math.random() * state.filtered.length)];
  openViewer(randomCard.id);
}

function openReviewRandomCard() {
  const candidates = cards.filter(card => getCardProgress(card.id).status !== 'done');
  if (!candidates.length) {
    alert('복습할 카드가 없습니다. 모두 암기완료 상태입니다.');
    return;
  }
  state.view = 'review';
  state.category = '전체';
  state.query = '';
  elements.searchInput.value = '';
  render();
  const randomCard = candidates[Math.floor(Math.random() * candidates.length)];
  openViewer(randomCard.id);
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state.progress, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'fire-pe-memory-progress.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      state.progress = data;
      saveProgress();
      render();
      alert('진도 복원이 완료되었습니다.');
    } catch (error) {
      alert('진도 파일을 읽지 못했습니다.');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function registerEvents() {
  elements.searchInput.addEventListener('input', e => {
    state.query = e.target.value;
    render();
  });

  elements.randomBtn.addEventListener('click', openRandomCard);
  elements.todayBtn.addEventListener('click', () => {
  state.query = '오늘15';
  elements.searchInput.value = '오늘15';
  state.category = '전체';
  state.view = 'all';
  render();
});

elements.reviewRandomBtn.addEventListener('click', openReviewRandomCard);
  elements.exportBtn.addEventListener('click', exportProgress);
  elements.importInput.addEventListener('change', importProgress);
  elements.closeViewer.addEventListener('click', () => elements.viewerModal.close());
  elements.prevBtn.addEventListener('click', () => moveViewer(-1));
  elements.nextBtn.addEventListener('click', () => moveViewer(1));
  elements.viewerFavoriteBtn.addEventListener('click', () => {
    if (!state.currentCardId) return;
    const progress = getCardProgress(state.currentCardId);
    updateCardProgress(state.currentCardId, { favorite: !progress.favorite });
  });
  elements.viewerStatusSelect.addEventListener('change', () => {
    if (!state.currentCardId) return;
    updateCardProgress(state.currentCardId, { status: elements.viewerStatusSelect.value });
  });

  document.addEventListener('keydown', event => {
    if (!elements.viewerModal.open) return;
    if (event.key === 'ArrowLeft') moveViewer(-1);
    if (event.key === 'ArrowRight') moveViewer(1);
    if (event.key === 'Escape') elements.viewerModal.close();
  });

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    state.deferredPrompt = event;
    elements.installBtn.classList.remove('hidden');
  });

  elements.installBtn.addEventListener('click', async () => {
    if (!state.deferredPrompt) return;
    state.deferredPrompt.prompt();
    await state.deferredPrompt.userChoice;
    state.deferredPrompt = null;
    elements.installBtn.classList.add('hidden');
  });
}

function updatePwaStatus() {
  if (!elements.pwaStatus) return;
  if (!navigator.onLine) {
    elements.pwaStatus.textContent = '● 오프라인 사용 중';
    elements.pwaStatus.className = 'status-dot offline';
    return;
  }
  elements.pwaStatus.textContent = '● 오프라인 준비 완료';
  elements.pwaStatus.className = 'status-dot ready';
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => updatePwaStatus())
      .catch(error => {
        console.error(error);
        if (elements.pwaStatus) elements.pwaStatus.textContent = '● 온라인 사용';
      });
  } else if (elements.pwaStatus) {
    elements.pwaStatus.textContent = '● 온라인 사용';
  }
  window.addEventListener('online', updatePwaStatus);
  window.addEventListener('offline', updatePwaStatus);
}

function init() {
  registerEvents();
  setViewEvents();
  render();
  registerServiceWorker();
}

init();
