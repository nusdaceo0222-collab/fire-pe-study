# 필휴 소방기술사 PWA

구성:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

설치 방법(안드로이드 Chrome):
1. 이 폴더를 HTTPS 웹서버에 업로드합니다.
2. Chrome에서 index.html 주소로 접속합니다.
3. 메뉴(⋮) → '앱 설치' 또는 '홈 화면에 추가'를 누릅니다.

주의:
- PWA 설치는 일반적으로 file:// 로 직접 여는 방식에서는 동작하지 않습니다.
- HTTPS 또는 localhost 환경이 필요합니다.
- 설치 후에는 서비스워커 캐시로 오프라인에서도 열 수 있습니다.
