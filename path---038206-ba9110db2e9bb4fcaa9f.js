webpackJsonp([88628927974121],{854:function(a,e){a.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-26--038206/index.md absPath of file >>> MarkdownRemark",html:'<h2>.ctpファイルをphpファイルで認識するように設定</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image-1-3002660a8aab5f0b99dc6097e901ec30-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.2109375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAARlAAAEZQAGA43XUAAACSUlEQVQ4y42T2U7bUBCG/UZVFwgpcRKc2GfxvsV2bBISoVa9qHpXVXRRW5awChJQX/fvnEOouKJcfJoZn+PxLL+Nq+sVrpe3WN39wc3qDlc3KyxXt1je3tHzFU7PL3CyOMMxcXZ+qeOnMPy4RJhUYG6KIY9g7kg40oPwAgyZQNvs4e2adud/dGFk5R5ygrkZhF8QOcaTGepmF0GUQFJiTh/g7jOge4YXVSjGcyjryAwuVTqJMrCBxIttGy9Nhldd/kyYanmMZvoeYdpABiUkVVjVu6inc6TFmJ7FsJjEjiNgETtPYQsYwk9RNHOqcgo/zGl2MbwwRhBG1K4PhwvYjBNsDf8XqzP2CBUbyeQYnz5eYDQ/Rb+5hF0fwfYydFmIHi2p4/gwWaBjU+F4OlZ+25LY7HO0HmEk2RR79T5VU8IJajC/gqAZcjfGl6/fcXB4hB+Hp/j87RcOvv3E4mSJw98LnB0tEGUVtvo2zKFAZ6CghDIsMKrVUkpql5YhY2SjEkwICNqcR617QUjbD5F4HmbNPvKixigc0eKGsFW7gqSmUC27YYl68o4WMKUFFFqPKSW0ucTrzS28WaP8jc0WzNYGOlttbLfa6PUt0q7Uen3ACJIx8mqmk3Ev1wm568MnDQ5shr41RH9ga9ujirqWTdz7Fp0PHL5GaIy8nGEy+0AJ1N+Sa2EnOY2hGutKwyQlMkRpru29TzZOEcQJvUeKIF/6gVaFoQablw1dHNHFgg5iXaGkmSnc4MFGmgdfWZUsKyqdmHsRHJLgXxOV+9P60QNjAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="image 1"\n        title=""\n        src="/static/image-1-3002660a8aab5f0b99dc6097e901ec30-48538.png"\n        srcset="/static/image-1-3002660a8aab5f0b99dc6097e901ec30-bed0f.png 200w,\n/static/image-1-3002660a8aab5f0b99dc6097e901ec30-5fd34.png 400w,\n/static/image-1-3002660a8aab5f0b99dc6097e901ec30-48538.png 800w,\n/static/image-1-3002660a8aab5f0b99dc6097e901ec30-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<br>\n<h2>自動アップロード</h2>\n<p>[Tools] > [Deployment] > [Options]</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-89d2d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 70.80078125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAARlAAAEZQAGA43XUAAAB/ElEQVQ4y52T6Y7TQBCE/ViAOFbE8TnjGd+Ok5AECVjEc7BZ+MHm2DxvbfXYiSIhFsGPT12e2OXqTtvbb++wPfzE8XTC/viI3eGI4+MJu/3B6YfdHnf3P/B9e48Hnv3i9XN4YZrB2BJZXiJKFfwwRqoNbiZTvHrzDi9ev2W9cbyk/hueLSr0yw9oZnM0XY/5cgU5C+L0v/AMk/ULMeydadcvnGHClCqzLq22+UjBTgpok7uOpCoznKtRe1oMmcolpJkgZ4o3pbxBiGkaqexCmOqLlt/k5Qm1VG+VW2zaFuumJg114/S5ylmjFKokQas1dequG+ouiREGEd4HsZv9hNr7WtdYdB1WNF0KTYtZUaLKMjTGorUWdWYcs7JEl+eOlnqtU6gwwiRKMB3x5KEV57eiqRiuqbuiQEMjy1SJP0UaBE4LiloFIXQYIiMhk/lixjoaGsyZas7WhP6KjikkgVDxxSVT6zhGFicwaQqTDEbOMBoNv1mFT2WOL+S2LvC5sLitcnzMFGaBjz6YEh8btreMQyyiYIB6k4SIzy2Hwxy9hKthuCYZMWXttFT5p4NEYTImONdrrmd3mWHJdluujKMfGHayhy0rfj36t4eew5PdkUWWBR8Wt7wYyRrITf7Yzp+YXOHponYLGbE9MfkXYtLyo1h3M6xNw7mXeAIVCyUl9QsSJAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="image 2"\n        title=""\n        src="/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-48538.png"\n        srcset="/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-bed0f.png 200w,\n/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-5fd34.png 400w,\n/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-48538.png 800w,\n/static/image-2-95c933a14afbc3b4dbc5f11d2d5da6a6-89d2d.png 1024w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<br>\n<h2>自動インデント</h2>\n<h4>メニュー</h4>\n<p>[Code] > [Auto-Indent Lines]</p>\n<h4>ショートカット</h4>\n<ul>\n<li>Mac : control + option + “I”</li>\n<li>Windows : Control + Alt + “I”</li>\n</ul>',fields:{slug:"/038206/",prefix:"2017-12-26"},frontmatter:{title:"phpStorm設定メモ",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/php-storm-db0ae4049094253e133e8cf96f71ad80-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br> lighthouse.log</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://lighthouse-dev.github.io/">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/038206/"}}}});
//# sourceMappingURL=path---038206-ba9110db2e9bb4fcaa9f.js.map