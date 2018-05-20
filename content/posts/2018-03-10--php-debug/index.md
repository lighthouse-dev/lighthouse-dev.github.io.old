---
title: 'PHPデバッグ方法'
subTitle: ""
category: "PHP"
cover: php-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

PHP デバッグ方法のメモ。

他のデバッグ方法も今後追記していく予定です。

## エラーログをコードに仕込んで出力

```php
error_log(print_r($outputData,true));
```

<br>

### 任意のファイルに出力

```php
error_log(print_r($outputData,true),"3","/tmp/debug.log");
```

1. `errer_log` 関数の第1引数 -> 出力したい変数/文字列を入れる。

2. `print_r` の第2引数 -> `true`を渡すと配列が展開されてログに出力される。

3. `error_log`関数の第2引数 -> `3` は、任意のファイルに出力ということ

4. `error_log` 関数の第3引数 -> 任意のファイルの出力パス
