---
title: "【 PHP 】変数の存在有無をチェックする isset()、empty()の違い"
subTitle: ""
category: "PHP"
cover: php-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

こんにちは！

今回は、PHPで変数の値をチェックする方法についてメモです。

もし変数の値が存在するかをチェックする時って、どうすれば良いでしょうか。

こういう時に使えるのが `isset()` と `empty()`です。


> isset(チェックする変数名);

> empty(チェックする変数名);

<br>

# isset()、 empty() 関数について

`isset()`も`empty()`も変数の値も存在有無を確認できる関数です。

この二つの違いって何でしょうか。

関数名 | 説明
:--|:--
isset() | 値の存在有無を`boolean`で返す。<br> 値が存在し、nullでなければ`true`を返す。
empty() | 値が存在しない または 値が`0`or`false`or`null`の場合、`true`を返す。

<br>

# isset()サンプルコード
isset()を使って変数の値の存在有無をチェックします。

```php
<?php
if (isset($hoge)) {
    echo '値を持っている';
} else {
    echo '値を持ってない';
}
?>
```

<br>

# empty()サンプルコード

それでは、empty()について。

似ている関数のように見えますが、`empty()`関数は、変数が`false`or`0`だとしても

`true`を返すという点が`isset()`と確実な違いを持ってます。


```php
<?php
if (empty($hoge)) {
    echo '「値がない」or「0」or「false」or「null」';
} else {
    echo '値を持っている';
}
?>
```
