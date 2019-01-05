---
title: 'LinuxでNode.jsインストール'
subTitle: ""
category: "Linux"
tags: ["Linux", "Node.js", "Install"]
cover: nodejs-logo.jpg
sitemap :
  changefreq : daily
  priority : 1.0
---

# 対象OS

### CentOS

- CentOS 5 (32-bit、64-bit)
- CentOS 6 (32-bit、64-bit)
- CentOS 7 (64-bit)

### Fedora

- Fedora 21 (Twenty One) (32-bit、64-bit)
- Fedora 20 (Heisenbug) (32-bit、64-bit)
- Fedora 19 (Schrödinger's Cat) (32-bit、64-bit)

### Etc

- Oracle Linux
- Amazon Linux


<br>

# インストール手順

Node.js v8（LTS）をインストールする場合は、以下のコマンドを実行

```cmd
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
```

Node.js v9 をインストールする場合は、以下のコマンドを実行

```cmd
curl --silent --location https://rpm.nodesource.com/setup_9.x | sudo bash -
```


その次、以下を実行

```cmd
sudo yum -y install nodejs
```
