# [http://egbro90.github.io](http://egbro90.github.io)  

생각날때마다 함 귀찮아서 언제 끝날지 모름

* 24.10.15 - ~~깃허브페이지로 라우터 세팅 다시 함 (db 붙이면 라우터 다시 세팅해야될수도..)~~
* 24.10.21 - mongDB 대신 jekyll로 데이터관리 가능하여 변경 (깃헙페이지 주소를 이용하기때문에 호스팅도 필요없음)

* 해야될 목록들
    + [+추가] 비교적 간단한 반응형작업부터 하자
    + ~~메인에 들어갈 컨텐츠도 필요함~~
    + ~~메인 - 미정 (로고 필요 : 이니셜 3d 모션), 다크모드추가~~
    + ~~포트폴리오 소개 페이지 - 작업환경 / 프론트, 백엔드 언어 / 레이아웃 / 인터랙티브 라이브러리(gsap, letter.js 등..)~~
    + ~~포트폴리오 리스트 페이지 - api 호출해서 리스트업 + 검색기능 or 벨로그처럼 스크롤 하단에서 포트폴리오 영역 노출(스킬인벤토리 페이지에서 경력+포트폴리오 리스트 하나로)~~
    + ~~경력 및 경력기술서페이지~~
    + ~~mongDB에 포폴리스트 데이터 넣고 불러와야함 (이미지 확인)~~
    + 귀찮아서 변경하기로 함
    + 메인에 마소니 레이아웃 + 스크롤 + 적당한 컨텐츠 개수에 버튼 추가해서 문서 레이아웃페이지로 이동시켜서 전체 포폴 볼 수 있게끔 수정
    + 그래도 포폴 캡처는 디 해야 함 리스트 페이지에서 포폴 클릭하면 상세 페이지로 넘어가기 때문에
    + 어바웃 페이지는 그래도 모션 하나는 들어가게

<hr />

1. 개발 언어
- 프론트 : ~~리액트~~
- 백엔드 : ~~노드~~
- db대신 jekyll markdown으로 이미지 포함한 포폴컨텐츠 관리 가능 함.

