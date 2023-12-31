# tkool-web

## 説明

RPG ツクール MV/MZ 製のゲームをブラウザで動かすツール。動かないゲームもある。

## 背景

ツクール MV/MZ 製のゲームが自分の環境で動かないことがある。\
環境を問わずに動くようにしたい。

## 対象

Linux or macOS。\
Linux での動作確認は出来ていない。\
Windows は知らなーい。

## 方法

MV/MZ 製のゲームは概ね Web 技術で作られている。\
ゲームのリソースを Web サーバーでサーブし、ブラウザからアクセスすることで動かす。

## 使い方

1. まず [Deno をインストールする](https://deno.land/manual/getting_started/installation)
1. `cp config.json.example config.json`
1. `config.json`の内容を自環境に合わせて編集する
1. `./tkoolweb`でブラウザとゲームサーバーが起動する
1. ゲーム終了はサーバーのコンソールで`Ctrl-C`

## 画面サイズ

F3, F4 あたりで調整出来るよう。

## データの保存場所

MV は LocalStorage、MZ は IndexedDB を使うよう。

## データのバックアップとリストア

`backup.js`と`restore.js`を使う。\
もしくはブラウザの拡張機能かなんかで。

## オリジンとキャッシュ

1 度使用したオリジンを別のゲームで使用するとバグる。\
恐らく前のゲームのキャッシュを次のゲームに流用してしまうため。\
オリジンを流用するならブラウザキャッシュのクリアが必要。

## bfcache

bfcache をサポートする環境なら、進むや戻るをした際に一瞬でゲーム画面が復元される。すごいね！

## LAN 公開

サーバーのファイアフォールとルーターのポートフォワーディングを設定すれば別のマシンからプレイできる。

## 動かないゲームについて

1. [Node.js](https://nodejs.org/) をインストールする
1. `npx nw@0.79.1-sdk <ゲームのwwwディレクトリのパス>`

これでデスクトップアプリとして起動する…

あーもうめちゃくちゃだよ！

## セーブデータ変換

### Web → デスクトップ

```sh
./converter/web2desk.mjs <バックアップしたjsonのパス>
```
