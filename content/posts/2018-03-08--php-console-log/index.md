---
title: 'console.logをphpで使う（PHP Debug）'
subTitle: ""
category: "PHP"
cover: php-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# 概要

`console.log()`は、ブラウザの開発ツールで`JSのデバッグ`などでよく使ってますよね。

これをサーバー側でも使うことができます。

（多分）ほとんどの言語がこのやり方で、使えます。

今回は、PHPで作ってみました！

<br>

# 使い方

とは言っても、大した事はしてませんし、
ただデーターをスクリプト言語に入れただけなんです。

```php
<?php
function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

$myvar = array(1,2,3);
console_log( $myvar ); // [1,2,3]
?>
```

これで終わりです！


<br>

# まとめ

すごくシンプルで、思ったより使えるかも。

<br>

# 参考

- [PHP: PHP のデバッグ - Manual](http://php.net/manual/ja/debugger.php)
