webpackJsonp([0xb17680e5a8a0],{898:function(e,s){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2018-03-06--ssh-timeout-setting/index.md absPath of file >>> MarkdownRemark",html:'<p>sshで接続するリモートサーバーに設定すると、クライアントに同じように適用される。</p>\n<h1>設定方法</h1>\n<h2>sshd_configを開く</h2>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">vim /etc/ssh/sshd_config</code></pre>\n      </div>\n<h2>sshd_configを修正</h2>\n<p>以下のようにを修正</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">ClientAliveInterval 60\nClientAliveCountMax 5</code></pre>\n      </div>\n<h4>ClientAliveInterval</h4>\n<ul>\n<li>データの受信がない場合、指定した一定時間ごとにデータを転送するようにクライアントにリクエストする。</li>\n<li><code class="language-text">0</code>に設定した場合、データを転送しない。</li>\n</ul>\n<h4>ClientAliveCountMax</h4>\n<ul>\n<li>無制限でリクエストするのは、問題があるので<code class="language-text">ClientAliveCountMax</code>で最大リクエスト数を指定する。</li>\n<li>つまり、上の設定の場合は、最大5分（60秒 * 5回）までタイムアウトされない。</li>\n</ul>\n<br>\n<h1>ssh 再起動</h1>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">service sshd restart</code></pre>\n      </div>',fields:{slug:"/ssh-timeout-setting/",prefix:"2018-03-06"},frontmatter:{title:"SSH接続をタイムアウトしないようにする",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/ssh-logo-fe3b825232cef8ff34c4325e3fb63552-ada8c.jpg"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP, Laravel) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / UI&#x26;UX Design ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/ssh-timeout-setting/"}}}});
//# sourceMappingURL=path---ssh-timeout-setting-de7ab05440bbc83e3076.js.map