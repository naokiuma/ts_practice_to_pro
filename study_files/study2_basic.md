## bigintの書き方
数字nとする。
```
const testbig:bigint = 3n;
```

## !!はどういう時に使うのか？(p55)

```js
const input1 = "123"
console.log(!input1);//falseになる
console.log(!!input1);//trueになる
```
これは、boolean(input1)を短く書いているもの。

## 手動実行時にnodeに環境変数を渡す(p57)

```
SECRET=foo node dist/index.js
```
こうすると、コード側では「process.env.SECRET」として取得できる

## typescriptにはビット演算がある(p61)

and、or、XORを&、|、~などで計算できるよ。