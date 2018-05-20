---
title: 'PHP Fatal error: Uncaught Error: Call to undefined function Laravel\Envoy\posix_getpwuid() エラー対応'
subTitle: ""
category: "PHP"
cover: php-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

PHPで以下のエラーが発生した時の対応をメモ。

> PHP Fatal error: Uncaught Error: Call to undefined function Laravel\Envoy\posix_getpwuid()

## 解決方法

`php-posix`をインストールすることで簡単に解決。

### 1. php-posixをインストール

```cmd
sudo yum install --enablerepo=remi-php71 php-posix
```

### 2. Apach再起動

```cmd
service httpd restart
```