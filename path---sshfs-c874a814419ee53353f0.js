webpackJsonp([0xc28b84d247ca],{906:function(e,s){e.exports={data:{post:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/posts/2017-12-04--sshfs/index.md absPath of file >>> MarkdownRemark",html:'<h1>SSHFS?</h1>\n<ul>\n<li>SSH Filesystem： SSHFS</li>\n<li>SSH上で遠隔サーバーのディレクトリ/ファイルをマウントして使うためのファイルシステムクライアント。</li>\n</ul>\n<br>\n<h1>インストール</h1>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">brew cask install osxfuse\nbrew install sshfs</code></pre>\n      </div>\n<br>\n<h1>遠隔サーバーのディレクトリをマウント</h1>\n<blockquote>\n<p>sshs ユーザー名@サーバーアドレス:ディレクトリパス　マウントするパス</p>\n</blockquote>\n<p>【例】 xxx.xxx.xxx.xxxサーバーの /home/test ディレクトリを /home/testMount/ にマウントする。</p>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">sshfs root@xxx.xxx.xxx.xxx:/home/test/ /home/testMount/</code></pre>\n      </div>\n<br>\n<h1>マウントを解除</h1>\n<blockquote>\n<p>umount -f 解除するディレクトリパス</p>\n</blockquote>\n<p>【例】 /home/testMount/ をマウント解除する。</p>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">umount -f /home/testMount/</code></pre>\n      </div>',fields:{slug:"/sshfs/",prefix:"2017-12-04"},frontmatter:{title:"Macでsshfsをインストール / 使い方",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/fuse-f0a371ee77bdb882bd6a62dce372684e-160fa.png"}}}}},author:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/jslee/Development/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/sshfs/"}}}});
//# sourceMappingURL=path---sshfs-c874a814419ee53353f0.js.map