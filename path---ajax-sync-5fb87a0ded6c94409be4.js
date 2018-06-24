webpackJsonp([85946701803076],{868:function(n,s){n.exports={data:{post:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/posts/2017-12-03--ajax-sync/index.md absPath of file >>> MarkdownRemark",html:'<h1>概要</h1>\n<p>Ajaxは、皆さんも知っている通り、基本的に非同期で通信します。</p>\n<p>※ そもそもAjaxとはAsynchronous Javascript And XMLの略です。</p>\n<p>なので、データ通信や処理をしている間に、同時に他の動作や処理をすることができるため、</p>\n<p>不要なローディングを少なくし、より自由にページを構成することができます。</p>\n<br>\n<p>でも場合によっては、Ajaxを同期で通信しなければならない場合もあるので、</p>\n<p>今回は、「AJAXの同期通信」について説明します！</p>\n<br>\n<h1>非同期</h1>\n<p>まずは非同期通信のサンプルです。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'POST\'</span><span class="token punctuation">,</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'test.php\'</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token string">"name=lee"</span><span class="token punctuation">,</span>\n  success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// Do somothing.</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">doAnything</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>※ここでdoAnything()は、上のAjaxの結果と関係なく、必ず実行されます。</p>\n<br>\n<h1>同期</h1>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'POST\'</span><span class="token punctuation">,</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'test.php\'</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token string">"name=lee"</span><span class="token punctuation">,</span>\n  <span class="token keyword">async</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// ← asyncをfalseに設定する</span>\n  success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// Do somothing.</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">doAnything</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>asyncは、デフォルトがtrueですが、上のソースのようにfalseに設定すれば、同期で通信します。</p>\n<p>以上！</p>',fields:{slug:"/ajax-sync/",prefix:"2017-12-03"},frontmatter:{title:"AJAXを同期(Sync)で通信する",subTitle:"",cover:{childImageSharp:{resize:{src:"/static/js-023b780108063f6d5146de27c105e2fe-160fa.png"}}}}},author:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>jslee</strong> <br>\n福岡在住外国籍WEBエンジニア <br>\nPHP(CakePHP) / Angular / Ionic / Vue.js / <br>\nGraphQL / Docker / Web Design / UI, UX ･･･</p>"},footnote:{id:"/Users/leejuseung/Work/blog/lighthouse-dev.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="../">lighthouse.log</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"152072888976323"}}}},pathContext:{slug:"/ajax-sync/"}}}});
//# sourceMappingURL=path---ajax-sync-5fb87a0ded6c94409be4.js.map