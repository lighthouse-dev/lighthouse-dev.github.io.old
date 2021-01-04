webpackJsonp([0xdab12fab923e],{878:function(n,s){n.exports={data:{post:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/posts/2018-12-22--angular-firebase-send-push-notifications-2/index.md absPath of file >>> MarkdownRemark",html:'<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->\n<!-- code_chunk_output -->\n<ul>\n<li>\n<p><a href="#push-%E6%A9%9F%E8%83%BD%E5%AE%9F%E8%A3%85firebase-functions-%E5%81%B4">Push 機能実装：Firebase Functions 側</a></p>\n<ul>\n<li><a href="#firebase-%E3%81%AE-functions-%E3%82%92%E5%88%9D%E6%9C%9F%E5%8C%96%E3%81%97%E9%96%A2%E6%95%B0%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B">Firebase の functions を初期化し、関数を作成する</a></li>\n<li><a href="#indexts-%E3%82%92%E4%BF%AE%E6%AD%A3">index.ts を修正</a></li>\n</ul>\n</li>\n<li><a href="#%E3%81%BE%E3%81%A8%E3%82%81">まとめ</a></li>\n<li><a href="#%E3%81%8A%E3%81%BE%E3%81%91">おまけ</a></li>\n<li><a href="#%E5%8F%82%E8%80%83-url">参考 URL</a></li>\n</ul>\n<!-- /code_chunk_output -->\n<h1 id="push-機能実装：firebase-functions-側">Push 機能実装：Firebase Functions 側</h1>\n<p><a href="/angular-firebase-send-push-notifications-1">Angular + Firebase + PWA で Push 通知機能を実装する（アプリ側）</a>\nに引き続き、Firebase Functions 側の実装です。</p>\n<h2 id="firebase-の-functions-を初期化し、関数を作成する">Firebase の functions を初期化し、関数を作成する</h2>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">firebase init functions</code></pre>\n      </div>\n<p>※ 作成の詳細手順については、<a href="https://firebase.google.com/docs/functions/get-started?hl=ja">こちら</a>を見てください！</p>\n<br>\n<p>初期化すると、以下の構成になります！</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">myproject\n  +- .firebaserc    # Hidden file that helps you quickly switch between\n  |                 # projects with `firebase use`\n  |\n  +- firebase.json  # Describes properties for your project\n  |\n  +- functions/     # Directory containing all your functions code\n      |\n      +- package.json  # npm package file describing your Cloud Functions code.\n      |\n      +- tsconfig.json # Config file containing compiler options.\n      |\n      +- tslint.json   # Optional file containing rules for TypeScript linting.\n      |\n      +- src/     # Directory containing TypeScript source\n      |   |\n      |   +- index.ts     # main source file for your Cloud Functions code\n      |\n      +- lib/\n          |\n          +- index.js     # JavaScript output from TypeScript source.\n          |\n          +- index.js.map # Sourcemap file for TypeScript source.\n</code></pre>\n      </div>\n<p>ここからは、functions/src/index.ts を修正していきますー！</p>\n<h2 id="indexts-を修正">index.ts を修正</h2>\n<p>DB に更新がある度に、トリガーによって <code class="language-text">onCreate()</code> が実行されます。</p>\n<p>また、DB に保存されている FCM トークンを取得し、メッセージデータを用いてユーザーに送信するペイロードが作られます。</p>\n<div class="gatsby-code-title gatsby-remark-code-title">functions/src/index.ts</div>\n<div class="gatsby-highlight">\n      <pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> functions <span class="token keyword">from</span> <span class="token string">\'firebase-functions\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> admin <span class="token keyword">from</span> <span class="token string">\'firebase-admin\'</span><span class="token punctuation">;</span>\nadmin<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> fcmSend <span class="token operator">=</span> functions<span class="token punctuation">.</span>database\n  <span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token comment">// ←ここは、各自のDB構造に合わせて定義してください（例：/article/{articleId}）</span>\n  <span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token punctuation">(</span>snapshot<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> articleInfo <span class="token operator">=</span> snapshot<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>\n      notification<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token comment">// Pushメッセージのタイトル</span>\n        body<span class="token punctuation">:</span> articleInfo<span class="token punctuation">.</span>title <span class="token operator">+</span> <span class="token string">\'が登録されました 🎉\'</span><span class="token punctuation">,</span> <span class="token comment">// Pushメッセージ本文</span>\n        clickAction<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token comment">// Push通知をタップした時に、飛ばすURLを指定</span>\n        icon<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token comment">// Push通知で使うロゴ</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    admin\n      <span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">\'/fcmTokens/\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> tokenList <span class="token operator">=</span> token<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\n        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>tokenList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tokenList<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          admin\n            <span class="token punctuation">.</span><span class="token function">messaging</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">sendToDevice</span><span class="token punctuation">(</span>tokenList<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n              <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Sent Successfully\'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n              <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>これで実装完了です！</p>\n<p>実際に、こんな感じで Push 通知が飛んできます。</p>\n<img src="https://qiita-image-store.s3.amazonaws.com/0/128271/9a5062ac-19e2-53ed-f152-720c0ba59efe.png" width="30%">\n<p><br><br></p>\n<p>今回は、特定のユーザー一人一人に Push 通知を送信していますが、</p>\n<p>複数ユーザーにメッセージを送信することもできるらしいので、<a href="https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja">こちら</a>もぜひ参考にしてください！</p>\n<br>\n<h1 id="まとめ">まとめ</h1>\n<p>Firebase 本当最高！👍👍👍</p>\n<br>\n<h1 id="おまけ">おまけ</h1>\n<p>今回の実装を含めた個人プロジェクトを開発し、運用しています。</p>\n<p>このテーマで、<a href="https://frontend-conf.fukuoka.jp/">FRONTEND CONFERENCE FUKUOKA2018</a>でお話させていただきました。</p>\n<p>スライドなどを公開してますので、興味ある方は是非見てください！</p>\n<ul>\n<li>テーマ：Angular と Firebase で作った PWA 対応アプリで家庭内の課題を解決した話」</li>\n<li>公式プロフィール ：<a href="https://frontend-conf.fukuoka.jp/sessions#c-6">https://frontend-conf.fukuoka.jp/sessions#c-6</a></li>\n<li>スライド：<a href="https://slides.com/lighthouse-dev/fec_fukuoka/#/">https://slides.com/lighthouse-dev/fec_fukuoka/#/</a></li>\n</ul>\n<br>\n<h1 id="参考-url">参考 URL</h1>\n<ul>\n<li><a href="https://angularfirebase.com/lessons/send-push-notifications-in-angular-with-firebase-cloud-messaging/#manifest-json">https://angularfirebase.com/lessons/send-push-notifications-in-angular-with-firebase-cloud-messaging/#manifest-json</a></li>\n<li><a href="https://firebase.google.com/docs/cloud-messaging/js/client?hl=ja">https://firebase.google.com/docs/cloud-messaging/js/client?hl=ja</a></li>\n<li><a href="https://firebase.google.com/docs/functions/get-started?hl=ja">https://firebase.google.com/docs/functions/get-started?hl=ja</a></li>\n<li><a href="https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja">https://firebase.google.com/docs/cloud-messaging/js/send-multiple?hl=ja</a></li>\n</ul>',fields:{slug:"/angular-firebase-send-push-notifications-2/",prefix:"2018-12-22"},frontmatter:{title:"Angular + Firebase + PWAでPush通知機能を実装する（Firebase Functions側）",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/angular-firebase-logo-4d677ee544f358ba6f204f21fee75be5-160fa.png"}}}}},author:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/angular-firebase-send-push-notifications-2/"}}}});
//# sourceMappingURL=path---angular-firebase-send-push-notifications-2-b04b83d976e751314592.js.map