---
title: "VSCodeでvendor配下のファイルが検索できない"
subTitle: ""
category: "Tool"
tags: ["VSCode"]
cover: vscode-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# 現象

- VSCodeで、クイックオープン(`Cmd + p`)でファイルを検索することが多い。
が、Laravelのvendor配下が検索できない。（CakePHPも同様）
- 👆のせいで、[金子さん](https://fusic.co.jp/members/56)がVSCodeを裏切って、Sublime Textに乗り換えた。

<br>

# やりたいこと

- vendor配下まで検索できるようにしたい。
- [金子さん](https://fusic.co.jp/members/56)がVSCodeに戻って来てほしい。

<br>

# 検索できなかった理由

基本的にVSCodeのデフォルト設定で`"search.useIgnoreFiles": true`になっているはずです。

`search.useIgnoreFiles`設定は、 クイックオープン(Ctrl+P)でファイルを探す時に、.gitignore/.ignoreに記載されているファイルを表示させるかどうかの設定です。

つまり、この設定が `true`になっていて、.gitignore/.ignoreに`vender`ディレクトリを記載している場合、
検索で`vender`配下のファイルは検索できなくなるということ。(vendor以外も同様)

<br>

# 解決方法

```json:title=User Settings
...省略

  "search.useIgnoreFiles": false,

...省略
```

`search.useIgnoreFiles": false`に設定し、`.gitignore`を見ないようにするだけでOK!

<br>
