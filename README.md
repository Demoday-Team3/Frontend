# 📍 기억 저장 및 공유 서비스
24-여름방학에 진행한 토이 프로젝트입니다. 




## 📌 기능

### 그룹

- **그룹 생성**  그룹명, 대표 이미지, 소개, 공개 여부, 비밀번호 입력으로 생성
- **그룹 수정/삭제** 등록 비밀번호 확인 후 정보 수정 및 삭제 가능
- **그룹 목록 조회** 모든 그룹 목록 조회 가능하며, 공개 여부, 디데이, 배지 수, 추억 개수, 공감 수 등 표시. 정렬과 검색 기능 제공
- **그룹 상세 조회** 그룹 클릭 시 상세 정보와 추억 목록을 확인할 수 있으며, 비공개 그룹은 비밀번호 필요. 공감 기능 제공

### 추억 (게시글)

- **추억 작성/수정/삭제** 닉네임, 제목, 이미지, 내용, 태그, 장소, 공개 여부, 비밀번호 입력으로 추억을 등록 및 수정, 삭제 가능
- **추억 목록 조회** 그룹 상세 조회 시 해당 그룹의 추억 목록을 확인. 정렬 및 검색 가능
- **추억 상세 조회** 선택한 추억의 상세 정보와 공감, 댓글 목록을 조회 가능

### 댓글

- **댓글 작성/수정/삭제** 닉네임, 댓글 내용, 비밀번호를 입력해 댓글 작성 가능. 수정 및 삭제는 비밀번호 확인 필요
- **댓글 조회** 추억 조회 시 해당 댓글 목록 확인 가능

### 배지 시스템

- 특정 조건 충족 시 자동으로 배지 획득:
  - 7일 연속 추억 작성
  - 총 20개 추억 등록
  - 그룹 1년 경과
  - 그룹 공감 1만 개 달성
  - 개별 추억 공감 1만 개 달성


 
    
 
## 📌 기술 스택
|                |                                                        |
|----------------|--------------------------------------------------------|
| Node.js        | <img src="https://nodejs.org/static/images/logo.svg" width="50" />     |
| Express.js     | <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" width="50" /> |
| MySQL          | <img src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" width="50" /> |
| JavaScript     | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="50" /> |
| React          | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50" /> |





## 메인 페이지(그룹)
[![2024-08-22-225517.png](https://i.postimg.cc/xCTbR4VW/2024-08-22-225517.png)](https://postimg.cc/rd3mygmJ)

## 그룹 추가
[![2024-08-30-205751.png](https://i.postimg.cc/xCwN2TzS/2024-08-30-205751.png)](https://postimg.cc/Hctk0mzS)


The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
