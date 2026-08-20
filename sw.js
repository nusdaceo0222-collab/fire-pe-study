const CACHE_NAME = 'fire-pe-memory-cache-v4';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/images/pihan_time_matrix.png',
  './assets/images/life_safety.png',
  './assets/images/pipe_shadow.png',
  './assets/images/rti_formula.png',
  './assets/images/std_time_temp.png',
  './assets/images/co2_state_diagram.png',
  './assets/images/trip_time_formula.png',
  './assets/images/hagen_poiseuille.png',
  './assets/images/formula_memory_overview_1.png',
  './assets/images/formula_memory_overview_2.png',
  './assets/images/memory_method_4step.png',
  './assets/images/alpert_note.png',
  './assets/images/alpert_summary.png',
  './assets/images/fire_compartment_summary.png',
  './assets/images/fire_structure_comparison.png',
  './assets/images/steel_high_temp_strength.png',
  './assets/images/stair_comparison.png',
  './assets/images/delay_elements.png',
  './assets/images/iso834_fire_resistance.png',
  './assets/images/agent_quantity_formula.png',
  './assets/images/vapor_delay_time.png',
  './assets/images/design_concentration.png',
  './assets/images/agent_discharge_time.png',
  './assets/images/hinckley_formula_understanding.png',
  './assets/images/hinckley_story_memory.png',
  './assets/images/smoke_exhaust_derivation.png',
  './assets/images/smoke_exhaust_story_memory.png',
  './assets/images/co2_storage_state.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
