// ブラウザのコンソールにコピペして実行する

// ローカルストレージからデータを取得
const localStorageData = JSON.stringify(localStorage);

// データをファイルに保存
const blob = new Blob([localStorageData], { type: "application/json" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = `${document.title}.json`;
link.click();
