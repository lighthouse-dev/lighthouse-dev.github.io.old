---
title: CentOS6系にepel-releseをインストールする
subTitle: ""
category: "Linux"
cover: centos.jpg
sitemap :
  changefreq : daily
  priority : 1.0
---

# 事前確認

```command
$ yum repolist

... (省略)
repo id                               repo name                                        status
base                                  CentOS-6 - Base                                  6,575
extras                                CentOS-6 - Extras                                   35
updates                               CentOS-6 - Updates                                 298
repolist: 6,908
```

```command
$ rpm -qa epel-release
$ yum list epel-release

... (省略)
Available Packages
epel-release.noarch                                6-8                                 extras
```

<br>

# epel インストール

```command
$ yum install epel-release

... (省略)
Installed:
epel-release.noarch 0:6-8

Complete!
```

[※ epel-releaseで検索し、最新バージョンを確認する。](http://dl.fedoraproject.org/pub/epel/6/x86_64/)

<br>

# 確認

```command
$ rpm -qa epel-release
epel-release-6-8.noarch
```

```command
$ yum list installed epel-release

... (省略)
Installed Packages
epel-release.noarch                                6-8                                @extras
```

```command
$ yum repolist

... (省略)
repo id                 repo name                                                      status
base                    CentOS-6 - Base                                                 6,575
epel                    Extra Packages for Enterprise Linux 6 - x86_64                 11,768
extras                  CentOS-6 - Extras                                                  35
updates                 CentOS-6 - Updates                                                298
repolist: 18,676

```
