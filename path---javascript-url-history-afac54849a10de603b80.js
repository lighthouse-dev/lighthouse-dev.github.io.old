webpackJsonp([0xd1f6ee7d085b],{881:function(s,n){s.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2019-07-09--javascript-url-history/index.md absPath of file >>> MarkdownRemark",html:'<h1>ページをリロードせずに、URLを変更したい</h1>\n<p>HTML5では<code class="language-text">history.pushState()</code>および<code class="language-text">history.replaceState()</code>メソッドが導入され、</p>\n<p>それぞれにより履歴エントリの追加と修正が可能となりました。 </p>\n<p>つまり、ページをリロードせずに、ページURLだけ変える時に使います！</p>\n<blockquote>\n<p>history.pushState( state, title, url );</p>\n</blockquote>\n<ul>\n<li><code class="language-text">state</code>: 変更するURLと一緒に保存するデーターオブジェクト</li>\n<li><code class="language-text">title</code>: 変更するブラウザーのタイトルを指定。Firefoxではまだ対応してないらしいので、空白（’ ‘）で指定すれば良いと思います。</li>\n<li><code class="language-text">url</code>: 指定したURLを履歴に追加し、URLを変更する</li>\n</ul>\n<p>URLと一緒にデーターを保存することもできるので、とても便利です！\nこのデーターに変わるページのデーターを入れておいて、クライアント側でそのデーターを活用し、新しいページをレンダリングすれば良いです。</p>\n<br>\n<p>例えば、<code class="language-text">test.com</code>ページで、URLを<code class="language-text">test.com/users/list</code>にしたい場合は、以下のように指定します！</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">let</span> stateObj <span class="token operator">=</span> <span class="token punctuation">{</span> hoge<span class="token punctuation">:</span> <span class="token string">\'hoge\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> changeUrl <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path <span class="token operator">+</span> <span class="token string">\'/users/list\'</span><span class="token punctuation">;</span>\n\n\nhistory<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span>stateObj<span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> changeUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>こうすると、URLが<code class="language-text">test.com/users/list</code>に変わるだけで、ページには何も変化がありません。</p>\n<p>少し順番を説明しますと、</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'/hoge1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \nhistory<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'/hoge2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nhistory<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'/hoge3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>このように履歴を3回追加したあとに、ブラウザの戻るボタンをクリックしていくと</p>\n<p><code class="language-text">test.com/hoge3&quot;</code> → <code class="language-text">test.com/hoge2</code> → <code class="language-text">test.com/hoge1</code> → <code class="language-text">test.com</code></p>\n<p>の順に、ブラウザのURLが変わっていきます。 (リロードはしないので、ページの内容は変わりません)</p>\n<br>\n<h1><code class="language-text">history.pushState()</code>と<code class="language-text">history.repalceState()</code>の違いは？</h1>\n<blockquote>\n<p>history.repalceState( state, title url );</p>\n</blockquote>\n<p>現在のURL履歴が書き換えられます。</p>\n<p>要は、現在のURL履歴が書き換えられるので、[戻る] ボタンが活性化にならず、URLだけが変わるということ。</p>\n<br>\n<p>例えば、<code class="language-text">test.com</code>から以下を実行すると、</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">history<span class="token punctuation">.</span><span class="token function">relpaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">"/hoge1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>URLが<code class="language-text">test.com</code>から<code class="language-text">test.com/hoge1</code>に変わりますが、ブラウザの戻るボタンを押しても、一つ前の<code class="language-text">test.com</code>には戻りません。</p>\n<p>つまり、履歴に<strong>追加されない</strong>ということ。 まとめると、、</p>\n<h2>pushState()</h2>\n<ul>\n<li>履歴に新しいURLを追加する。</li>\n<li><code class="language-text">test.com</code>を一つ前のURLとしておいて、新しいURLとして<code class="language-text">test.com/hoge1</code>を追加するということ。</li>\n<li>そのため、前のURLが残っているので、[戻る]ボタンで<code class="language-text">test.com</code>に戻ることでできます。</li>\n</ul>\n<h2>replaceState()</h2>\n<ul>\n<li>前のURLを消して、URLを変更します。</li>\n<li><code class="language-text">test.com</code>というURL履歴を削除し、<code class="language-text">test/com/hoge1</code>を追加するということ。</li>\n<li>なので、ブラウザの[戻る]ボタンを押しても、一つ前の<code class="language-text">test.com</code>には戻りません。</li>\n</ul>\n<br>\n<h1>その他</h1>\n<h3>前のページに戻る</h3>\n<blockquote>\n<p>history.back()</p>\n</blockquote>\n<p>これにより、ちょうどユーザーがブラウザのツールバーの「前のページに戻る」ボタンをクリックしたときのような挙動がなされます。</p>\n<h3>次のページへ進む</h3>\n<blockquote>\n<p>history.forward()</p>\n</blockquote>\n<p>同様に、このようにすることで（ユーザーが「次のページへ進む」ボタンをクリックしたかのように）次のページへ進むこともできます。</p>\n<p>これらの関数呼び出し後も同様に、popStateイベントが発生します。</p>\n<br>\n<h1>参考URL</h1>\n<ul>\n<li><a href="https://developer.mozilla.org/ja/docs/Web/Guide/DOM/Manipulating_the_browser_history">ブラウザの履歴を操作する - ウェブデベロッパーガイド | MDN</a> </li>\n</ul>',fields:{slug:"/javascript-url-history/",prefix:"2019-07-09"},frontmatter:{title:"JavaScriptでURLを操作する",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/javascript-logo-023b780108063f6d5146de27c105e2fe-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP, Laravel) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / UI&#x26;UX Design ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/javascript-url-history/"}}}});
//# sourceMappingURL=path---javascript-url-history-afac54849a10de603b80.js.map