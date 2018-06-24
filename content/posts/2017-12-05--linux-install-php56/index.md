---
title: CentOS6系にPHP 5.6をインストールする
subTitle: ""
category: "Linux"
cover: centos.jpg
sitemap :
  changefreq : daily
  priority : 1.0
---

# 事前作業

* [CentOS6系にremiレポジトリを追加する。](/linux-remi-release/)

<br>

# 確認

```command
$ php -v
-bash: php: command not found
```

```command
$ rpm -qa | grep php
$ rpm -qa | grep remi-release
remi-release-6.8-1.el6.remi.noarch
```

<br>

# PHPをインストール

```command
$ yum --enablerepo=remi-php56 install php

... (省略)
Installed:
php.x86_64 0:5.6.26-1.el6.remi

Dependency Installed:
libedit.x86_64 0:2.11-4.20080712cvs.1.el6
libzip-last.x86_64 0:1.1.3-1.el6.remi
php-cli.x86_64 0:5.6.26-1.el6.remi
php-common.x86_64 0:5.6.26-1.el6.remi
php-pecl-jsonc.x86_64 0:1.3.10-1.el6.remi.5.6
php-pecl-zip.x86_64 0:1.13.4-1.el6.remi.5.6

Complete!
```

<br>

# 確認

```command
$ rpm -qa | grep php
php-common-5.6.26-1.el6.remi.x86_64
php-cli-5.6.26-1.el6.remi.x86_64
php-pecl-jsonc-1.3.10-1.el6.remi.5.6.x86_64
php-pecl-zip-1.13.4-1.el6.remi.5.6.x86_64
php-5.6.26-1.el6.remi.x86_64
```

```command
$ php -v
PHP 5.6.26 (cli) (built: Sep 15 2016 14:57:05)
Copyright (c) 1997-2016 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
```
