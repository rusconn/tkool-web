// ブラウザのコンソールにコピペして実行する

// バックアップファイルの中身に置き換える
const json = {};

localStorage.clear();

for (const [key, value] of Object.entries(json)) {
  localStorage.setItem(key, value);
}
