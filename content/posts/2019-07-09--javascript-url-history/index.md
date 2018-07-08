---
title: "JavaScriptでURLを操作する"
subTitle: ""
category: "JavaScript"
cover: javascript-logo.png
sitemap :
  changefreq : daily
  priority : 1.0
---

# ページをリロードせずに、URLを変更したい

HTML5では`history.pushState()`および`history.replaceState()`メソッドが導入され、

それぞれにより履歴エントリの追加と修正が可能となりました。 

つまり、ページをリロードせずに、ページURLだけ変える時に使います！

> history.pushState( state, title, url );

- `state`: 変更するURLと一緒に保存するデーターオブジェクト
- `title`: 変更するブラウザーのタイトルを指定。Firefoxではまだ対応してないらしいので、空白（' '）で指定すれば良いと思います。
- `url`: 指定したURLを履歴に追加し、URLを変更する

URLと一緒にデーターを保存することもできるので、とても便利です！
このデーターに変わるページのデーターを入れておいて、クライアント側でそのデーターを活用し、新しいページをレンダリングすれば良いです。

<br>

例えば、`test.com`ページで、URLを`test.com/users/list`にしたい場合は、以下のように指定します！
```js
let stateObj = { hoge: 'hoge' };
let changeUrl = this.$route.path + '/users/list';


history.pushState(stateObj, '', changeUrl);
```
こうすると、URLが`test.com/users/list`に変わるだけで、ページには何も変化がありません。

少し順番を説明しますと、

```js
history.pushState(null, '', '/hoge1'); 
history.pushState(null, '', '/hoge2');
history.pushState(null, '', '/hoge3');
```

このように履歴を3回追加したあとに、ブラウザの戻るボタンをクリックしていくと

`test.com/hoge3"` → `test.com/hoge2` → `test.com/hoge1` → `test.com`

の順に、ブラウザのURLが変わっていきます。 (リロードはしないので、ページの内容は変わりません)

<br>

# `history.pushState()`と`history.repalceState()`の違いは？

> history.repalceState( state, title url );

現在のURL履歴が書き換えられます。

要は、現在のURL履歴が書き換えられるので、[戻る] ボタンが活性化にならず、URLだけが変わるということ。

<br>

例えば、`test.com`から以下を実行すると、
```js
history.relpaceState(null, '', "/hoge1");
```

URLが`test.com`から`test.com/hoge1`に変わりますが、ブラウザの戻るボタンを押しても、一つ前の`test.com`には戻りません。

つまり、履歴に**追加されない**ということ。 まとめると、、

## pushState()

- 履歴に新しいURLを追加する。
- `test.com`を一つ前のURLとしておいて、新しいURLとして`test.com/hoge1`を追加するということ。
- そのため、前のURLが残っているので、[戻る]ボタンで`test.com`に戻ることでできます。

## replaceState()
- 前のURLを消して、URLを変更します。
- `test.com`というURL履歴を削除し、`test/com/hoge1`を追加するということ。
- なので、ブラウザの[戻る]ボタンを押しても、一つ前の`test.com`には戻りません。

<br>

# その他

### 前のページに戻る 

> history.back()

これにより、ちょうどユーザーがブラウザのツールバーの「前のページに戻る」ボタンをクリックしたときのような挙動がなされます。

### 次のページへ進む

> history.forward()

同様に、このようにすることで（ユーザーが「次のページへ進む」ボタンをクリックしたかのように）次のページへ進むこともできます。

これらの関数呼び出し後も同様に、popStateイベントが発生します。

<br>

# 参考URL

- [ブラウザの履歴を操作する - ウェブデベロッパーガイド | MDN](https://developer.mozilla.org/ja/docs/Web/Guide/DOM/Manipulating_the_browser_history) 
