webpackJsonp([0x872cc5553945],{881:function(e,o){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2018-04-14--php-error-posix-getpwuid/index.md absPath of file >>> MarkdownRemark",html:'<p>PHPで以下のエラーが発生した時の対応をメモ。</p>\n<br>\n<h1>エラー内容</h1>\n<blockquote>\n<p>PHP Fatal error: Uncaught Error: Call to undefined function Laravel\\Envoy\\posix_getpwuid()</p>\n</blockquote>\n<br>\n<h1>解決方法</h1>\n<p><code class="language-text">php-posix</code>をインストールすることで簡単に解決。</p>\n<h2>1. php-posixをインストール</h2>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">sudo yum install --enablerepo=remi-php71 php-posix</code></pre>\n      </div>\n<h2>2. Apach再起動</h2>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">service httpd restart</code></pre>\n      </div>',fields:{slug:"/php-error-posix-getpwuid/",prefix:"2018-04-14"},frontmatter:{title:"PHP Fatal error: Uncaught Error: Call to undefined function Laravel\\Envoy\\posix_getpwuid() エラー対応",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/php-logo-5f81f1b2118e564a1010d189809d29f8-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア。<br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/php-error-posix-getpwuid/"}}}});
//# sourceMappingURL=path---php-error-posix-getpwuid-3260a458f415d9ee8de1.js.map