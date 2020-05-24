### 記帳本
使用 Node.js 和 express 框架來完成的記帳本，資料庫使用MongoDB，提供使用者增、刪、查、改，支出紀錄。
[開始記帳](https://immense-woodland-71920.herokuapp.com/)

## 環境安裝

1. 開啟終端機到存放此專案的位置並執行
```
git clone https://github.com/YenLai/expense-tracker.git
```
2. 進入此專案資料夾
```
cd expense-tracker
```
3. 安裝npm套件
```
npm install
```
4. 執行seeder
```
npm run seed
```
5. 執行程式
```
npm run dev
```
6. 當終端機顯示如下，表示伺服器已成功啟動
```
The server is listening on http://localhost:3000
```
7. 若要退出伺服器
```
Ctrl+C *2  //連按兩下Ctrl+C結束批次工作
```
8. 可開啟任一瀏覽器，輸入[http://localhost:3000](http://localhost:3000)即可開始使用!

## 畫面
![image](https://github.com/YenLai/expense-tracker/blob/master/images/Home.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/new.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/edit.PNG)

***

## 使用工具

- [VScode](https://code.visualstudio.com/) -開發環境
- [express](https://www.npmjs.com/package/express) -應用程式框架
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) -模版引擎
- [mongoose](https://mongoosejs.com/) -ODM
- [method-override](https://www.npmjs.com/package/method-override) - RESTful routes


