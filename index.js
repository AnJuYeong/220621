// git 프로젝트

// git은 무엇인가?

// 1. 형상관리도구중에 하나
// 형상관리 도구: 버전 관리 시스템
// 작업을 하면서 작업의 리스트를 관리 할 수 있다.

// 2. git의 장점
// 협업하는 단계에서 소스 코드를 파일로 주고 받을 필요 없이 같은 파일을
// 팀원들과 동시에 병렬로 작업이 가능하다.

// A가 작업을 하고 -> B한테 작업을 넘겨주는데
// A랑 B랑 메인페이지를 같이 작업을 하고 있는데
// A는 상품페이지. B는 장바구니 페이지
// 파일로 넘겨주고 어디가 다른지 눈으로 보고 이렇게
// 작업을 하면 시간도 오래걸리고 버그도 잡기 힘들다.
// 코드가 어디가 다른지 찾기 힘들다.

// 서버에 서로 푸쉬를 하면 서버에 있는 파일이 자동으로 갱신된다.
// A랑 B랑 작업을 하는데
// C라는 새로운 팀원이 생겼는데 A랑 B랑 파일을 C한테 파일을 줄 필요없이
// C는 git이라는 저장소에서 클론으로 파일을 내려받아서 바로 작업이 가능하다.

// git 설치

// git init
// 새로운 git 저장소를 생성할 때 사용하는 git 명령어

// git 저장소를 생성한 폴더에서
// 숨김파일 보기를 체크하면 .git

// git add 커밋을 추가하는데 git저장소에 추가하려고 대기
// git add README.md 이렇게 쓰면 git저장소에 README.md 추가하려고 대기

// git commit -m 커밋 메시지를 작성할 수 있다.
// git commit -m "first commit" 이거면 저장소에 추가하면서
// 메시지는 first commit이 메시지가 보인다.

// git branch -M 이건 마스터 브런치를 설정한다.
// git branch -M main 이렇게 하면 main이라는 마스터 브런치 설정

// git remote add origin 깃 저장소 링크를 추가한다.
// orgin : 복제한 원격 git 저장소의 기본 이름
// git remote : origin 복제한 url을 참조하기 위해 호출
// git remote add origin https://github.com/AnJuYeong/220621.git 이건
// https://github.com/AnJuYeong/220621.git (자신의 깃 저장소 주소)를
// 추가해준다.

// cd "들어갈 폴더" : 경로 변경하는데
// cd .. : 경로가 한 단계 위로 올라간다.

// ls : 경로에 있는 파일 구조를 볼 수 있다.

// git 저장소가 초기화 된 경로인지 확인 잘하고 사용
// 초기화 경로는 git init을 한 경로

// git push -u origin main 깃 저장소에 첫 커밋을 푸쉬

// 소스제어 탭을 선택시 git 그래프에 변경사항중 파일이름 옆에

// U : 저장소에 없는 새로운 파일

// M : 저장소에 파일은 있는데 내용이 변경됐을 때

// D : 저장소에 있는 파일이 제거됐을 때

// 1. git 설정
// 사용자 설정
// 깃을 사용할 때 사용하는 깃의 사용자 셋팅
// git config --globla user.name "자기 닉네임"
// git config --globla user.email "자기 이메일"

// 설정 정보 조회
// git 설정이 제대로 되었는지 확인
// git config --global --list

// git 저장소 초기화 저장소 생성
// git의 저장소로 지정할 경로로 이동해서
// git init

// git 저장소 복제 (파일 내려받기)
// git clone (url)

// git 저장소 추가
// git remote add origin "git저장소 url"

// git 사용
// 스테이징에 추가
// git add 파일명(확장자 까지)

// 커밋 메시지
// git commit -m "작업 내용"

// 현재 브런치 변경
// git switch "브런치 이름"

// 브런치 목록 전부 보기
// git branch -r

// 로컬 깃 브런치 목록 전부 보기
// git branch -a

// 브런치 추가
// git branch "추가하고 싶은 브런치 이름"

// 브런치 제거
// git branch -D "제거할 브런치 이름"

// 리드미 작성

// 1. 글씨의 크기
// #을 입력하고 뒤에 글씨를 작성
// #은 5개까지 입력할 수 있다.
// #의 갯수가 많을수록 작다.

// 2. 코드 사용
// ```(사용하는 언어) 백틱 3개로 시작하는데 뒤에 사용할 언어를 붙여준다.
// ```백틱 3개로 닫아준다.

// 3. 링크 사용
// 링크를 넣고 싶으면
// [링크의이름] 표시될 링크의 문자
// (url) 접속할 주소

// 4. 목록 추가
// *로 목록 표현

// 5. 테이블 추가
// |,--- 이걸로 구분할 수 있다.
// 형태는 
// 1    | 2    | 3
// ---  |---   |---
// 제목 | 이름 | 날짜

// 6. 이미지 추가
// 이슈 탭에 가서 새로운 이슈 생성
// 쓰기창에 이미지를 드래그해서 넣으면
// ![pa](https://user-images.githubusercontent.com/107897959/174937234-36751224-7b5a-4d96-8edf-f02bd9ddc2c2.jpg)
// 이렇게 뜨는데 그대로 복사해서 사용하면 된다.