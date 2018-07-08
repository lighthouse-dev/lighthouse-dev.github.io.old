---
title: CentOSにremiレポジトリを追加する
subTitle: ""
category: "Linux"
cover: centos.jpg
sitemap :
  changefreq : daily
  priority : 1.0
---

# 事前作業

* remi-releaseは、epel-releaseに依存性(dependency)がある。
* [CentOSにepel-releseをインストールする。](/linux-epel-release/)

<br>

# 確認

```command
$ rpm -qa | grep remi-release
$ rpm -qa | grep epel-release
epel-release-6-8.noarch
```

<br>

# remi-releaseをインストール

```command
$ yum install http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

$ ... (省略)
Installed:
remi-release.noarch 0:6.8-1.el6.remi

Complete!
```

<br>

# 確認

```command
$ rpm -qa | grep remi-release
remi-release-6.8-1.el6.remi.noarch
```

```command
$ yum list remi-release

... (省略)
Installed Packages
remi-release.noarch                     6.8-1.el6.remi                     @/remi-release-6
```

```command
$ yum repolist | grep remi
* remi-safe: mirror.innosol.asia
remi-safe                  Safe Remi's RPM repository for Enterprise Linu    881
```

<br><br>
