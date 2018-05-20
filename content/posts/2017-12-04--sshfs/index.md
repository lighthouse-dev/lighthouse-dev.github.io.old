---
title: Macでsshfsをインストール / 使い方
subTitle: ""
category: "Mac"
cover: fuse.png
sitemap :
  changefreq : daily
  priority : 1.0
---

## 1. SSHFS?

* SSH Filesystem： SSHFS
* SSH上で遠隔サーバーのディレクトリ/ファイルをマウントして使うためのファイルシステムクライアント。

## 2.インストール

```command
brew cask install osxfuse
brew install sshfs
```

## 3.遠隔サーバーのディレクトリをマウント

> sshs ユーザー名@サーバーアドレス:ディレクトリパス　マウントするパス

【例】 xxx.xxx.xxx.xxxサーバーの /home/test ディレクトリを /home/testMount/ にマウントする。

```command
sshfs root@xxx.xxx.xxx.xxx:/home/test/ /home/testMount/
```

## 4.マウントを解除

> umount -f 解除するディレクトリパス

【例】 /home/testMount/ をマウント解除する。

```command
umount -f /home/testMount/
```
