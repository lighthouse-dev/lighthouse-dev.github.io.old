---
title: "Angular + Firebase + PWAでPush通知機能を実装する（Firebase Functions側）"
subTitle: ""
category: "Firebase"
cover: angular-firebase-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

[Angular + Firebase + PWAでPush通知機能を実装する（アプリ側）](/angular-firebase-send-push-notifications-1)
に引き続き、Firebase Functions側の実装です。

<br>

## Push機能実装：Firebase Functions側

### Firebaseのfunctionsを初期化し、関数を作成する

```cmd
firebase init functions
```

※ 作成の詳細手順については、[こちら](https://firebase.google.com/docs/functions/get-started?hl=ja)を見てください！

<br> 

初期化すると、以下の構成になります！

```json
myproject
  +- .firebaserc    # Hidden file that helps you quickly switch between
  |                 # projects with `firebase use`
  |
  +- firebase.json  # Describes properties for your project
  |
  +- functions/     # Directory containing all your functions code
      |
      +- package.json  # npm package file describing your Cloud Functions code.
      |
      +- tsconfig.json # Config file containing compiler options.
      |
      +- tslint.json   # Optional file containing rules for TypeScript linting.
      |
      +- src/     # Directory containing TypeScript source
      |   |
      |   +- index.ts     # main source file for your Cloud Functions code
      |
      +- lib/
          |
          +- index.js     # JavaScript output from TypeScript source.
          |
          +- index.js.map # Sourcemap file for TypeScript source.
```

ここからは、functions/src/index.ts を修正していきますー！

<br>

### index.tsを修正

DBに更新がある度に、トリガーによって `onCreate()` が実行されます。

また、DBに保存されているFCMトークンを取得し、メッセージデータを用いてユーザーに送信するペイロードが作られます。

```typescript:title=functions/src/index.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const fcmSend = functions.database
  .ref('') // ←ここは、各自のDB構造に合わせて定義してください（例：/article/{articleId}）
  .onCreate((snapshot, context) => {
    const articleInfo = snapshot.val();

    const payload = {
      notification: {
        title: '', // Pushメッセージのタイトル
        body: articleInfo.title + 'が登録されました 🎉', // Pushメッセージ本文
        clickAction: '', // Push通知をタップした時に、飛ばすURLを指定
        icon: '', // Push通知で使うロゴ
      },
    };

    admin
      .database()
      .ref('/fcmTokens/')
      .once('value')
      .then((token) => {
        const tokenList = token.val() || '';

        Object.keys(tokenList).forEach(function(key, index) {
          console.log(tokenList[key]);
          admin
            .messaging()
            .sendToDevice(tokenList[key], payload)
            .then((res) => {
              console.log('Sent Successfully', res);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
```
これで実装完了です！

実際に、こんな感じでPush通知が飛んできます。

<img src="https://qiita-image-store.s3.amazonaws.com/0/128271/9a5062ac-19e2-53ed-f152-720c0ba59efe.png" width=30%>

今回は、特定のユーザー一人一人にPush通知を送信していますが、

複数ユーザーにメッセージを送信することもできるらしいので、[こちら](https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja)もぜひ参考にしてください！

<br>

# まとめ

Firebase本当最高！👍👍👍

<br>

# おまけ

今回の実装を含めた個人プロジェクトを開発し、運用しています。

このテーマで、[FRONTEND CONFERENCE FUKUOKA2018](https://frontend-conf.fukuoka.jp/)でお話させていただきました。

スライドなどを公開してますので、興味ある方は是非見てください！

- テーマ：AngularとFirebaseで作ったPWA対応アプリで家庭内の課題を解決した話」
- 公式プロフィール ：[https://frontend-conf.fukuoka.jp/sessions#c-6](https://frontend-conf.fukuoka.jp/sessions#c-6)
- スライド：[https://slides.com/lighthouse-dev/fec_fukuoka/#/](https://slides.com/lighthouse-dev/fec_fukuoka/#/)

<br>

# 参考URL

- [https://angularfirebase.com/lessons/send-push-notifications-in-angular-with-firebase-cloud-messaging/#manifest-json](https://angularfirebase.com/lessons/send-push-notifications-in-angular-with-firebase-cloud-messaging/#manifest-json)
- [https://firebase.google.com/docs/cloud-messaging/js/client?hl=ja](https://firebase.google.com/docs/cloud-messaging/js/client?hl=ja)
- [https://firebase.google.com/docs/functions/get-started?hl=ja](https://firebase.google.com/docs/functions/get-started?hl=ja)
- [https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja](https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja)
