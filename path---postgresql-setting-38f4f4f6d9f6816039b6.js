webpackJsonp([0xa0b1569755ab],{850:function(s,n){s.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-26--postgresql-setting/index.md absPath of file >>> MarkdownRemark",html:'<h1>/config/app.phpを修正</h1>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token single-quoted-string string">\'Datasources\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n    <span class="token single-quoted-string string">\'default\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n        <span class="token single-quoted-string string">\'className\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Cake\\Database\\Connection\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'driver\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Cake\\Database\\Driver\\Postgres\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'persistent\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'host\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'localhost\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'username\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'★★\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'password\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'★★\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'database\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'★★\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'encoding\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'utf8\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'timezone\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'UTC\'</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'cacheMetadata\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token single-quoted-string string">\'log\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>CakePHP3ではデフォルトで、Mysqlのドライバを参照する設定となっている</p>\n<p>そのため、Postgresqlを使用予定で php-mysqlをインストールしていない場合は、以下のようなエラーが発生する</p>\n<br>\n<blockquote>\n<p>Database driver Cake\\Database\\Driver\\Mysql cannot be used due to a missing PHP extension or unmet dependency</p>\n</blockquote>\n<p>上記の<code class="language-text">app.php</code>の中に、‘default’と同じように ‘test’ 側も</p>\n<p><code class="language-text">&#39;driver&#39; =&gt; &#39;Cake\\Database\\Driver\\Postgres&#39;</code> に変える必要がある。</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code class="language-php"><span class="token single-quoted-string string">\'test\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n    <span class="token single-quoted-string string">\'className\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Cake\\Database\\Connection\'</span><span class="token punctuation">,</span>\n    <span class="token single-quoted-string string">\'driver\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token single-quoted-string string">\'Cake\\Database\\Driver\\Postgres\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n</code></pre>\n      </div>',fields:{slug:"/postgresql-setting/",prefix:"2017-12-26"},frontmatter:{title:"CakePHP3.xでPostgreSQLの設定",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/postgresql-d09265e7e979bea321e525817ec407b5-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>source code on <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">GitHub</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/postgresql-setting/"}}}});
//# sourceMappingURL=path---postgresql-setting-38f4f4f6d9f6816039b6.js.map