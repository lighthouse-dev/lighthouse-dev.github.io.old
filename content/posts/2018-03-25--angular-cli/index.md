---
title: "Angular-CLI コマンドまとめ"
subTitle: ""
category: "Angular"
cover: angular-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# プロジェクト作成

```cmd
ng new <プロジェクト名>
```

<br>

# テンプレート作成

### コンポーネント作成

```cmd
ng generate component <コンポーネント名>
```

### サービス作成

```cmd
ng generate service <サービス名>
```

<br>

# アプリケーション実行

```cmd
ng serve
```

### ポートを指定する場合

```cmd
ng serve --port <ポートナンバー>
```

<br>

#  アプリケーションビルド

```cmd
ng build --target=production --base-href /
```

<br>

# テスト実行

```cmd
ng e2e
```
