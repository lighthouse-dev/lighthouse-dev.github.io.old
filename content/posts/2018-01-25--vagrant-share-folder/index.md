---
title: "Vagrantの共有フォルダをapacheの公開ディレクトリにしていると更新が反映されない問題"
subTitle: ""
category: "Default"
cover: vagrant-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# 現状

Vagrantの共有フォルダをapacheの公開ディレクトリにしていると更新が反映されない

<br>

# 解決方法

httpd.confを開く

```cmd
sudo vim /etc/httpd/conf/httpd.conf
```

以下を検索して、修正する

```conf
EnableMMAP off
EnableSendfile off
```

Apache再起動

```cmd
sudo systemctl restart httpd
```
