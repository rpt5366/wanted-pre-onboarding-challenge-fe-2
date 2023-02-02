## 과제 소개
원디트 프론트엔드 프리온보딩 챌린지 사전 과제입니다.
JSDoc를 이용하여 Todo 앱을 문서화합니다.

## 자기소개
반갑습니다, 프론트엔드 개발, React, Typescript에 관심이 많은 송형섭입니다. HTML, CSS, Javascript, WebGL API를 활용한 비행기 웹 게임 애플리케이션 개발에 참여한 경험, Node.js, MongoDB, React를 활용한 로그인 & 회원가입 개발 경험이 있습니다. 프론트엔드 지식을 넓히기 위해 평소 React 및 JS를 꾸준히 공부하고 있고, 이번 기회로 개발자 구인 시 우대사항 기술로도 자주 언급되는 Typescript 공부에 도전하여 추후 실전에서도 응용해 보고 싶어 지원하게 되었습니다. 이번 챌린지 참여가 Typescript와 프론트엔드 개발에 대한 심화된 이해로 이어지길 바라며, 이후 프론트개발 커리어로도 이어졌으면 좋겠습니다. 감사합니다.


## 챌린지 과제 가이드

>요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 JSDoc으로 문서화하는 챌린지 과제입니다.
- 모든 요구사항은 JSDoc을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-2로 생성해 주세요. (Public 권한 필요)
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
- JSDoc 환경 구성에 어색한 경우 [Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)를 이용하셔도 됩니다

## 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)