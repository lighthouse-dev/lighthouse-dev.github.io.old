webpackJsonp([27860362773078],{864:function(e,s){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-26--100118/index.md absPath of file >>> MarkdownRemark",html:'<h1>事前準備</h1>\n<p>ローカルからサーバーにSSH接続できる</p>\n<br>\n<h1>SELinuxを無効化</h1>\n<p>SELINUXを無効化</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ vi /etc/selinux/config\nSELINUX=disabled</code></pre>\n      </div>\n<p>そして反映！</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ setenforce 0\nsetenforce: SELinux is disabled</code></pre>\n      </div>\n<br>\n<h1>iptablesの設定</h1>\n<p>ローカルだしアクセス制限なくしちゃいます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ vi /etc/sysconfig/iptables</code></pre>\n      </div>\n<p>自分は下記2つをとりあえずコメントアウト</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">#-A INPUT -j REJECT --reject-with icmp-host-prohibited\n#-A FORWARD -j REJECT --reject-with icmp-host-prohibited</code></pre>\n      </div>\n<p>変更後、再起動！</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ /etc/init.d/iptables restart</code></pre>\n      </div>\n<br>\n<h1>sambaのインストール・設定</h1>\n<p>sambaをインストール</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ yum -y install samba</code></pre>\n      </div>\n<p>sambaを設定</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ vi /etc/samba/smb.conf</code></pre>\n      </div>\n<p>変更は以下の通り</p>\n<div class="gatsby-highlight">\n      <pre class="language-conf"><code class="language-conf">[global]\nunix charset = UTF-8 #追記\ndos charset = CP932 #追記\nsecurity = share #userから変更\nload printers = no #yesから変更\ncups options = raw\nguest account = root #追記\ndisable spoolss = yes #追記\n\n#以下追加\n[root]\ncomment = All\npath = /\nbrowseable = yes\nwritable = yes\nguest ok = yes\nguest only = yes\ncreate mode = 0777\ndirectory mode = 0777\nshare modes = yes</code></pre>\n      </div>\n<p>これでsambaの設定終了。\n起動させましょう！</p>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ /etc/init.d/smb start</code></pre>\n      </div>\n<br>\n<h1>常に実行するように設定</h1>\n<div class="gatsby-highlight">\n      <pre class="language-cmd"><code class="language-cmd">$ chkconfig smb on</code></pre>\n      </div>\n<p>これでファイルの接続が可能になりました!</p>\n<br>\n<h1>接続方法</h1>\n<h3>Windows</h3>\n<p>スタートからプログラムとファイルの検索に「\\サーバーIPアドレス」 </p>\n<h3>Mac</h3>\n<p>「Finder」からサーバへ接続機能を使って、ローカルのIP打ち込む</p>',fields:{slug:"/100118/",prefix:"2017-12-26"},frontmatter:{title:"Sambaインストール",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/samba-logo-ffcc5dc1d3009deba6af51dc54824217-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/100118/"}}}});
//# sourceMappingURL=path---100118-5dddef88a6df76925cc2.js.map