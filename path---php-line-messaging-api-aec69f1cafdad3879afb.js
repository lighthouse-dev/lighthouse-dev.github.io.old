webpackJsonp([0xfb2932a9b3e5],{894:function(n,s){n.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2018-03-10--PHP-LINE-MessagingAPI/index.md absPath of file >>> MarkdownRemark",html:'<p>PHPでMessaging APIを動かすサンプルを紹介したいと思います。</p>\n<p>※ LINE@MANAGERの設定については、あとで追記します！</p>\n<br>\n<h1>Messaging APIの説明</h1>\n<p>ユーザー、グループ、またはトークルームからのイベントに対して応答メッセージを送信するAPIです！</p>\n<p>イベントが発生するとwebhookを使って通知され、応答できるイベントには応答トークンが発行されるそうです。</p>\n<h4>注意点</h4>\n<ul>\n<li>応答トークンは一定の期間が経過すると無効になるため、メッセージを受信したらすぐに応答を返す必要があります。</li>\n<li>応答トークンは1回のみ使用できます。</li>\n</ul>\n<br>\n<h1>メッセージオブジェクト</h1>\n<p>以下は、送信するメッセージの内容を表すJSONオブジェクトです。</p>\n<ul>\n<li>テキスト</li>\n<li>画像</li>\n<li>動画</li>\n<li>音声</li>\n<li>位置情報</li>\n<li>スタンプ</li>\n<li>イメージマップ</li>\n<li>テンプレート</li>\n</ul>\n<p>この中で「テンプレートメッセージ」を見てみましょう！</p>\n<h2>テンプレートメッセージ</h2>\n<p>テンプレートメッセージは、あらかじめレイアウトが定義されたテンプレートをカスタマイズして構築するメッセージです。</p>\n<blockquote>\n<p>事前定義されたレイアウトが用意されており、よりリッチなユーザー体験の提供に役立ちます。</p>\n</blockquote>\n<p>らしいです。また、以下のタイプのテンプレートを利用できます。</p>\n<ul>\n<li>ボタン</li>\n<li>確認</li>\n<li>カルーセル</li>\n<li>画像カルーセル</li>\n</ul>\n<p>さっそく触ってみましょう！</p>\n<h3>画像カルーセルテンプレート</h3>\n<p>複数の画像を表示するテンプレートです。画像は横にスクロールして順番に表示できます。</p>\n<p>以下のような感じです！</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/img-1-c2f0f4be933ef6576f9a211d1df4065b-c72db.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: 0 !important; max-width: 546px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 178.38827838827837%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFBklEQVRIx+WV/W9TVRjH7z/iS2IiIBBhOARkIll0MBfccEQ0AUOmGGJMiEaRGdkUjEyyRQSDMYa48LLujfcOopExDI5tMKBr721vb7u+bX1b31+2buu+PufcdtxCSUzgN5t8c07v8zyf8z3nPO0Vbt2zYEQahWwfg1lxw2LzcOXnouzEwG0jLl65jqE7Eqyjah4Tqxk2yOi/ZeR5d0asEIxmB0yyax6ilcXGRhctaMPgsAiDaMvlubhkmt8zKWCmRKsbBjImKA4PFIfqxmzz0vigfOTETzkBGn0FOWwu272wkWs7LW63uyH03vSi53oAkmyH2TxAuqnRACSpn6vweV79sFiMGFJ8uKRMQE8SWs9HcPzcFAZvD0I2tUEa6SR1wEyjeK8NFtNZWIxnIBl0/BmLqaL4iA6KSY92JYomaxot1hSEv4c8+OOGH7JlUIUZz8JMkka64FCuI5WIIBkLYdTaB9NdBjpD8TM8T6QcBtQRkMGOKEkINocLoy46D/Og6syoFoiGTrhHB5BORJGIBDFq+wt25SJk8Rzldas5OSBz2EzAnxiQ3aakFAJ5AW3VeFeHa2d/x7ljzaR6dP26DwN9xyFLKvSRQH5jGqBooET5IjqO7sXeyjVorC7Dwa0V+LKqDFfaf4DNeolyujVbjnDgkWJAiV9ANwfur6tBw+ZytOyuQ+O2TThQWw7d4S+oRfR0YV0FDluUNA6TCoDsFtmFsNXtih6tP+7BrvWlaG/+Fge2V6Nu1VJ0/vI1nWcPz5E4sIcDD9Et/2YNaYEDtKqOb5fdpiKfR9vPe1G3egkOfbwNp5rq0fzZDowMt9Gi3bk8HRy2q6jffxAffbqHetkMwcJ+Zqzj5dvUJpfhtP1JLXIFY+5rOLbvE+ze+CpONDXgqu44jn7+Ae3iAhRLD6ySnm78PDyufjQ0fIN9X9XD4/EQkP8BuBAMReHzjWN8fAzBYIBGD1xOB1LJJLVOArFwGOlUEtnZGWSzs6QZAFmk05NUG6H8cS4ONFmcCEeTMBgM6Ovrw/DwMIaGbuHGjX+QyWRQ7DOXGyenphGJJiCKInp7e+87DExEuZt4PI4EOYpEInwempggx8F5hcmp3+/nbubmyOFkBtFYEtPTNEajeaATE+EYL3C73fwsxsbG4PV6EQgEMEFQNmfPmONsNovZ2VnuUAUm4MvFCxyyjbDEvFihWpydfzY3p242P6bTU4jFk/xcWfwBIAoK8vOCs8s9z8dSBIwnUvOx+8DQfeCcptjljcAxHobHH8VkZuahxdKTjwJqHGo1RRCmzPQM3/p/BgZzDrMFW6IzpTMMhpNITWaKblkLzGaLOCzWb+FYmhzOFo0zYCwHZB8h/7ZTHOPcZTAUKxBrJ9a4oUi8SCwOpydAf9A+/t3rn/9zUKHMaTGZqE+ZHo45IVldvJb92vh7WftSf1yxF7/wuBDtDpmEJ+FMq/8jUOTt8OQkuL0hPAl5chJOdfbgRPslnO66jJPtej4/1aHHSab2nDo0YnGqOT2vyzy/9fQFtLZdgLC4tBJVtTvx9MJ1WFL6Jl5cvQkrX6vl48KSCixasRHPL3sDi0o20HwDFr9UieeWluOZRevw7Avr8dSCMixfuxXv7fwOW3Y0Qli25i1sqKnDguUVKHmlGqXr3kZ51ftYU/4OWKxkbQ2WEXw5xVaUbcbL67dgycoqnq8u9jpWlW/Htl3f490P9+NfZ560uikWOuQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="img 1"\n        title=""\n        src="/static/img-1-c2f0f4be933ef6576f9a211d1df4065b-c72db.png"\n        srcset="/static/img-1-c2f0f4be933ef6576f9a211d1df4065b-f4034.png 200w,\n/static/img-1-c2f0f4be933ef6576f9a211d1df4065b-855d9.png 400w,\n/static/img-1-c2f0f4be933ef6576f9a211d1df4065b-c72db.png 546w"\n        sizes="(max-width: 546px) 100vw, 546px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>サンプルコード</h3>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$replyToken</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>Webhookで受信する応答トークン<span class="token operator">></span>\n<span class="token variable">$accessToken</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>アクセストークン<span class="token operator">></span>\n\n<span class="token variable">$messageData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token double-quoted-string string">"type"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"template"</span><span class="token punctuation">,</span>\n    <span class="token double-quoted-string string">"altText"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"this is a image carousel template"</span><span class="token punctuation">,</span>\n    <span class="token double-quoted-string string">"template"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n        <span class="token double-quoted-string string">"type"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"image_carousel"</span><span class="token punctuation">,</span>\n        <span class="token double-quoted-string string">"columns"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n            <span class="token punctuation">[</span>\n                <span class="token double-quoted-string string">"imageUrl"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"https://example.com/bot/images/item1.jpg"</span><span class="token punctuation">,</span>\n                <span class="token double-quoted-string string">"action"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n                    <span class="token double-quoted-string string">"type"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"postback"</span><span class="token punctuation">,</span>\n                    <span class="token double-quoted-string string">"label"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"Buy"</span><span class="token punctuation">,</span>\n                    <span class="token double-quoted-string string">"data"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"action=buy&amp;itemid=111"</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n                <span class="token double-quoted-string string">"imageUrl"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"https://example.com/bot/images/item2.jpg"</span><span class="token punctuation">,</span>\n                <span class="token double-quoted-string string">"action"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n                    <span class="token double-quoted-string string">"type"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"message"</span><span class="token punctuation">,</span>\n                    <span class="token double-quoted-string string">"label"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"Yes"</span><span class="token punctuation">,</span>\n                    <span class="token double-quoted-string string">"text"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"yes"</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n                <span class="token double-quoted-string string">"imageUrl"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"https://example.com/bot/images/item3.jpg"</span><span class="token punctuation">,</span>\n                <span class="token double-quoted-string string">"action"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n                  <span class="token double-quoted-string string">"type"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"uri"</span><span class="token punctuation">,</span>\n                  <span class="token double-quoted-string string">"label"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"View detail"</span><span class="token punctuation">,</span>\n                  <span class="token double-quoted-string string">"uri"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token double-quoted-string string">"http://example.com/page/222"</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token single-quoted-string string">\'replyToken\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable">$replyToken</span><span class="token punctuation">,</span>\n    <span class="token single-quoted-string string">\'messages\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token variable">$messageData</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">error_log</span><span class="token punctuation">(</span><span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'https://api.line.me/v2/bot/message/reply\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POST</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_CUSTOMREQUEST</span><span class="token punctuation">,</span> <span class="token single-quoted-string string">\'POST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POSTFIELDS</span><span class="token punctuation">,</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_HTTPHEADER</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span>\n    <span class="token single-quoted-string string">\'Content-Type: application/json; charser=UTF-8\'</span><span class="token punctuation">,</span>\n    <span class="token single-quoted-string string">\'Authorization: Bearer \'</span> <span class="token punctuation">.</span> <span class="token variable">$accessToken</span>\n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">error_log</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>上のサンプルコードを実行すると、以下のような感じでメッセージ届く！！</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/img-2-59f8dd808c57582c1751fc7ed4a79dd0-53ec1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: 0 !important; max-width: 640px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 128.125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAABYlAAAWJQFJUiTwAAACWklEQVRIx61VC4/aMAzO//9lA92YhHgJkDgQ2h2PPpImTZNSPNulXJ+33bZIn9w69lfbiV0xe5WwPCgIIzMA/SmCB6p38W0dw8tWQhDq/wIRxgnESkOSGFB/CLKNYw2qx08YY8DaFNL0a1DKgDFdvdAaN/CBiNtIB/XmQVg+1/eY8On4kNXXtNbPvQ/ytEVY+fYR1iI7n89wOBywVnGNdJiwkoOEp9MJdrsdRFGENba/JayeG4RtqZR6pv9lwr875a6vSBLNxa+j72TbIMK2H0FYmwGtoigYtPI857plWTaIJEnBe8/2t9sN7vc7gyOcTqd8onQIi8UCgiBgQzLoW6TP8zu8v59gNpvB8XiEzWbDEGlqYblcMtl2u4X5fN4gHIL3BYRhxAHs93tYrVawXq9BOOc59yRJQErZiOKzlTkqS8a+5EeSlsjzMn+qXyXLWt4ZQxFa67F2RcfvSVgHUI2w0H171T4TPsjqEPmteKTYTNViKU6BLAPtKYHNPEbULQtHWD8AWh515EDS+ZwjadvUCStdGWEPocaTp+hiHJghDlEi/SdCjxc7w5QJxjoufofQ+mcjNGpYGTfr4+Aa449LajiHklPvXBuMsO9qYadYbOoM4bBHS2kxKof3jOAxXUovtaW+klKlbE+RGmPxXTMEETh3w4mLEm+/RqMM3xNt2Ukq+vmkg9BoR4MiDBVE+MMTNJknkx9wxXYbjca4KWE0HvOAoCFQDokuSO+cg8vlgq165U7Z7V5BXK8B9i8NhBBevk94NFFP0iT5IOxOm4qQ+p5Afj/f3uAX4R7f5eN+YrIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="img 2"\n        title=""\n        src="/static/img-2-59f8dd808c57582c1751fc7ed4a79dd0-53ec1.png"\n        srcset="/static/img-2-59f8dd808c57582c1751fc7ed4a79dd0-0d528.png 200w,\n/static/img-2-59f8dd808c57582c1751fc7ed4a79dd0-fb89a.png 400w,\n/static/img-2-59f8dd808c57582c1751fc7ed4a79dd0-53ec1.png 640w"\n        sizes="(max-width: 640px) 100vw, 640px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>以上！</p>',fields:{slug:"/PHP-LINE-MessagingAPI/",prefix:"2018-03-10"},frontmatter:{title:"PHPでLINEのMessaging APIを使ってメッセージを送る",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/line-logo-d26b0d932a27f7a0405cc15d65652b01-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/PHP-LINE-MessagingAPI/"}}}});
//# sourceMappingURL=path---php-line-messaging-api-aec69f1cafdad3879afb.js.map