---
title: "ng serveでモジュールがないというエラー（Error: Cannot find module '@angular-devkit/core'）"
subTitle: ""
category: "Angular"
tags: ["Angular", "Error"]
cover: angular-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# エラー内容

> Error: Cannot find module '@angular-devkit/core'

<br>


# 解決方法

## 1. npmアップデート

```cmd
npm update -g
```

## 2. node_modulesフォルダーを削除

```cmd
rm -r node_modules
```

## 3. angular-cliバージョンを確認

```cmd
ng -v
```

![](./img-1.png)

## 4. package.jsonを修正

```cmd
vim package.json
```

![](./img-2.png)

## 5. npmインストールを実行

```cmd
npm install
```

<br>

# 確認

```cmd
ng serve
```

![](./img-3.png)

これで解決！
