webpackJsonp([0xa2c7ec49ad98],{893:function(n,a){n.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-25--webrtc-basic/index.md absPath of file >>> MarkdownRemark",html:'<p>こんにちは！\n<a href="https://qiita.com/advent-calendar/2017/fusic">Fusic Advent Calendar 2017</a> 21日目の記事です。</p>\n<p><code class="language-text">WebRTC</code>を触ってみた話をさせていただきます。</p>\n<h1>WebRTCとは</h1>\n<p>WebRTC(Web Real-Time Communication)は、ウェブブラウザーの間で特定のプラグインがなくても通信できるAPIです。</p>\n<p><a href="https://ja.wikipedia.org/wiki/World_Wide_Web_Consortium">W3C</a>で提示された草案であり、</p>\n<p>映像、音声、P2Pファイル共有などで活用できます。</p>\n<h3>WebRTC API</h3>\n<p>WebRTCで提供するAPIは以下の三つです！</p>\n<h4>1. MediaStream</h4>\n<p>ユーザー端末機のビデオ、マイクにアクセスできます。</p>\n<p><code class="language-text">getUserMedia</code>を使ってアクセスし、MedisStreamオブジェクトを<code class="language-text">PeerConnection</code>に渡して転送することになります。</p>\n<h4>2. PeerConnection</h4>\n<p>一番重要なAPIであり、ブラウザ間でビデオ、音声などのやりとりするAPIです！</p>\n<h4>3. DataChannel</h4>\n<p>ブラウザ間でのテキストやファイルなどをやりとりします。</p>\n<h2>事前準備</h2>\n<ul>\n<li>Webサーバー</li>\n<li><a href="http://lighthouse-dev.hatenablog.com/entry/2018/03/08/230508">Node.js</a></li>\n<li>WebSocket</li>\n</ul>\n<h2>カメラを触ってみよう</h2>\n<p>Webサーバーに以下のサンプルコードを作成し、試してみましょう！</p>\n<h4>サンプルコード</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!doctype html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Self Camera<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myVideo<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript">\n      navigator<span class="token punctuation">.</span>getUserMedia <span class="token operator">=</span> navigator<span class="token punctuation">.</span>getUserMedia <span class="token operator">||</span> navigator<span class="token punctuation">.</span>webkitGetUserMedia <span class="token operator">||</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>mozGetUserMedia<span class="token punctuation">;</span>\n      window<span class="token punctuation">.</span>URL <span class="token operator">=</span> window<span class="token punctuation">.</span>URL <span class="token operator">||</span> window<span class="token punctuation">.</span>webkitURL<span class="token punctuation">;</span>\n\n      <span class="token keyword">var</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'myVideo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> localStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n      navigator<span class="token punctuation">.</span><span class="token function">getUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span>video<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> audio<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n      <span class="token keyword">function</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// for success case</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        video<span class="token punctuation">.</span>src <span class="token operator">=</span> window<span class="token punctuation">.</span>URL<span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// for error case</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>最初ブラウザーからアクセスすると、カメラにアクセスしてもいいかどうかの確認ダイアログが表示されるので、</p>\n<p>OKボタンを押して許可してください。</p>\n<h2>シグナリングサーバーを動かす</h2>\n<h4>・WebRTCの通信について</h4>\n<p>WebRTCでは、映像や音声などリアルタイムに取得されたデータを、ブラウザ間で送受信することができます。\nそれを司るのが　RTCPeerConnection です。 RTCPeerConnectionには2つの特徴があります。</p>\n<ul>\n<li>Peer-to-Peer(P2P)の通信 → ブラウザとブラウザの間で直接通信する</li>\n<li>UDP/IPを使用 → TCP/IPのようにパケットの到着は保障しないが、オーバーヘッドが少ない(らしい)</li>\n</ul>\n<h4>・P2P通信を行うために</h4>\n<p>ブラウザ間でP2P通信を行うには、</p>\n<ul>\n<li>相手のIPアドレスを</li>\n<li>動的に割り振られるUDPのポート番号</li>\n</ul>\n<p>を知る必要があります。</p>\n<p>そのために、WebRTCでは以下の情報をやり取りしています。</p>\n<h5>SDP (Session Description Protocol)</h5>\n<ul>\n<li>セッションが含むメディアの種類（音声、映像）、</li>\n<li>メディアの形式（コーデック）</li>\n<li>IPアドレス、ポート番号 などなど</li>\n</ul>\n<h6>ICE (Interactive Connectivity Establishment)</h6>\n<ul>\n<li>P2Pによる直接通信</li>\n<li>NATを通過するためのSTUNサーバーから取得したポートマッピング → 最終的にはP2Pになる</li>\n<li>Firefallを越えるための、TURNによるリレーサーバーを介した中継通信</li>\n</ul>\n<h4>・シグナリングサーバーを動かしてみよう！</h4>\n<p>P2Pを始めるまでの情報のやり取りを「シグナリング」と言います。</p>\n<p>シグナリングサーバーは、クライアントからメッセージを受け取ったら他のクライアントに送信する役割をします。</p>\n<h5>WebSocketをのインストール</h5>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">npm install ws</code></pre>\n      </div>\n<h5>シングルサーバーサンプルコード</h5>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">"use strict"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> WebSocketServer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'ws\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Server<span class="token punctuation">;</span>\n<span class="token keyword">let</span> port <span class="token operator">=</span> <span class="token number">9000</span><span class="token punctuation">;</span> <span class="token comment">//ポート番号は必要に応じて変更してください。</span>\n<span class="token keyword">let</span> wsServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocketServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token punctuation">:</span> port <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'websocket server start. port=\'</span> <span class="token operator">+</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nwsServer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'connection\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>ws<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'-- websocket connected --\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        wsServer<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">each</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSame</span><span class="token punctuation">(</span>ws<span class="token punctuation">,</span> client<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'- skip sender -\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">isSame</span><span class="token punctuation">(</span>ws1<span class="token punctuation">,</span> ws2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// -- compare object --</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>ws1 <span class="token operator">===</span> ws2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h5>シングルサーバーを起動</h5>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">node signaling.js</code></pre>\n      </div>\n<p>シグナリングサーバーの動作はシンプルで、クライアントからメッセージを受け取ったら他のクライアントに送信するだけです。</p>\n<h2>実際に動かしてみよう！（結果）</h2>\n<p>ブラウザーからアクセスし、スクリプトを読み込むと</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.1796875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAARlAAAEZQAGA43XUAAABE0lEQVQoz4WQXU/CQBBF/f8P/hNjjGIwEYygRaEQFGnoBwVLK4bElJZuBWk5dheiL4KT3MzszeTMzR7leU6eZci+2WwK5WqWygpflu/7uKMR7fot69VKeXL3rzpaJAkiTUmEYB5FRPFCzdKX/XO5JI5jwjAkXcTq+EGg2e8zcV2G5oBatUKr0cAyDF6HDl7hv3ketu0QBAHrf2AKOC6f4dUqjG+uMEqnmOVznOtL9Z7cVbEvTpjp2ha0+5aDCb3HOla3w8R4YWoNmA2topsYDxqDjo7X1BDN2m79F8g+4Pt9nXlXJ+3pJE8tJfGsI3pSbURH48Md0/XXTMOvn3R7EzqzjHDJwQpiOC5FNOztYpbvB34DBSYTtcfzUwUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="webrtc image 1"\n        title=""\n        src="/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-48538.png"\n        srcset="/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-bed0f.png 200w,\n/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-5fd34.png 400w,\n/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-48538.png 800w,\n/static/webrtc-image-1-f89fb3319cc5b634871bd3dd41dfb3e6-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.56640625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAARlAAAEZQAGA43XUAAAB1klEQVQoz42SW08TURRGJ4pJE8FEKdOZM/cLZWgpguWihsiP8kfBiwIJMTGRJx95JUQTL5RGSarS6Vx6m04/95yCkWoTHlb2OQ+zZu99PoHJBTBJJApQFQm2qcK1NVhUVSbjwfR9rFWf4MOnr6hdNFD73sCvsI2wlyJOgKg/5PUaQWESMnSNYWHeQGnBwiJR8iy6m5jLP8KzzQ00miHaKRB0E2LwR/SPUFNkZBRdk4uKrgGvaPJaXnSgyCKekvCHH6KT3hSMy7jQMnXoKsO8o3NhJrsmEzIpPyZMuWhih45twjQ0EtK4nn0lG4mXSi4kcXZih/9DMHQVjmWAyRIsg3Fp1lml7MKlnxTEPLa3X9xemHXoFV3MTM8gl8vRPiXIhVk634MgCJi6ewdbW89vL9xcr2JjbRXr1RUa0aNzFbu7OzjY38PhwT72Xr/Cu6MjtNr9iQ9xQ5g9SJa7Mo3qWApWH1fQvLyknCU4vfiJsNNDOqCY/JW7ceJkRNgbQnAd8yp3Nj2MhhUSfjuv4f3pZ7zceYvjj18QBy0EJIwmdBX1R9BGKDaGzhef5U6ce4jlyhLq9TriKEInChC0fDR9H3G3jw597LcHRMJpxqMadodoEW9OzvAbtg9xi9RtUd8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="webrtc image 2"\n        title=""\n        src="/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-48538.png"\n        srcset="/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-bed0f.png 200w,\n/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-5fd34.png 400w,\n/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-48538.png 800w,\n/static/webrtc-image-2-cd4f04ca6c842528d7b693dbc2f2ca6e-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>こんな感じです！</p>\n<h2>最後に</h2>\n<p>何よりも<a href="https://fusic.co.jp/doings/184">Fusic開発合宿</a>で普段から自分が作りたかったものや</p>\n<p>新しい技術を勉強できて、とても楽しめたと思います！</p>\n<p>まだまだいけてないところや課題もたくさんあるんですが、引き続き勉強しつつ発展させていきたいと思います！！</p>\n<h2>参考</h2>\n<ul>\n<li><a href="https://html5experts.jp/series/webrtc2016/">WebRTC入門2016</a> 大変参考になりました！！</li>\n<li>あと、<a href="https://webrtc.ecl.ntt.com/">SkyWay</a>というサービスもありますので、参考までに・・</li>\n</ul>',fields:{slug:"/webrtc-basic/",prefix:"2017-12-25"},frontmatter:{title:"WebRTCでビデオチャットアプリを作ってみた！",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/webrtc-a33184a387d52572f89920be055d5c4d-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア。<br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/webrtc-basic/"}}}});
//# sourceMappingURL=path---webrtc-basic-d56c3555b2ba149935f9.js.map