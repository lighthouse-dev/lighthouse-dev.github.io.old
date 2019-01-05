---
title: AJAXを同期(Sync)で通信する
subTitle: ""
category: "JavaScript"
cover: js.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# 概要

Ajaxは、皆さんも知っている通り、基本的に非同期で通信します。

※ そもそもAjaxとはAsynchronous Javascript And XMLの略です。

なので、データ通信や処理をしている間に、同時に他の動作や処理をすることができるため、

不要なローディングを少なくし、より自由にページを構成することができます。

<br>

でも場合によっては、Ajaxを同期で通信しなければならない場合もあるので、

今回は、「AJAXの同期通信」について説明します！

<br>

# 非同期

まずは非同期通信のサンプルです。

```javascript:title=sample.js
$.ajax({
  type: 'POST',
  url: 'test.php',
  data: "name=lee",
  success: function(data) {
      if(data != null) {
          // Do somothing.
      }
  }
});
doAnything();
```

※ここでdoAnything()は、上のAjaxの結果と関係なく、必ず実行されます。

<br>

# 同期

```javascript:title=sample.js
$.ajax({
  type: 'POST',
  url: 'test.php',
  data: "name=lee",
  async : false,   // ← asyncをfalseに設定する
  success: function(data) {
      if(data != null) {
          // Do somothing.
      }
  }
});
doAnything();
```

asyncは、デフォルトがtrueですが、上のソースのようにfalseに設定すれば、同期で通信します。

以上！
