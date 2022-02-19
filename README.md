<h1 align="center"> 상품 등록 과제 </h1>

<h3 align="center"> 서비스 링크 : https://fervent-tereshkova-9b041a.netlify.app/</h3>

<p align="center"><img width="500" src="https://bit.ly/3HyINHE" /></p>

## 👏 프로젝트 소개

> 자신이 원하는 데이터를 선택하여 효율적으로 이용할 수 있는 기능을 가진 물류 정보 처리 웹 구현

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능 |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :-------- |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) |           |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   |           |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    |           |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   |           |

## 🚀 스택

`React`
`Styled-components`

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/coloseum_sheet.git

# install modules
$ cd coloseum_sheet
$ npm ci || yarn install

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "@reduxjs/toolkit": "^1.7.2",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.26.0",
    "nanoid": "^3.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.0"
  },
```

## 📂 파일 구조

     ├── public
     └── src
         ├── components
         │   ├── Cards/
         │   ├── ItemCard/
         │   ├── ItemSheet/
         │   └── SelectView/
         ├── layout
         │   ├── MainPage
         │   └── PortalButton
         ├── constants/
         ├── store
         │   └── index.js
         └── utils
          

## ✨ 구현 사항

- [x] column 항목 고정
  - [x] 테이블의 제목을 고정하여 중요 정보는 스크롤을 하여도 이동이 되지 않아 항시 확인할 수 있도록 한다. 
  - [x] 항목의 체크박스 체크시 column 우선 순위 부여기능 -> 해당 항목이 가장 왼쪽으로 이동
- [X] 오름차순 / 내림차순 정렬(sort)
- [ ] 대분류로 분류를 구분하여 데이터의 체계를 만들기
- [X] 항목 호버 / 클릭했을 때 십자 표시 
  - [X] 항목을 클릭하면 십자모양으로 백그라운드를 표시해준다. 
- [X] 스크롤 포탈 버튼
  - [X] 대략적인 위치의 row 이동 빠른 가능
- [ ] 전체 체크 해제 버튼 (초기화) 버튼
- [ ] 체크되지 않은 불필요한 column 접기

## 🗺 한 눈으로 보는 구현 기능

1. 첫 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

2. 두 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

## 💡 과제 후기

### **우종원** 🍀

### **박중섭** ✨

### **이태림** 🐯

### **임수영** 🐧
