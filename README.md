# culu nest 公式サイト

美容室向け経営サポートサービス「culu nest」の公式LPです。
ビルドツール不要のプレーンな HTML / CSS / JavaScript で作られており、
GitHub Pages・Cloudflare Pages にそのまま公開できます。

## ファイル構成

```
culu-nest/
├── index.html          トップページ本体（13セクション構成）
├── assets/
│   ├── css/
│   │   ├── base.css        カラー・フォント・余白などの共通変数、リセットCSS
│   │   ├── layout.css       コンテナ・グリッドなど、ページの「型」
│   │   ├── components.css   ボタン・カード・ヘッダー等の再利用パーツ
│   │   └── home.css         トップページだけで使うセクション別レイアウト
│   ├── js/
│   │   ├── main.js          ハンバーガーメニュー・ヘッダーのスクロール制御
│   │   └── fade-in.js       スクロール時のフェードイン演出
│   └── img/                 画像（hero・reports・people・ogは実画像を使用済み）
├── pages/               今後ページを追加する際はここに配置
├── robots.txt / sitemap.xml   検索エンジン向け設定（要ドメイン設定）
└── README.md            このファイル
```

## すぐに対応が必要なこと（公開前チェックリスト）

- [x] `index.html` 内のLINE公式アカウントURLを実際のURL（`https://lin.ee/zaA6CUR`）に差し替え済み
- [x] `assets/img/` 配下の画像（hero・サンプルレポート・プロフィールイラスト・OGP画像）はすべて実画像に差し替え済み
- [ ] `robots.txt` / `sitemap.xml` 内の `https://example.com/` を、実際の公開ドメインに差し替える
- [ ] `index.html` の `<title>` `<meta name="description">` 内容が最終稿と合っているか確認する
- [ ] 公開後、実際のURLで `og:image` 等のSNSシェア表示を確認する（`og:url` は現在相対パスのため、ドメイン確定後に絶対URLへ更新すると確実）

## よくある編集

### 文章を直したい
`index.html` はセクションごとに `<!-- ============ ①〜⑬ ... ============ -->` の
コメントで区切られています。該当箇所のテキストを直接書き換えてください。

### 色を変えたい
`assets/css/base.css` の先頭にある `:root { --color-accent: ... }` を
書き換えると、ボタン・アイコン・バッジなど全体に反映されます。

### サービスカードを追加したい
「⑥ 現在ご利用いただけるサービス」内の既存のサービスカード（`.service-card`）を
コピーして内容を書き換えてください。

### 画像を差し替えたい
差し替えたい `<img src="assets/img/...">` の `src` を、実際の画像ファイルの
パスに書き換えるだけで反映されます（自動でトリミング表示される仕組みになっています）。

## デプロイ方法

### GitHub Pages
1. このフォルダをリポジトリのルート（または `/docs` 等）に配置する
2. リポジトリの Settings → Pages で公開元のブランチ／フォルダを指定する

### Cloudflare Pages
1. リポジトリを接続し、ビルドコマンドは空欄のまま、公開ディレクトリに
   このフォルダ（`culu-nest`）を指定する
