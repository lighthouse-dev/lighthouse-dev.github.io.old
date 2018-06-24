---
title: "MacでAngularをインストール"
subTitle: ""
category: "Angular"
cover: angular-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

Mac環境で [Angular](https://angular.io/) のインストール方法を紹介します！

<br>

# まず`Node.js`をインストールする

Angularを始めるには、まず`Node.js`をインストールする必要があります。

`Node.js`のインストール方法については、[Node.js公式サイト](https://nodejs.org/ja/) を見るのをオススメします！

ただし、`Node 6.9.0` 以上のバージョンをインストールしてください。

## npmバージョン確認

Node.jsと一緒に、npm - ノードパッケージ管理者（Node Package Manager）がインストールされます。

```cmd
npm -v
```

※ バージョン 3.0.0 以上

<br>

# TypeScriptをインストール

```cmd
sudo npm install -g typescript
```

※ バージョン 2.1 以上

<br>

# Angular CLIをインストール

Angularは、コマンドラインでプロジェクトを作成し、管理できるツールを提供してます。

これを使うと、プロジェクトの作成や、新しいコントローラーの追加などの作業を自動化できるらしいです。

```cmd
sudo npm install -g @angular/cli
```

※ 詳しくは、[Angular Docs](https://angular.io/guide/quickstart) を参考。

<br>

# 確認

インストールされたことを確認してみましょう！

```cmd
ng --help
```

これで Augular CLIのインストールが完了！
