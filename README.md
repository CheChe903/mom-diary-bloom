# 산모수첩 앱 프로토타입

## 배포 URL

https://mom-diary-bloom.lovable.app/

## 페르소나

페르소나

임산부1

이름: 김다은
나이: 27세
역할: 임산부
목표: 산모수첩을 병원에서 받는데 수기로 작성하기 힘들어 휴대폰으로 관리해보고 싶다.
니즈: 하루 일기 작성, 몸 상태 기록 


임산부2

이름: 김윤화
나이: 31세
역할: 임산부
목표: 임산 주수 사진이나 초음파 사진을 기록해두고, 그때의 감정을 기록해두고 싶다.
니즈: 주수 사진 관리 기능, 하루 일기 기능

임산부3

이름: 김예빈
나이: 28세
역할: 임산부
목표: 내 몸상태가 괜찮은 지 판단이 어려울 때가 있다. 따라서 관련 AI 챗봇이 있으면 좋겠다.
니즈: AI 챗봇

사용자 시나리오 및 스토리

상황: 산모수첩을 효율적으로 관리하고 싶음. 기존은 수기로 작성했지만, 앱으로 관리하면 까먹지 않고 작성할 수 있음

사용자 시나리오:


1. 애플리케이션에서 하루 일기 접속
2. 오늘 일기 작성 버튼을 누름
3. 오늘 증상, 온도,  몸무게, 감정, 기분, 아기에게 할 말을 적음
4. 해당 방법으로 수기 수첩을 관리하지 않고, 앱으로 관리

사용자 스토리: 

산모로서, 저는 병원에서 주는 산모수첩을 수기로 직접 관리하지 않고, 휴대폰 애플리케이션으로 관리하고 싶습니다. 그래서 다음 진료 때까지 특이사항을 모두 정리할 수 있습니다.

상황: 주수 사진 및 초음파 사진을 관리하고 싶음

1. 애플리케이션에서 사진첩 접속
2. 새 사진 추가 버튼 클릭
3. 사진을 넣고, 내용 추가
4. 사진첩에서 관리 및 관람 가능

사용자 스토리:

저는 임신 주수 사진을 직접 찍는 사람입니다. 하지만 이 사진을 관리하기도 어렵고, 초음파 사진도 따로 관리하고 싶습니다. 그래서 아기 관련된 사진을 효율적으로 관리할 수 있습니다.


상황: 급하게 모르는 것이 생김 (잠을 잘 못자겠어요.)

1. 애플리케이션에서 AI 상담 클릭
2. 자주 묻는 질문이나 직접 적어 질문 
3. AI를 통한 즉각적인 임시 해결책을 통해 해결 가능


사용자 스토리:

저는 밤에 급하게 잠이 안올 때가 있었습니다. 그때마다 구글에 검색하여 찾느라 어려움을 느낀 적이 많습니다. 하지만 AI 챗봇을 이용한다면 곧바로 적당한 해결책을 받을 수 있습니다.

핵심 가치 제안:

1. 자원을 효율적 관리: 기존에 수기로 작성하던 산모 수첩을 앱으로 효율적 관리
2. 즉각적 피드백: AI 봇을 통한 유의사항이나 문제 해결법 제공
3. 공유 사회 조성: 커뮤니티를 통한 고민 해결 등 가능


핵심 기능

1. 하루 일기를 작성할 수 있다. 일기에는 몸 상태 기록, 몸무게 기록, 온도 기록, 하루 감정, 기분, 아기에게 할 말이 있다.
2. 주수 사진, 초음파 사진을 관리하는 사진 첩이 있다.
3. 진료일을 관리한다.
4. 나에게 맞는 주수별 유의사항을 한 번에 체크할 수 있다.
5. AI 챗봇을 통해 급한 문제에 대한 해결책 대안을 즉각적으로 받을 수 있다.
6. 산모 커뮤니티를 통해 공유 사회를 조성한다.






# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/045f6332-4945-4ac0-9371-06f5259620e1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/045f6332-4945-4ac0-9371-06f5259620e1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/045f6332-4945-4ac0-9371-06f5259620e1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
