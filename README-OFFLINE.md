# fire-pe-study 오프라인 MathJax 적용본

배치 구조:

```text
fire-pe-study/
├─ index.html
├─ service-worker.js
├─ mathjax/
│  ├─ LICENSE
│  └─ es5/
│     └─ tex-svg-full.js
├─ manifest.json          # 기존 파일 유지
├─ icon-192.png           # 기존 파일 유지
└─ svg/                   # 기존 문제 그림 폴더 유지
```

- `index.html`의 MathJax CDN 호출을 `./mathjax/es5/tex-svg-full.js`로 변경했습니다.
- 바깥 문서에서 `service-worker.js`만 등록합니다. srcdoc 내부의 중복 `sw.js` 등록 코드는 제거했습니다.
- `service-worker.js`는 `index.html`과 MathJax를 설치 시 선캐시합니다.
- 기존 manifest/icon/문제 SVG는 있으면 설치 시 캐시하고, 그 밖의 같은 출처 정적 파일은 사용 시 캐시합니다.
- 배포 후 한 번 온라인으로 앱을 열어 새 Service Worker 설치가 끝나면, 이후 수식 렌더링은 CDN 없이 동작합니다.
