webpackJsonp([18286153853467],{909:function(e,a){e.exports={data:{post:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/posts/2018-01-25--vagrant-share-folder/index.md absPath of file >>> MarkdownRemark",html:'<h1>現状</h1>\n<p>Vagrantの共有フォルダをapacheの公開ディレクトリにしていると更新が反映されない</p>\n<br>\n<h1>解決方法</h1>\n<p>httpd.confを開く</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">sudo vim /etc/httpd/conf/httpd.conf</code></pre>\n      </div>\n<p>以下を検索して、修正する</p>\n<div class="gatsby-highlight">\n      <pre class="language-conf"><code class="language-conf">EnableMMAP off\nEnableSendfile off</code></pre>\n      </div>\n<p>Apache再起動</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">sudo systemctl restart httpd</code></pre>\n      </div>',fields:{slug:"/vagrant-share-folder/",prefix:"2018-01-25"},frontmatter:{title:"Vagrantの共有フォルダをapacheの公開ディレクトリにしていると更新が反映されない問題",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/vagrant-logo-b32d888dfa3ee3045c65adc41f0f145a-160fa.png"}}}}},author:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/vagrant-share-folder/"}}}});
//# sourceMappingURL=path---vagrant-share-folder-0c4cc4dd8c9f4359499a.js.map