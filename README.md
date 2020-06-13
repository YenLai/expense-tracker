### Expense Tracker 
使用 Node.js 和 express 框架來完成的記帳本，資料庫使用MongoDB，提供使用者增加、刪除、修改，查詢支出紀錄。
[開始記帳](https://immense-woodland-71920.herokuapp.com/)

### view
![image](https://github.com/YenLai/expense-tracker/blob/master/images/home.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/search.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/new.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/login.PNG)
![image](https://github.com/YenLai/expense-tracker/blob/master/images/register.PNG)

### env & install

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

9. 種子帳號
```
user2:
  email : user1@example.com
  password : 12345678
user2:
  email : user2@example.com
  password : 12345678

```


***

### package

- [VScode](https://code.visualstudio.com/) -開發環境
- [express](https://www.npmjs.com/package/express) -應用程式框架
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) -模版引擎
- [mongoose](https://mongoosejs.com/) -ODM
- [method-override](https://www.npmjs.com/package/method-override) - RESTful routes
- [passport](http://www.passportjs.org/)


