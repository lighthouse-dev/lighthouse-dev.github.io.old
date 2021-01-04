webpackJsonp([0xca5dca938e6],{896:function(n,s){n.exports={data:{post:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/posts/2018-03-08--php-console-log/index.md absPath of file >>> MarkdownRemark",html:'<h1 id="概要">概要</h1>\n<p><code class="language-text">console.log()</code>は、ブラウザの開発ツールで<code class="language-text">JSのデバッグ</code>などでよく使ってますよね。</p>\n<p>これをサーバー側でも使うことができます。</p>\n<p>（多分）ほとんどの言語がこのやり方で、使えます。</p>\n<p>今回は、PHPで作ってみました！</p>\n<br>\n<h1 id="使い方">使い方</h1>\n<p>とは言っても、大した事はしてませんし、\nただデーターをスクリプト言語に入れただけなんです。</p>\n<div class="gatsby-code-title gatsby-remark-code-title">sample.php</div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">function</span> <span class="token function">console_log</span><span class="token punctuation">(</span> <span class="token variable">$data</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token single-quoted-string string">\'&lt;script>\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">echo</span> <span class="token single-quoted-string string">\'console.log(\'</span><span class="token punctuation">.</span> <span class="token function">json_encode</span><span class="token punctuation">(</span> <span class="token variable">$data</span> <span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token single-quoted-string string">\')\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">echo</span> <span class="token single-quoted-string string">\'&lt;/script>\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token variable">$myvar</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">console_log</span><span class="token punctuation">(</span> <span class="token variable">$myvar</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3]</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<p>これで終わりです！</p>\n<br>\n<h1 id="まとめ">まとめ</h1>\n<p>すごくシンプルで、思ったより使えるかも。</p>\n<br>\n<h1 id="参考">参考</h1>\n<ul>\n<li><a href="http://php.net/manual/ja/debugger.php">PHP: PHP のデバッグ - Manual</a></li>\n</ul>',fields:{slug:"/php-console-log/",prefix:"2018-03-08"},frontmatter:{title:"console.logをphpで使う（PHP Debug）",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/php-logo-5f81f1b2118e564a1010d189809d29f8-160fa.png"}}}}},author:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/php-console-log/"}}}});
//# sourceMappingURL=path---php-console-log-37627b574942a060de7e.js.map