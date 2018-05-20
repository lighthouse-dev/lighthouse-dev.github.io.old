webpackJsonp([0xab6a83bbfb8],{892:function(a,e){a.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2018-04-24--VSCode-SFTP/index.md absPath of file >>> MarkdownRemark",html:'<p>こんにちは！</p>\n<p>普段から開発エディターで <a href="https://code.visualstudio.com/">Visual Studio Code</a>を使ってます。</p>\n<p>今回は、<code class="language-text">VSCode</code>でSFTPファイル同期について紹介します ✈️</p>\n<br>\n<h2>SFTP拡張モジュールをインストール</h2>\n<p><a href="https://marketplace.visualstudio.com/items?itemName=liximomo.sftp">sftp - Visual Studio Marketplace</a> をインストールし、リロードします</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/img-1-325409a3683fb0fae2969d2ae9b39f89-ae340.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 13px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 88.78504672897196%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAARlAAAEZQAGA43XUAAAD7UlEQVQ4y21UTW8bVRT1lkVJYnvG8/1tj2c8Hns8dpzYjuPEOHFT2kLSKE0ctYuWRE2C1PSDCkQbKkElYN0FGySQ2CDRRVnABlb8DBb9J4f7XmLogsXRfTNv3p1zzr33ZRzHQZqmKPllWLKEFUPCQC9gxZQxtBSsEixFhizLUAnKW5D/BxnLsmATFNPCvCri4/EqDvf3MNkYY9Tr4G63iV5Qgu4HcOin9gXcchkBoXyBIAg4eMImMSxHEaqKiGetAJ/3EjxphXhQ8/AoNHCtZGHgOxiVPYwCD+uETsmFZdtgChlYHsMwkPE8D93OIuySj46h4ANPx9DWMLJVjKsBDq5fwdVWgvU4QL9oY9HS0HdN7LgqJEGAIIgQRRE2JY+IVIYtDF2HpBvoWyre922kRRcLjomEmF/b3MLaxgZ6gxW0uz2k7TaqjQYuuxq0ggihUECBYJomGDmesD0/D6ccYIkKcr1MRfKLSFwbQS1BhxItDd/jMV1YxNLKKuJmC2PnrYTEUCC2+Xz+3MPB8jI3vGvImHgqBkqey74cFrHdqmMzreLDJMLA0bFgqlhxDUyKGmRKJF4wnCLDqDIzTUosiwL6oY9P7tzGqB4h1cnTbhujWgXraR2XKb5KdOyV6Uw+xxnlL2I2mz1vG6Z7niSzkmezOXx6dobf//gTX33zLfc1Jh/jRopGp4tumuC35Qi7zRhaidrF9/m5MAx5rFQqyFSoMjf3Juj0epidncXhwQFe//oap6en0FQV9Xqds/eoNUT6wRVXh++6NAg+ikTGpbVB+yw5L4pHD3HJQ0AbzAORZEeVABIZPkeMa3EVw24HBZKTRBUMqyEalRBzJPPduSzvwYVGgkszM+dFeZj4OFob4H47Rl0WkJN1RM0BVLOEGiX45bNTfPf8KX5+8QVevTjDj49O8P3DYzy/9xHu72zipy+f4c0PLxHRtCikKPNg2MVff7/B08M7CC+9g2qvjxt3j9FdG0OnD44mu7i1vYWjmzdwsLONeztbOL29j6vrI9QCH8f7u/j65BDLpEKSFWQeNwM8vjXBk+EiKlSp+eUAhydtRDWaBEmlWENIZsuaTtBQUFSohgmdgTpEoffZggSbpPMqpzQRsSQgNTXodKvk8yQ7JyKXFaAoCr84WPNL3F+RfBa5zyIfO4G/Y3vTdUazbOiOC812iLKMmZxAY6RAlESKFlqtFpIk+fcSmE5ELjftw//WbJ9GjzGw4Do28iKNXkvDy4MQx2NqdNXgN1GNZLPBr1arHHEco0HzzPqPPbMfsjuV9+H0PmSyhIKMfqBgVJExKEswyCN2iIH1IzvAJosxYf3H1ixOwXL8A0/eK6VT5b5zAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="img 1"\n        title=""\n        src="/static/img-1-325409a3683fb0fae2969d2ae9b39f89-ae340.png"\n        srcset="/static/img-1-325409a3683fb0fae2969d2ae9b39f89-ec51a.png 200w,\n/static/img-1-325409a3683fb0fae2969d2ae9b39f89-ae340.png 321w"\n        sizes="(max-width: 13px) 100vw, 13px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<br>\n<h2>設定</h2>\n<h4>1. 「shift + command + P」で<code class="language-text">SFTP</code>を入力</h4>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/img-2-2fab7eb6e27c9992e68e1a7fdee54c76-ee530.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 19px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.26315789473684%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAARlAAAEZQAGA43XUAAABQklEQVQoz5XSy07CQBQG4L6FplQqtHOKUMBA6fQyvYgUUMSk8ZqY4IZEN2yMbnTnI/gAvurvUC87uSy+nExyZub8mVH8IMBkcoIgDOG6LjzPK3CPg3P+XbegMJGjNZqhEU9h8BF0J8N+b4gqH6Mi19tStOAa5f4cneMctfAU1V4mDbBrh1Cb0Z9dW2xEoY6AFU6RxgJR4CHupzjKBrDtBjRNhaqVUCprIKMCMqtSZSWFdVOQjB1HEdwoxqNj48VrIzps4WPxgM/XZ7zd38Gq1WCaJkzGVlJYJwGF5xDyUfrZEDeCY8x0tIlhcZXjfT7D0+0FDur14kAmN62ikJPCinIkSQKn64DsJnSyYDCCWtaxo+0VddlMRGsVka34Er7vF9+Fljf9TGLJhl9F3A3IyDEoOIMQAlmWoS6jGYaxNtp/vgAh3Bjn4usjhQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="img 2"\n        title=""\n        src="/static/img-2-2fab7eb6e27c9992e68e1a7fdee54c76-ee530.png"\n        srcset="/static/img-2-2fab7eb6e27c9992e68e1a7fdee54c76-a274e.png 200w,\n/static/img-2-2fab7eb6e27c9992e68e1a7fdee54c76-65ae3.png 400w,\n/static/img-2-2fab7eb6e27c9992e68e1a7fdee54c76-ee530.png 475w"\n        sizes="(max-width: 19px) 100vw, 19px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h4>2. <code class="language-text">SFTP:Config</code>をクリックし、設定ファイルを開く</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"sftp"</span><span class="token punctuation">,</span>\n    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span>    // ホスト名\n    <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"test-user"</span><span class="token punctuation">,</span>  // アクセスユーザー名\n    <span class="token property">"remotePath"</span><span class="token operator">:</span> <span class="token string">"/var/www/html/test_directory/"</span><span class="token punctuation">,</span>  // リモートするパス（絶対パス）\n    <span class="token property">"privateKeyPath"</span><span class="token operator">:</span> <span class="token string">"/Users/jslee/example/hoge.pem"</span><span class="token punctuation">,</span> // 鍵ファイルを指定\n    <span class="token property">"uploadOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> // ファイルを保存する時に、リモートサーバーにアップロード\n    <span class="token property">"downloadOnOpen"</span><span class="token operator">:</span> <span class="token boolean">false</span> // ファイルを開く時に、リモートサーバーからダウンロード\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>基本的な設定は以上になりますが、</p>\n<p>これ以外の設定は、<a href="https://marketplace.visualstudio.com/items?itemName=liximomo.sftp">sftp - Visual Studio Marketplace</a> 👈ここを参考にしてください。</p>',fields:{slug:"/VSCode-SFTP/",prefix:"2018-04-24"},frontmatter:{title:"【VSCode】SFTPでファイルを同期する",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/vscode-logo-4f2a47209fdb18d70f0de6c876397ef4-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/VSCode-SFTP/"}}}});
//# sourceMappingURL=path---vs-code-sftp-9b814de454416bdab999.js.map