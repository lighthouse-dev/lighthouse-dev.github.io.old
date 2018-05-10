webpackJsonp([0xa65148a8ccab],{856:function(e,n){e.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-04--phpstorm-remote-setting/index.md absPath of file >>> MarkdownRemark",html:'<h2>Xdebug?</h2>\n<ul>\n<li>デバック及びプロファイリング機能を提供するPHP拡張モデュール</li>\n<li>PECLを用いてインストール可能</li>\n</ul>\n<h2>1. Xdebugをインストール（CentOS）</h2>\n<h3>php-devel、php-pearをインストール</h3>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">yum install php-devel\nyum install php-pear</code></pre>\n      </div>\n<h3>gcc、gcc-c++、autoconf、automakeをインストール</h3>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">yum install gcc gcc-c++ autoconf automake</code></pre>\n      </div>\n<h3>Xdebugをインストール</h3>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">pecl install Xdebug\n\n// ※エラーになる場合\n// yum --enablerepo=remi-phpバージョン install php-devel php-pear\nyum --enablerepo=remi-php56 install php-devel php-pear</code></pre>\n      </div>\n<h3>/etc/php.iniを修正</h3>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">vi /etc/php.ini</code></pre>\n      </div>\n<p>↓以下を追加</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">[</span>xdebug<span class="token punctuation">]</span>  \nzend_extension=<span class="token string">"/usr/lib64/php/modules/xdebug.so"</span>  \nxdebug.default_enable = <span class="token number">1</span>  \nxdebug.remote_enable = <span class="token number">1</span>  \nxdebug.remote_port = <span class="token number">9000</span>  \nxdebug.remote_handler = dbgp  \nxdebug.remote_autostart = <span class="token number">1</span>  \nxdebug.profiler_output_dir = <span class="token string">"/tmp"</span>  \nxdebug.max_nesting_level = <span class="token number">1000</span>  \nxdebug.idekey = <span class="token string">"PHPSTORM"</span> //PhpSTORMで設定したideKey  \nxdebug.remote_host=xxx.xxx.xxx.xxx  \n</code></pre>\n      </div>\n<h3>Apacheをリスタート</h3>\n<div class="gatsby-highlight">\n      <pre class="language-command"><code class="language-command">service httpd restart</code></pre>\n      </div>\n<h2>2. PhpStormでの設定</h2>\n<h3>リモートホストの設定</h3>\n<h4>1.Remote Hostを表示</h4>\n<p>[ Tools > Deployment > Browse Remote Host ]をクリックする</p>\n<h4>2. サーバーを登録</h4>\n<p>[ Tools > Deployment > Configuration… ]　を開く</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.37109375000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAARlAAAEZQAGA43XUAAACy0lEQVQ4y42U205TQRSG+xb6BkQFDPS4z7P3nu5zu3vEoKG0ioqGO5/AiKKABWoi3opGA1K4MhKDr6C+0e+aXQs0xcSLL9NZe+afWetf09Tpk+dY7W1ibXsHL9ZfY7O7ha2dHrZ7b9Cl2Ea3i6fPVrH2aj2Ji1h3Z5TtXg8vNzbw89dvpB432phIq7gymcPVa2kopg1WdCHrBvKKCiUZNczmJczmCpeSKciYuDGFz/sHSC0uLyMrKTDtIpjFUarUUG82EZZi+FEZXhDBoEM0Qv8HjPZm8jL6R8dI3V16kAiqzIJsmNCKDtzQg+X7UGwO9S+yaUFiJiTTRN5gA+j2OULEJ7NZHByTYIcExZUVEjR0Cx0WoWPH6Fhl3OMx2maElhEQIRZoXNAD3NF8wkvmLVrfprXNNMPpx8OBYLagJKe4mk0CJTh+CJtxhEEJpSiG5wbgVhHcdhKK3IVN8zAoIy7XUKk2wBUT33f3xgXnzQCK45ApDE4YwYkiWK4PneqkWVRLSv8MmovMeFSCKuv49u7DuOBtFsAKQjKCg3shwrgKj8yxHA+MOzDoZgaZN0QjQZe+67KBk8sE55gPI6Rb0uk2Oe1U6pAoRYUEVUpdInNymp6YIUjMYQxT0zP4uvt+XPAhowJHNUR6Ea3qLay0ltCuzyO2fVR4gNjy0HBpjR8nMZ/2RCbVdLqAH2/3Rl3WdRNN3cNiUEcnaibMUU3runtGTXPGaBgeghkVJ5/654LDPpRtalbHTRB9KNLKqBqylKbgYrpDCpTd9XQG+0dHo4IKCRapTuKFiNYxyQSbaid+c3I6aSeaJ4aQ6wM4LHqqYn/yUkZuSK0ixoGbAxdNWmyTmHCZe34y1ymuk1AyEmK9RHsHgvfPn564oUAID5E0YwRZcOG7WC9a52Y6h8M+pbz0aAVZWRsR/B+EmPjDiCpVGF6MadnFl/4x/gCbo2GNKVJdOAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="phpstorm setting 1"\n        title=""\n        src="/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-48538.png"\n        srcset="/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-bed0f.png 200w,\n/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-5fd34.png 400w,\n/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-48538.png 800w,\n/static/phpstorm-setting-1-d71f3c0ed33d5027e8427ca197bd5e4a-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li><code class="language-text">[test SFTP connection]</code> をクリックし、成功することを確認</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.1171875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAARlAAAEZQAGA43XUAAABK0lEQVQoz4WRWU7DQAyGcwgeuAFCPIEKZJvJZE+z0I1SFdTjVG2RipK0SNz2r2OxlYrk4ZMt2/piZ7TteonlR4Xtbo/NW4my3qHevxN7zsu6xnK1xmrziopmKqpz/MtnXbu4tXBleDi77OGc0G0JoVy4UQxdSBi2oJpATzdxc28Q+j8YuL7ToQnlwSKBdH3GC2OESYp8OEKSFZT34fgBbJoT1O9CsxwXDaZUHKM0Z5qm44csMqnexC4sQjPlsTAbTTGYzpGNn5BPZgjzIVScQUYpnA6EHx1v2HwlpjMbwjTjTZvcixPe1gnaOTn5tzAmYZLncGlQej4U/cc2meK54FTYLx74MVSfTk3HPzEZ8OPwpi18C7+kxfgRs5cFJnPieQHbi2CqkPC538UB3s5QWV9JGEYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="phpstorm setting 2"\n        title=""\n        src="/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-48538.png"\n        srcset="/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-bed0f.png 200w,\n/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-5fd34.png 400w,\n/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-48538.png 800w,\n/static/phpstorm-setting-2-fdf7f868c83a494c40e746839f373f84-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>PHPリモートデバッグの設定</h3>\n<p>[ Run > Edit Configurations… ]　を開く</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.421875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAARlAAAEZQAGA43XUAAABu0lEQVQoz21Sy3LUQAz0FxFCNom9a894XrbHXpt9mlCELao4cYTizIELPwAHvraRtM4mZHPo0kijabWkST5fGvS2QVoUyFWJLC8wu82w0HQuFGbpHBezG1xcXeP19a3g1ZuZ+FeUd0k+5zD4nBTrHfb3B/SrDap2idIFuKrBknxXRyjjEJcDhvUWluKlr+AprilPWX+GRPVb7D8csNmNMKFGUdoTaYgtDBFUsZOCXIAJTVVTbiUoJ8tvtQ9IusZh/25E268kmBOhJevqRhQxMZ+ZaE4jeY6FNo8gP2mJdbcf4ZsWmiQX1CJbTmDynKzEuEWyxQQlufasQNLHiC0RchITcMvKOmRTdU7iO1Z4RJCRcJtc+KlKIXS9x/j+DrEbZFbcIldOc01bfkSaK8HT2EsjSHyw6NZrZERyQ19lbo5LERX+qILb1VOM1YoqUfYC4TYM+Ph2xK7ucdeuMLgoibwYXgpbXtaDr50/PWbFp+UoLUh+DD/x7dNffD/8wdf73/jS/CK1G2opJ5QTzttUpLbu+uNyaO6pXSI1kba8oIu5Q5UZhLQU8MP/vsMzCCERBZq5mn5GRmSZqfEP6BCHQn2o5JcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="phpstorm setting 3"\n        title=""\n        src="/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-48538.png"\n        srcset="/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-bed0f.png 200w,\n/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-5fd34.png 400w,\n/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-48538.png 800w,\n/static/phpstorm-setting-3-f4fdeb8f7e9b1c3270dac898015d3295-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol>\n<li>PHP Remote Debugをクリック</li>\n<li>名前、サーバーIPアドレス、Ide Key(※php.iniで設定したKey)\nなどを設定する</li>\n</ol>\n<p>これでPhpStorm + Xdebugでリモートデスクトップ環境構築完了！</p>',fields:{slug:"/phpstorm-remote-setting/",prefix:"2017-12-04"},frontmatter:{title:"PhpStorm + Xdebugでリモートデスクトップ",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/php-storm-db0ae4049094253e133e8cf96f71ad80-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>source code on <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">GitHub</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/phpstorm-remote-setting/"}}}});
//# sourceMappingURL=path---phpstorm-remote-setting-6efc7ea8614b983eb22e.js.map