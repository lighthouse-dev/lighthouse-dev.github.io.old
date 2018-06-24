webpackJsonp([27045848281623],{880:function(e,a){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-05--linux-remi-release/index.md absPath of file >>> MarkdownRemark",html:'<h1>事前作業</h1>\n<ul>\n<li>remi-releaseは、epel-releaseに依存性(dependency)がある。</li>\n<li><a href="/linux-epel-release/">CentOS6系にepel-releseをインストールする。</a></li>\n</ul>\n<br>\n<h1>確認</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep remi-release\n$ rpm -qa | grep epel-release\nepel-release-6-8.noarch</code></pre>\n      </div>\n<br>\n<h1>remi-releaseをインストール</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\n\n$ ... (省略)\nInstalled:\nremi-release.noarch 0:6.8-1.el6.remi\n\nComplete!</code></pre>\n      </div>\n<br>\n<h1>確認</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep remi-release\nremi-release-6.8-1.el6.remi.noarch</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum list remi-release\n\n... (省略)\nInstalled Packages\nremi-release.noarch                     6.8-1.el6.remi                     @/remi-release-6</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum repolist | grep remi\n* remi-safe: mirror.innosol.asia\nremi-safe                  Safe Remi&#39;s RPM repository for Enterprise Linu    881</code></pre>\n      </div>',fields:{slug:"/linux-remi-release/",prefix:"2017-12-05"},frontmatter:{title:"CentOS6系にremiレポジトリを追加する",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/centos-2d7d5f9f2d0b1dd86637b1ea62e545db-ada8c.jpg"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/linux-remi-release/"}}}});
//# sourceMappingURL=path---linux-remi-release-3060b7aa580cd4cbedce.js.map