---
title: 'SSH接続をタイムアウトしないようにする'
subTitle: ""
category: "SSH"
cover: ssh-logo.jpg
sitemap :
  changefreq : daily
  priority : 1.0
---

sshで接続するリモートサーバーに設定すると、クライアントに同じように適用される。

# 設定方法

## sshd_configを開く

```cmd
vim /etc/ssh/sshd_config
```

## sshd_configを修正

以下のようにを修正

```cmd
ClientAliveInterval 60
ClientAliveCountMax 5
```

#### ClientAliveInterval

- データの受信がない場合、指定した一定時間ごとにデータを転送するようにクライアントにリクエストする。
- `0`に設定した場合、データを転送しない。

#### ClientAliveCountMax

- 無制限でリクエストするのは、問題があるので`ClientAliveCountMax`で最大リクエスト数を指定する。
- つまり、上の設定の場合は、最大5分（60秒 * 5回）までタイムアウトされない。

<br>

# ssh 再起動

```cmd
service sshd restart
```
