webpackJsonp([21575327080638],{877:function(e,a){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-05--linux-epel-release/index.md absPath of file >>> MarkdownRemark",html:'<h1>事前確認</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum repolist\n\n... (省略)\nrepo id                               repo name                                        status\nbase                                  CentOS-6 - Base                                  6,575\nextras                                CentOS-6 - Extras                                   35\nupdates                               CentOS-6 - Updates                                 298\nrepolist: 6,908</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa epel-release\n$ yum list epel-release\n\n... (省略)\nAvailable Packages\nepel-release.noarch                                6-8                                 extras</code></pre>\n      </div>\n<br>\n<h1>epel インストール</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum install epel-release\n\n... (省略)\nInstalled:\nepel-release.noarch 0:6-8\n\nComplete!</code></pre>\n      </div>\n<p><a href="http://dl.fedoraproject.org/pub/epel/6/x86_64/">※ epel-releaseで検索し、最新バージョンを確認する。</a></p>\n<br>\n<h1>確認</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ rpm -qa epel-release\nepel-release-6-8.noarch</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum list installed epel-release\n\n... (省略)\nInstalled Packages\nepel-release.noarch                                6-8                                @extras</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">$ yum repolist\n\n... (省略)\nrepo id                 repo name                                                      status\nbase                    CentOS-6 - Base                                                 6,575\nepel                    Extra Packages for Enterprise Linux 6 - x86_64                 11,768\nextras                  CentOS-6 - Extras                                                  35\nupdates                 CentOS-6 - Updates                                                298\nrepolist: 18,676</code></pre>\n      </div>',fields:{slug:"/linux-epel-release/",prefix:"2017-12-05"},frontmatter:{title:"CentOS6系にepel-releseをインストールする",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/centos-2d7d5f9f2d0b1dd86637b1ea62e545db-ada8c.jpg"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/linux-epel-release/"}}}});
//# sourceMappingURL=path---linux-epel-release-d1fa7a6596de1bff1844.js.map