2. 폴더 구조
```bash
portfolio
├── README.md
├── package-lock.json
├── package.json
├── portfolio
│   ├── build
│   │   ├── 404.html
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── static
│   │       ├── css
│   │       │   ├── main.91592bbd.css
│   │       │   └── main.91592bbd.css.map
│   │       ├── js
│   │       │   ├── 453.1407b060.chunk.js
│   │       │   └── 453.1407b060.chunk.js.map
│   │       └── media
│   │           ├── Hanwha_B.0ad1e9eb91bde55c5b98.ttf
│   │           ├── Hanwha_B.83a733dd351b7bb763f9.eot
│   │           ├── Hanwha_B.899d60d9b09035531088.svg
│   │           ├── Hanwha_B.98d0b2d7df02db04a0be.woff2
│   │           ├── Hanwha_B.f622b53302e003655436.woff
│   │           ├── Hanwha_L.3d7824f8c59bfd9cb9a0.svg
│   │           ├── Hanwha_L.4179ac8dec1b61dcdc12.woff
│   │           ├── Hanwha_L.81748b753d58d20d064c.ttf
│   │           ├── Hanwha_L.90ed610a4fcf351552e1.eot
│   │           ├── Hanwha_L.c1923ba2156affdca5ce.woff2
│   │           ├── Hanwha_R.12d820ab534daee1394d.woff
│   │           ├── Hanwha_R.2720ce13caf75c35695f.ttf
│   │           ├── Hanwha_R.307f7416c498cc9c6042.woff2
│   │           ├── Hanwha_R.30b7f3f6e87b61b6dba5.svg
│   │           ├── Hanwha_R.e4c289c6b5db8484f734.eot
│   │           ├── Transducer-Black.40bb4708bc5e71395c98.ttf
│   │           ├── Transducer-Black.71e46a7cebe62c85dc98.eot
│   │           ├── Transducer-Black.955c66278d5136d801d5.woff
│   │           ├── Transducer-Black.aaae36c311432adf67f1.woff2
│   │           ├── Transducer-BlackCondensed.002a745796b3344aab57.ttf
│   │           ├── Transducer-BlackCondensed.1184a9e8c27274229e11.woff
│   │           ├── Transducer-BlackCondensed.29bdb04f82b07fcfb181.woff2
│   │           ├── Transducer-BlackCondensed.e1d0633ddc3f2d51f11e.eot
│   │           ├── Transducer-BlackExtended.02e70a6e8828a3ac4186.eot
│   │           ├── Transducer-BlackExtended.1b309267ea7d6a82d2dd.woff2
│   │           ├── Transducer-BlackExtended.2c6595e88f6b8f4295b8.woff
│   │           ├── Transducer-BlackExtended.d990aced10bd4f51bfd8.ttf
│   │           ├── Transducer-Bold.097868c192210b8c58a2.eot
│   │           ├── Transducer-Bold.710ff0f2c082dca7e3ed.woff2
│   │           ├── Transducer-Bold.ba81865a4aab339a917e.ttf
│   │           ├── Transducer-Bold.f982f5cb8ab8ab440242.woff
│   │           ├── Transducer-BoldCondensed.2ec93b57eaa98f488af9.woff2
│   │           ├── Transducer-BoldCondensed.518836085ef928c59ada.eot
│   │           ├── Transducer-BoldCondensed.613e5af5f8d8d9b0bf2e.woff
│   │           ├── Transducer-BoldCondensed.9fd930cff2ed62e66cd8.ttf
│   │           ├── Transducer-BoldExtended.2c490a7c612f17e49e82.ttf
│   │           ├── Transducer-BoldExtended.86381e395972f4b94052.eot
│   │           ├── Transducer-BoldExtended.bbf9916196a105a6ae5e.woff
│   │           ├── Transducer-BoldExtended.f63fcf608554150bb5ed.woff2
│   │           ├── Transducer-Condensed.15a289dded7d7138d1c6.woff2
│   │           ├── Transducer-Condensed.43e8014020cc03cfe800.woff
│   │           ├── Transducer-Condensed.88b6bf823cde11a4c7e7.eot
│   │           ├── Transducer-Condensed.ed732e0648c259a3d1b8.ttf
│   │           ├── Transducer-Extended.582566feb1889d294b57.eot
│   │           ├── Transducer-Extended.88fea5fbdfd4ffa55b09.woff2
│   │           ├── Transducer-Extended.c334a13ddedc9044a3cb.ttf
│   │           ├── Transducer-Extended.fae6d8fa30f88be3c0f1.woff
│   │           ├── Transducer-Hairline.0da5f67edd12e1d09c04.eot
│   │           ├── Transducer-Hairline.4166d8f4b3e02ce5b2dc.woff
│   │           ├── Transducer-Hairline.905d6934688c3d2365e6.ttf
│   │           ├── Transducer-Hairline.fc2fa5c6430b14eac442.woff2
│   │           ├── Transducer-HairlineCondensed.33152a83bdfa04311299.eot
│   │           ├── Transducer-HairlineCondensed.4028322d1d7546e8a3f3.woff2
│   │           ├── Transducer-HairlineCondensed.5de185f6fb9d7339ed61.ttf
│   │           ├── Transducer-HairlineCondensed.c6753fcc9657bec1eb56.woff
│   │           ├── Transducer-HairlineExtended.1d106ffb4b7f46d03b60.woff
│   │           ├── Transducer-HairlineExtended.8bf23213138fc01f73b8.eot
│   │           ├── Transducer-HairlineExtended.a2872b5883d6bb4c4caf.ttf
│   │           ├── Transducer-HairlineExtended.e429337effc5bb69f5c8.woff2
│   │           ├── Transducer-Medium.35788366bbc639b3f97c.woff2
│   │           ├── Transducer-Medium.99f8f48126e1de1ac2d3.ttf
│   │           ├── Transducer-Medium.af809098968719348039.woff
│   │           ├── Transducer-Medium.f9eb0ce50d6af0d33b2c.eot
│   │           ├── Transducer-MediumCondensed.12df178e4c83da53675c.woff
│   │           ├── Transducer-MediumCondensed.c5e0e2a6d44b9d09c533.eot
│   │           ├── Transducer-MediumCondensed.eb1b8c21e05ee0b2b4db.woff2
│   │           ├── Transducer-MediumCondensed.f10918561bc6dd2b2cda.ttf
│   │           ├── Transducer-MediumExtended.3102d34d865f5b75f0ad.ttf
│   │           ├── Transducer-MediumExtended.6c24cb9381e7fc34cae5.woff
│   │           ├── Transducer-MediumExtended.70e5aafbe43e1048c4b5.woff2
│   │           ├── Transducer-MediumExtended.93b2185c999fcb70a01f.eot
│   │           ├── Transducer-Regular.06209ce82a384caa73c3.woff2
│   │           ├── Transducer-Regular.09c5d69d41988639ff86.ttf
│   │           ├── Transducer-Regular.3ae26edc001c77cee6f7.eot
│   │           └── Transducer-Regular.3c7c265793903bb11d6c.woff
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── 404.html
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── css
│       │   ├── common.scss
│       │   ├── font.scss
│       │   └── skill.scss
│       ├── fonts
│       │   ├── Hanwha_B.eot
│       │   ├── Hanwha_B.svg
│       │   ├── Hanwha_B.ttf
│       │   ├── Hanwha_B.woff
│       │   ├── Hanwha_B.woff2
│       │   ├── Hanwha_L.eot
│       │   ├── Hanwha_L.svg
│       │   ├── Hanwha_L.ttf
│       │   ├── Hanwha_L.woff
│       │   ├── Hanwha_L.woff2
│       │   ├── Hanwha_R.eot
│       │   ├── Hanwha_R.svg
│       │   ├── Hanwha_R.ttf
│       │   ├── Hanwha_R.woff
│       │   ├── Hanwha_R.woff2
│       │   ├── Transducer-Black.eot
│       │   ├── Transducer-Black.ttf
│       │   ├── Transducer-Black.woff
│       │   ├── Transducer-Black.woff2
│       │   ├── Transducer-BlackCondensed.eot
│       │   ├── Transducer-BlackCondensed.ttf
│       │   ├── Transducer-BlackCondensed.woff
│       │   ├── Transducer-BlackCondensed.woff2
│       │   ├── Transducer-BlackExtended.eot
│       │   ├── Transducer-BlackExtended.ttf
│       │   ├── Transducer-BlackExtended.woff
│       │   ├── Transducer-BlackExtended.woff2
│       │   ├── Transducer-Bold.eot
│       │   ├── Transducer-Bold.ttf
│       │   ├── Transducer-Bold.woff
│       │   ├── Transducer-Bold.woff2
│       │   ├── Transducer-BoldCondensed.eot
│       │   ├── Transducer-BoldCondensed.ttf
│       │   ├── Transducer-BoldCondensed.woff
│       │   ├── Transducer-BoldCondensed.woff2
│       │   ├── Transducer-BoldExtended.eot
│       │   ├── Transducer-BoldExtended.ttf
│       │   ├── Transducer-BoldExtended.woff
│       │   ├── Transducer-BoldExtended.woff2
│       │   ├── Transducer-Condensed.eot
│       │   ├── Transducer-Condensed.ttf
│       │   ├── Transducer-Condensed.woff
│       │   ├── Transducer-Condensed.woff2
│       │   ├── Transducer-Extended.eot
│       │   ├── Transducer-Extended.ttf
│       │   ├── Transducer-Extended.woff
│       │   ├── Transducer-Extended.woff2
│       │   ├── Transducer-Hairline.eot
│       │   ├── Transducer-Hairline.ttf
│       │   ├── Transducer-Hairline.woff
│       │   ├── Transducer-Hairline.woff2
│       │   ├── Transducer-HairlineCondensed.eot
│       │   ├── Transducer-HairlineCondensed.ttf
│       │   ├── Transducer-HairlineCondensed.woff
│       │   ├── Transducer-HairlineCondensed.woff2
│       │   ├── Transducer-HairlineExtended.eot
│       │   ├── Transducer-HairlineExtended.ttf
│       │   ├── Transducer-HairlineExtended.woff
│       │   ├── Transducer-HairlineExtended.woff2
│       │   ├── Transducer-Medium.eot
│       │   ├── Transducer-Medium.ttf
│       │   ├── Transducer-Medium.woff
│       │   ├── Transducer-Medium.woff2
│       │   ├── Transducer-MediumCondensed.eot
│       │   ├── Transducer-MediumCondensed.ttf
│       │   ├── Transducer-MediumCondensed.woff
│       │   ├── Transducer-MediumCondensed.woff2
│       │   ├── Transducer-MediumExtended.eot
│       │   ├── Transducer-MediumExtended.ttf
│       │   ├── Transducer-MediumExtended.woff
│       │   ├── Transducer-MediumExtended.woff2
│       │   ├── Transducer-Regular.eot
│       │   ├── Transducer-Regular.ttf
│       │   ├── Transducer-Regular.woff
│       │   └── Transducer-Regular.woff2
│       ├── index.css
│       ├── index.js
│       ├── layout
│       │   ├── Footer.js
│       │   └── Header.js
│       ├── logo.svg
│       ├── page
│       │   ├── Intro.js
│       │   ├── List.js
│       │   ├── Main.js
│       │   └── Skill.js
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── store
│           └── DarkTheme.js
└── server.js

```
