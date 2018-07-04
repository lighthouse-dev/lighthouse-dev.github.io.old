webpackJsonp([64398097550275],{902:function(e,o){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2019-07-04--vscode-search-setting/index.md absPath of file >>> MarkdownRemark",html:'<h1>現象</h1>\n<ul>\n<li>VSCodeで、クイックオープン(<code class="language-text">Cmd + p</code>)でファイルを検索することが多い。\nが、Laravelのvendor配下が検索できない。（CakePHPも同様）</li>\n<li>👆のせいで、<a href="https://fusic.co.jp/members/56">金子さん</a>がVSCodeを裏切って、Sublime Textに乗り換えた。</li>\n</ul>\n<br>\n<h1>やりたいこと</h1>\n<ul>\n<li>vendor配下まで検索できるようにしたい。</li>\n<li><a href="https://fusic.co.jp/members/56">金子さん</a>がVSCodeに戻って来てほしい。</li>\n</ul>\n<br>\n<h1>検索できなかった理由</h1>\n<p>基本的にVSCodeのデフォルト設定で<code class="language-text">&quot;search.useIgnoreFiles&quot;: true</code>になっているはずです。</p>\n<p><code class="language-text">search.useIgnoreFiles</code>設定は、 クイックオープン(Ctrl+P)でファイルを探す時に、.gitignore/.ignoreに記載されているファイルを表示させるかどうかの設定です。</p>\n<p>つまり、この設定が <code class="language-text">true</code>になっていて、.gitignore/.ignoreに<code class="language-text">vender</code>ディレクトリを記載している場合、\n検索で<code class="language-text">vender</code>配下のファイルは検索できなくなるということ。(vendor以外も同様)</p>\n<br>\n<h1>解決方法</h1>\n<p><code class="language-text">search.useIgnoreFiles&quot;: false</code>に設定し、<code class="language-text">.gitignore</code>を見ないようにするだけでOK!</p>\n<br>',fields:{slug:"/vscode-search-setting/",prefix:"2019-07-04"},frontmatter:{title:"VSCodeでvendor配下のファイルが検索できない",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/vscode-logo-4f2a47209fdb18d70f0de6c876397ef4-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/vscode-search-setting/"}}}});
//# sourceMappingURL=path---vscode-search-setting-1e785ccab3063e70a029.js.map