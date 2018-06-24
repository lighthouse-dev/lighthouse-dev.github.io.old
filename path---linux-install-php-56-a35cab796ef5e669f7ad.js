webpackJsonp([80704145972056],{877:function(e,n){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-05--linux-install-php56/index.md absPath of file >>> MarkdownRemark",html:'<h2>事前作業</h2>\n<ul>\n<li><a href="/linux-remi-release/">CentOS6系にremiレポジトリを追加する。</a></li>\n</ul>\n<h2>確認</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ php -v\n-bash: php: command not found</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep php\n$ rpm -qa | grep remi-release\nremi-release-6.8-1.el6.remi.noarch</code></pre>\n      </div>\n<h2>PHPをインストール</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum --enablerepo=remi-php56 install php\n\n... (省略)\nInstalled:\nphp.x86_64 0:5.6.26-1.el6.remi\n\nDependency Installed:\nlibedit.x86_64 0:2.11-4.20080712cvs.1.el6\nlibzip-last.x86_64 0:1.1.3-1.el6.remi\nphp-cli.x86_64 0:5.6.26-1.el6.remi\nphp-common.x86_64 0:5.6.26-1.el6.remi\nphp-pecl-jsonc.x86_64 0:1.3.10-1.el6.remi.5.6\nphp-pecl-zip.x86_64 0:1.13.4-1.el6.remi.5.6\n\nComplete!</code></pre>\n      </div>\n<h2>確認</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep php\nphp-common-5.6.26-1.el6.remi.x86_64\nphp-cli-5.6.26-1.el6.remi.x86_64\nphp-pecl-jsonc-1.3.10-1.el6.remi.5.6.x86_64\nphp-pecl-zip-1.13.4-1.el6.remi.5.6.x86_64\nphp-5.6.26-1.el6.remi.x86_64</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ php -v\nPHP 5.6.26 (cli) (built: Sep 15 2016 14:57:05)\nCopyright (c) 1997-2016 The PHP Group\nZend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies</code></pre>\n      </div>',fields:{slug:"/linux-install-php56/",prefix:"2017-12-05"},frontmatter:{title:"CentOS6系にPHP 5.6をインストールする",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/centos-2d7d5f9f2d0b1dd86637b1ea62e545db-ada8c.jpg"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア。<br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/linux-install-php56/"}}}});
//# sourceMappingURL=path---linux-install-php-56-a35cab796ef5e669f7ad.js.map