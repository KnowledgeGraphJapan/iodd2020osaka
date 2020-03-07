# iodd2020osaka

## 更新方法

GitHub Actions と連動して、自動的にGitHub Pagesにデプロイされます。
GitHub Pages を更新したい場合は、 master ブランチに push してください。

## 編集方法

### 共通

以下のすべてのファイルでMarkdownにより記述ができます。

### src/src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx

トップページ上部の告知が書かれた部分を編集できます。

### src/src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx

トップページ下部のリンク集の部分を編集できます。

### content/posts/ 以下

提供情報ページ <https://iodd2020osaka.lodosaka.jp/blog/> を追加することができます。
まず、`content/posts/` に半角英数スペースなしのディレクトリを作成します。

そのディレクトリ内に `index.mdx` を作成してください。
この `index.mdx` については、まず以下のように作成してください。

```md
---
title: "ページタイトル"
date: YYYY-MM-DD
slug: "/[ディレクトリ名]"
---

[以下本文]
```

詳しくは `README.GATSUBY-STARTER.md` ファイル、または `content/posts/about-iodd2020osaka/index.mdx` を参照してください。

