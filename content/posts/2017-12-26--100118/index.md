---
title: Sambaインストール
subTitle: ""
category: "Linux"
cover: samba-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# 事前準備

ローカルからサーバーにSSH接続できる

<br>

# SELinuxを無効化

SELINUXを無効化

```cmd
$ vi /etc/selinux/config
SELINUX=disabled
```

そして反映！

```cmd
$ setenforce 0
setenforce: SELinux is disabled
```

<br>

# iptablesの設定

ローカルだしアクセス制限なくしちゃいます。

```cmd
$ vi /etc/sysconfig/iptables
```

自分は下記2つをとりあえずコメントアウト

```cmd
#-A INPUT -j REJECT --reject-with icmp-host-prohibited
#-A FORWARD -j REJECT --reject-with icmp-host-prohibited
```

変更後、再起動！

```cmd
$ /etc/init.d/iptables restart
```

<br>

# sambaのインストール・設定

sambaをインストール

```cmd
$ yum -y install samba
```

sambaを設定

```cmd
$ vi /etc/samba/smb.conf
```

変更は以下の通り

```conf
[global]
unix charset = UTF-8 #追記
dos charset = CP932 #追記
security = share #userから変更
load printers = no #yesから変更
cups options = raw
guest account = root #追記
disable spoolss = yes #追記

#以下追加
[root]
comment = All
path = /
browseable = yes
writable = yes
guest ok = yes
guest only = yes
create mode = 0777
directory mode = 0777
share modes = yes
```

これでsambaの設定終了。
起動させましょう！

```cmd
$ /etc/init.d/smb start
```

<br>

# 常に実行するように設定

```cmd
$ chkconfig smb on
```

これでファイルの接続が可能になりました!

<br>

# 接続方法

### Windows

スタートからプログラムとファイルの検索に「\\サーバーIPアドレス」 

### Mac

「Finder」からサーバへ接続機能を使って、ローカルのIP打ち込む
