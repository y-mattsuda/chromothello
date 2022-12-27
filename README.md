# chromothello
AIとオセロができるChrome拡張機能

## 開発時ビルド（ホットリロードあり）
`$ yarn dev`

## ビルド
`$ yarn build`

## 利用方法
1. `$ git clone https://github.com/y-mattsuda/chromothello.git`
1. ビルドすると*dist*ディレクトリができる
1. *dist*ディレクトリを chrome://extensions/ の「デベロッパーモード」を有効にした後、「パッケージ化されていない拡張機能を読み込む」から読み込む
1. 拡張機能アイコンをクリックするとオセロがプレイできる
