# GitHub Pages 배포 메모

이 폴더는 GitHub Pages에 바로 배포 가능한 정적 PWA입니다.

## 최초 1회
1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 **내용물 전체**를 저장소 `main` 브랜치 루트에 올립니다.
3. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
4. `Deploy PWA to GitHub Pages` 작업이 끝나면 Pages 주소로 접속합니다.
5. Android Chrome에서 접속 후 `앱 설치` 또는 브라우저 메뉴의 `홈 화면에 추가`를 사용합니다.

## 이후 업데이트
이미지/코드 변경 후 `main`에 push하면 `.github/workflows/pages.yml`이 자동으로 GitHub Pages를 다시 배포합니다.

> 주의: 현재 버전에서 PWA 안의 암기진도는 기기 localStorage에 저장됩니다. GitHub 배포본을 다시 올려도 같은 주소/브라우저를 유지하면 보통 진도가 유지되지만, 브라우저 데이터 삭제에는 대비할 수 없으므로 `진도 백업` JSON을 별도로 보관하세요.
