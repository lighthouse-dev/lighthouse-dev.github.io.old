webpackJsonp([27045848281623],{854:function(e,a){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-05--linux-remi-release/index.md absPath of file >>> MarkdownRemark",html:'<h2>事前作業</h2>\n<ul>\n<li>remi-releaseは、epel-releaseに依存性(dependency)がある。</li>\n<li><a href="/linux-epel-release/">CentOS6系にepel-releseをインストールする。</a></li>\n</ul>\n<h2>確認</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep remi-release\n$ rpm -qa | grep epel-release\nepel-release-6-8.noarch</code></pre>\n      </div>\n<h2>remi-releaseをインストール</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\n\n$ ... (省略)\nInstalled:\nremi-release.noarch 0:6.8-1.el6.remi\n\nComplete!</code></pre>\n      </div>\n<h2>確認</h2>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa | grep remi-release\nremi-release-6.8-1.el6.remi.noarch</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum list remi-release\n\n... (省略)\nInstalled Packages\nremi-release.noarch                     6.8-1.el6.remi                     @/remi-release-6</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum repolist | grep remi\n* remi-safe: mirror.innosol.asia\nremi-safe                  Safe Remi&#39;s RPM repository for Enterprise Linu    881</code></pre>\n      </div>',fields:{slug:"/linux-remi-release/",prefix:"2017-12-05"},frontmatter:{title:"CentOS6系にremiレポジトリを追加する",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/centos-2d7d5f9f2d0b1dd86637b1ea62e545db-ada8c.jpg"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>source code on <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">GitHub</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/linux-remi-release/"}}}});
//# sourceMappingURL=path---linux-remi-release-b330fc9ec541d6fdc388.js.map