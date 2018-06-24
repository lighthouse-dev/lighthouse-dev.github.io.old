webpackJsonp([0x9c615e594a8],{898:function(n,s){n.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2018-03-17--typescript-basic/index.md absPath of file >>> MarkdownRemark",html:'<p>こんにちは。</p>\n<p>福岡は昨日から急に寒くなりました・・</p>\n<p>早く暖かくなって欲しいです 🌸</p>\n<br>\n<p>最近個人で<code class="language-text">Angular</code>の勉強を始めました！！</p>\n<p><code class="language-text">Angular</code>では<code class="language-text">TypeScript</code>を使う必要があるため、</p>\n<p><code class="language-text">TypeScript</code>について勉強するきっかけになりました。</p>\n<p>ということで、今回は、<code class="language-text">TypeScript</code>についてまとめた内容を紹介したいと思います！</p>\n<br>\n<h1>TypeScriptとは</h1>\n<ul>\n<li>MSとGoogleが協業で開発。</li>\n<li><code class="language-text">TypeScript</code>は、新しい言語ではなく、ES6のスーパーセット。</li>\n<li><code class="language-text">TypeScript</code>コードは、ES6コードと100%互換。</li>\n</ul>\n<p>👇以下の図みたいな感じ。</p>\n\n  <a class="gatsby-resp-image-link" href="/static/typescript-1-f637512530247d04bab0fbc1cb4e83c6-1e2e0.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-left: 0 !important; max-width: 540px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 76.85185185185185%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGyK/C9MJ//xAAaEAEAAgMBAAAAAAAAAAAAAAABAgMABBES/9oACAEBAAEFAtq5hIsthg9Nqlk1HuAcP//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQMBAT8BE1f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREjFRYYH/2gAIAQEABj8CUI+mV31YnyKcdoxoo//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhQVH/2gAIAQEAAT8heGrLRsZAxqrXCNwXOveh9ltxfVqEYwKn/9oADAMBAAIAAwAAABBMD//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxAsXU//xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QVyf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRcYH/2gAIAQEAAT8QWI+gDgDqb/BJR90+TWyB4lwFwNO1QzYyg1QgML53dk0joeBP/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;" alt="typescript 1" title="" src="/static/typescript-1-f637512530247d04bab0fbc1cb4e83c6-1e2e0.jpg" srcset="/static/typescript-1-f637512530247d04bab0fbc1cb4e83c6-1727b.jpg 200w,\n/static/typescript-1-f637512530247d04bab0fbc1cb4e83c6-d19ac.jpg 400w,\n/static/typescript-1-f637512530247d04bab0fbc1cb4e83c6-1e2e0.jpg 540w" sizes="(max-width: 540px) 100vw, 540px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br>\n<h1>インストール方法</h1>\n<p>インストール方法は、すごく簡単。</p>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">npm install -g typescript</code></pre>\n      </div>\n<br>\n<h1>TypeScriptを使うメリット</h1>\n<p><code class="language-text">TypeScript</code>のメリットは以下です！</p>\n<ul>\n<li>タイプ</li>\n<li>クラス</li>\n<li>デコレータ</li>\n<li>インポート</li>\n<li>言語ユーティリティー</li>\n</ul>\n<h2>タイプ</h2>\n<p>ES5から改善された点がいくつかありますが、まず1つ目は「タイプが指定できること」です。</p>\n<p>タイプ指定に対応していないJavaScriptを好む方も一部いると思いますが、</p>\n<p>タイプを指定できることによって、いろんなメリットが生まれます。</p>\n<blockquote>\n<ol>\n<li>コードを”作成する時”に、バグを減らすことができる（コンパイルエラーになるため）</li>\n<li>コードを”読む時”に、コードを書いた人の意図がはっきり分かる</li>\n</ol>\n</blockquote>\n<p>もちろん<code class="language-text">TypeScript</code>でタイプを指定しないことも可能です。</p>\n<p>例えば、サンプルコードを書いてみたりする時には、タイプを省略し、後から指定することもできます。</p>\n<h3>タイプ指定の例</h3>\n<h4>変数</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> name<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>関数</h4>\n<p>関数を宣言する時も、次のようにパラメーターとリターンどちらもタイプを指定できます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">sample</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> string <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">"Hello"</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>タイプの種類</h3>\n<ul>\n<li>string</li>\n<li>number</li>\n<li>boolean</li>\n<li>Array</li>\n<li>列挙型</li>\n<li>any</li>\n<li>void</li>\n</ul>\n<p>それでは、タイプの種類を一つずつ見ていきましょう！</p>\n<h4>1. string</h4>\n<p>文字列は、<code class="language-text">string</code>タイプで宣言します。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> name<span class="token punctuation">:</span> string <span class="token operator">=</span> <span class="token string">\'jslee\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>2. number</h4>\n<p>言葉通り”数字”を表すタイプ。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> age<span class="token punctuation">:</span> number <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>3. boolean</h4>\n<p>true / false</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> married<span class="token punctuation">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>4. Array</h4>\n<p>配列タイプです。</p>\n<p>配列はコレクションなので、配列の中でもオブジェクトのタイプを指定する必要があります。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> languages<span class="token punctuation">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'golang\'</span><span class="token punctuation">,</span> <span class="token string">\'JavaScript\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> languages<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'golang\'</span><span class="token punctuation">,</span> <span class="token string">\'JavaScript\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="language-text">number</code>も一緒です。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> hogehoge<span class="token punctuation">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hogehoge<span class="token punctuation">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>5. 列挙型</h4>\n<p>列挙型は、<code class="language-text">enum</code>を使います！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">enum</span> Role <span class="token punctuation">{</span>Employee<span class="token punctuation">,</span> Manager<span class="token punctuation">,</span> Admin<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> role<span class="token punctuation">:</span> Role <span class="token operator">=</span> Role<span class="token punctuation">.</span>Admin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>列挙型のデフォルト値は<code class="language-text">0</code>ですが、</p>\n<p>次のように指定することもできます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">enum</span> Role <span class="token punctuation">{</span>Employee <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Manager<span class="token punctuation">,</span> Admin<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">/*この場合、列挙型の値は「3」から始まります。\n  なので、「Manager=4」,「Admin=5」になります。*/</span>\n<span class="token keyword">var</span> role<span class="token punctuation">:</span> Role <span class="token operator">=</span> Role<span class="token punctuation">.</span>Admin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>もちろん、項目毎に指定することも可能！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">enum</span> Role <span class="token punctuation">{</span>Employee <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Manager <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> Admin <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> role<span class="token punctuation">:</span> Role <span class="token operator">=</span> Role<span class="token punctuation">.</span>Admin<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>指定した値を使う時は</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">enum</span> Role <span class="token punctuation">{</span>Employee <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Manager <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> Admin <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Roles: \'</span><span class="token punctuation">,</span> Role<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\',\'</span><span class="token punctuation">,</span> Role<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\'and\'</span><span class="token punctuation">,</span> Role<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>6. any</h4>\n<p><code class="language-text">any</code>は、変数のタイプを省略する時に、デフォルトで指定されるタイプです。</p>\n<p><code class="language-text">any</code>タイプの変数は、どんな値も受け取ることができます！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> something<span class="token punctuation">:</span> any <span class="token operator">=</span> <span class="token string">\'string\'</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nsomething <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>7. void</h4>\n<p><code class="language-text">void</code>は、“タイプが無い”という意味です。</p>\n<p>一般的にリターン値がない関数で使うことが多いですね。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> String<span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>クラス</h2>\n<p>ES5では、クラスの代わりに「プロトタイプ」が使われましたが、</p>\n<p>ES6では、<code class="language-text">JavaScript</code>にクラスが導入されました！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">sampleClass</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>クラスには、プロパティとメソッド、コンストラクタを持たせます。</p>\n<h4>プロパティ</h4>\n<p>プロパティは、クラスのインスタンスに属するデータを定義します！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  firtName<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n  lastName<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n  age<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>メソッド</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n  age<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n  \n  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Personタイプの変数を宣言、インスタンス生成</span>\n<span class="token keyword">var</span> p<span class="token punctuation">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\np<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">\'jslee\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// メソッドを呼び出す</span>\np<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>コンストラクタ</h4>\n<p>コンストラクタ（constructor）は、皆さんもご存知の通りインスタンスが生成される時に実行されるメソッドですね。</p>\n<p>コンストラクタは、以下のルールを持ってます！</p>\n<ul>\n<li>名前は、必ず<code class="language-text">constructor</code>にする。</li>\n<li>パラメータはあってもなくても良いが、値はリターンしない。</li>\n<li>コンストラクタを指定していない場合は、自動で作られる。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">sampleClass</span> <span class="token punctuation">{</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 処理  </span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>継承(Inheritance)</h4>\n<p><code class="language-text">extends</code>キーワードを使って、継承します！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">sampleClass</span> <span class="token keyword">extends</span> <span class="token class-name">parentClass</span> <span class="token punctuation">{</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 処理  </span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>ユーティリティー</h2>\n<p>ES6, TypeScriptは、プログラミングをもっと楽しめる多くの文法構造を提供してます！</p>\n<p>その中でも、以下の二つを紹介します。</p>\n<ul>\n<li>アロー関数</li>\n<li>テンプレート文字列</li>\n</ul>\n<h3>アロー関数</h3>\n<p>アロー関数（=>）は、関数を作成するための縮約形表記です。</p>\n<h4>ES5での例</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> languages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'TypeScript\'</span><span class="token punctuation">,</span> <span class="token string">\'C++\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nlanguages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>アロー(=>)関数の書き方</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> languages<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'TypeScript\'</span><span class="token punctuation">,</span> <span class="token string">\'C++\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nlanguages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> language <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>アロー(=>)は、<code class="language-text">$this</code>を共有できる</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES5</span>\n<span class="token keyword">var</span> hoge <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'jslee\'</span><span class="token punctuation">,</span>\n  languages<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'TypeScript\'</span><span class="token punctuation">,</span> <span class="token string">\'C++\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  print<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>languages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// this.nameは定義されてないので、self.nameを使う必要がある。</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\'が\'</span> <span class="token operator">+</span> language <span class="token operator">+</span> <span class="token string">\'でコードを書いとる\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES6, TypeScript - thisを共有するため、以下のように作成できる </span>\n<span class="token keyword">var</span> hoge <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'jslee\'</span><span class="token punctuation">,</span>\n  languages<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'PHP\'</span><span class="token punctuation">,</span> <span class="token string">\'TypeScript\'</span><span class="token punctuation">,</span> <span class="token string">\'C++\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  print<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>languages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>language<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\'が\'</span> <span class="token operator">+</span> language <span class="token operator">+</span> <span class="token string">\'でコードを書いとる\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>テンプレート文字列</h3>\n<p>ES6, TypeScriptでは、新しいテンプレート文字列が導入されました！</p>\n<ul>\n<li>文字列中に変数（ +でつなぐ必要がなくなった ）</li>\n<li>多行（multi-line）文字列</li>\n</ul>\n<h4>文字列中に変数（string interpolation）</h4>\n<p>文字列の中に変数を使うことができるのがコツ。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">\'js\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> lastName  <span class="token operator">=</span> <span class="token string">\'lee\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>$lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>多行文字列(multi-line)</h4>\n<p>多行文字列(multi-line)機能は、長い文字列をコードに書く時に役に立ちそうです！</p>\n<p>テンプレートのように使えるっていうのが良さそうですね。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token string">`\n&lt;div>\n  &lt;h1>HogeHoge&lt;/h1>\n  &lt;p>jslee&lt;/p>\n&lt;/div>\n`</span></span>\n</code></pre>\n      </div>\n<br>\n<h1>まとめ</h1>\n<p>少々長くなりましたが、ざっくりこんな感じです！</p>\n<p>また追加したい内容があったら、追記していきます👍</p>\n<br>\n<p>以上！</p>',fields:{slug:"/typescript-basic/",prefix:"2018-03-17"},frontmatter:{title:"TypeScript入門",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/typescript-logo-a569b3ab9eeadbac9e5568a6bf83fc89-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/typescript-basic/"}}}});
//# sourceMappingURL=path---typescript-basic-2a92a80a2e9d05c4bdef.js.map