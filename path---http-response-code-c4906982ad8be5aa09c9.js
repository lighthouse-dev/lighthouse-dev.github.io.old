webpackJsonp([0x5efcdca1443d],{882:function(n,t){n.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-30--http-response-code/index.md absPath of file >>> MarkdownRemark",html:'<p>HTTPステータスコードについてのまとめです！</p>\n<p>各コードは100単位で分かれています。\n例えば、300番台同士、400番台同士が似ているタイプのレスポンスコードになります。</p>\n<p>このように３桁コードの一番目数字でどんなタイプのレスポンスか分かります！\nこの一番目の数字(コード)を「Response Class」と言います。\nそれでは、各レスポンスコードについて説明します！</p>\n<br>\n<h1>Response Class Code</h1>\n<table>\n<thead>\n<tr>\n<th align="center">Response Class</th>\n<th align="center">Response Class意味</th>\n<th>説明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">1</td>\n<td align="center">Informational \n<br>\n（情報）</td>\n<td>リクエストは受け取られた。処理は継続される。</td>\n</tr>\n<tr>\n<td align="center">2</td>\n<td align="center">Success \n<br>\n（成功）</td>\n<td>リクエストは受け取られ、理解され、受理された。</td>\n</tr>\n<tr>\n<td align="center">3</td>\n<td align="center">Redirection \n<br>\n（リダイレクション）</td>\n<td>リクエストを完了させるために、追加的な処理が必要。</td>\n</tr>\n<tr>\n<td align="center">4</td>\n<td align="center">Client Error \n<br>\n（クライアントエラー）</td>\n<td>クライアントからのリクエストに誤りがあった。</td>\n</tr>\n<tr>\n<td align="center">5</td>\n<td align="center">Server Error \n<br>\n（サーバーエラー）</td>\n<td>サーバがリクエストの処理に失敗した。</td>\n</tr>\n</tbody>\n</table>\n<p>4番と、5番はエラーではありますが、違いは「4番台」はクライアントの間違ったリクエストでサーバーで処理ができない状態。</p>\n<p>「5番台」のエラーはクライアントからのリクエストには問題ないが、サーバーで処理中にサーバーの問題によってエラーが発生したという点です。</p>\n<br>\n<h1>2xx Success 成功</h1>\n<table>\n<thead>\n<tr>\n<th align="center">Response Class</th>\n<th align="center">Response Class意味</th>\n<th>説明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">200</td>\n<td align="center">OK</td>\n<td>リクエストは成功し、レスポンスとともに要求に応じた情報が返される。\n<br>\n ブラウザでページが正しく表示された場合は、ほとんどがこのステータスコードを返している。</td>\n</tr>\n<tr>\n<td align="center">204</td>\n<td align="center">No Content</td>\n<td>内容なし。リクエストを受理したが、返すべきレスポンスエンティティが存在しない場合に返される。 \n<br>\n 例: POSTメソッドでフォームの内容を送信したが、ブラウザの画面を更新しない場合に返される。</td>\n</tr>\n<tr>\n<td align="center">206</td>\n<td align="center">Partial Content</td>\n<td>部分的内容。部分的GETリクエストを受理したときに、返される。 \n<br>\n 例: ダウンロードツール等で分割ダウンロードを行った場合や、レジュームを行った場合に返される。</td>\n</tr>\n</tbody>\n</table>\n<br>\n<h1>3xx Redirection リダイレクション</h1>\n<table>\n<thead>\n<tr>\n<th align="center">Response Class</th>\n<th align="center">Response Class意味</th>\n<th>説明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">300</td>\n<td align="center">Multiple Choices</td>\n<td>複数の選択。リクエストしたリソースが複数存在し、ユーザやユーザーエージェントに選択肢を提示するときに返される。</td>\n</tr>\n<tr>\n<td align="center">301</td>\n<td align="center">Moved Permanently</td>\n<td>恒久的に移動した。リクエストしたリソースが恒久的に移動されているときに返される。</td>\n</tr>\n<tr>\n<td align="center">302</td>\n<td align="center">Found</td>\n<td>発見した。リクエストしたリソースが一時的に移動されているときに返される。</td>\n</tr>\n<tr>\n<td align="center">303</td>\n<td align="center">See Other</td>\n<td>他を参照せよ。リクエストに対するレスポンスが他のURLに存在するときに返される。</td>\n</tr>\n<tr>\n<td align="center">304</td>\n<td align="center">Not Modified</td>\n<td>未更新。リクエストしたリソースは更新されていないことを示す。\n<br>\n 例として、 If-Modified-Since:ヘッダを使用したリクエストを行い、そのヘッダに示された時間以降に更新がなかった場合に返される。</td>\n</tr>\n<tr>\n<td align="center">307</td>\n<td align="center">Temporary Redirect</td>\n<td>一時的リダイレクト。リクエストしたリソースは一時的に移動されているときに返される。</td>\n</tr>\n</tbody>\n</table>\n<br>\n<h1>4xx Client Error クライアントエラー</h1>\n<table>\n<thead>\n<tr>\n<th align="center">Response Class</th>\n<th align="center">Response Class意味</th>\n<th>説明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">400</td>\n<td align="center">Bad Request</td>\n<td>リクエストが不正である。定義されていないメソッドを使うなど、クライアントのリクエストがおかしい場合に返される。</td>\n</tr>\n<tr>\n<td align="center">401</td>\n<td align="center">Unauthorized</td>\n<td>認証が必要である。Basic認証やDigest認証などを行うときに使用される。\n<br>\nたいていのブラウザはこのステータスを受け取ると、認証ダイアログを表示する。</td>\n</tr>\n<tr>\n<td align="center">403</td>\n<td align="center">Forbidden</td>\n<td>禁止されている。リソースにアクセスすることを拒否された。リクエストはしたが処理できないという意味。\n<br>\n アクセス権がない場合や、ホストがアクセス禁止処分を受けた場合などに返される。\n<br>\n 例: 社内（イントラネット）からのみアクセスできるページに社外からアクセスしようとした。</td>\n</tr>\n<tr>\n<td align="center">404</td>\n<td align="center">Not Found</td>\n<td>未検出。リソースが見つからなかった。\n<br>\n 単に、アクセス権がない場合などにも使用される。</td>\n</tr>\n<tr>\n<td align="center">405</td>\n<td align="center">Method Not Allowed</td>\n<td>許可されていないメソッド。許可されていないメソッドを使用しようとした。\n<br>\n 例: POSTメソッドの使用が許されていない場所で、POSTメソッドを使用した場合に返される。</td>\n</tr>\n</tbody>\n</table>\n<br>\n<h1>5xx Server Error サーバエラー</h1>\n<table>\n<thead>\n<tr>\n<th align="center">Response Class</th>\n<th align="center">Response Class意味</th>\n<th>説明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">500</td>\n<td align="center">Internal Server Error</td>\n<td>サーバ内部エラー。サーバ内部にエラーが発生した場合に返される。\n<br>\n 例として、CGIとして動作させているプログラムに文法エラーがあったり、設定に誤りがあった場合などに返される。</td>\n</tr>\n<tr>\n<td align="center">503</td>\n<td align="center">Service Unavailable</td>\n<td>サービス利用不可。サービスが一時的に過負荷やメンテナンスで使用不可能である。 \n<br>\n 例として、アクセスが殺到して処理不能に陥った場合に返される。</td>\n</tr>\n<tr>\n<td align="center">504</td>\n<td align="center">Gateway Timeout</td>\n<td>ゲートウェイタイムアウト。ゲートウェイ・プロキシサーバはURIから推測されるサーバからの適切なレスポンスがなくタイムアウトした。</td>\n</tr>\n<tr>\n<td align="center">505</td>\n<td align="center">HTTP Version Not Supported</td>\n<td>サポートしていないHTTPバージョン。リクエストがサポートされていないHTTPバージョンである場合に返される。</td>\n</tr>\n</tbody>\n</table>\n<br>\n<h1>参考リンク</h1>\n<ul>\n<li><a href="https://ja.wikipedia.org/wiki/HTTP%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89">wikipedia HTTPステータスコード</a></li>\n</ul>',fields:{slug:"/http-response-code/",prefix:"2017-12-30"},frontmatter:{title:"HTTPサーバー Response Codeのまとめ",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/http-logo-9c1ab36367e0c74b26a1c5826b06a9f9-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア👋 <br>\nPHPやVue.js、Angularなど書いてます！ 無類のラーメン好き🍜</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/http-response-code/"}}}});
//# sourceMappingURL=path---http-response-code-c4906982ad8be5aa09c9.js.map