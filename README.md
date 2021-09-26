# 2020-JavaScript Final Project 網頁式鋼琴
(圖)

## 1. - Motivation
之前回家的時候心血來潮想說來彈一下鋼琴，結果家裡的鋼琴壞掉了，於是我想說試試看用javascript寫一個彈鋼琴的網頁。讓大家可以隨時隨地練琴  

## System Functions
參考家中的電子琴，還原他有的功能，除了一般的彈鋼琴以外還有節拍器和錄音的功能。  
    1.彈鋼琴可以用滑鼠點或是鍵盤來操作，並且會有文字顯示你彈了那些音，按下琴鍵會有反應的彈鋼琴的動畫  
    2.有一個節拍器的按鈕可以做使用  
    3.有一個錄音按鈕，錄音完會產生一個音檔可以播放或下載(需要使用電腦內建或連接的麥克風)  
    
## 2. - System development platform
在Chrome下操作 
錄音使用瀏覽器內建的Media​Recorder  API (需要瀏覽器支持MediaStreamRecording 相關功能)  
Html的部分有使用boostrap來做排版  
javascript  

## 3. - Content
* html : 使用boostrap 的 row 來合併鋼琴按鍵的div，並套用了一些屬性作美化  
* css : 鋼琴按鍵和對照的按鈕都有做當網頁放大或所小時要跟著變動的樣式  
* audiosrc資料夾 : 裡面是存各鋼琴按鍵和節拍器的聲音  
* Favicon : logo的圖片  
* 其他一些圖片檔  
* javascript : 兩個檔案final.js 和 recorder.js  
### final.js :  
    1.主要做鋼琴的互動  
    2.分別作滑鼠和鍵盤的互動  
    3.可以判斷同時按了那些按鍵並顯示  

    使用document.querySelector來抓取對應的音檔和按的是哪個鍵  
    再對應按的鍵顯示現在按的是哪個音，並播放音檔。  
### recorder.js  
    做錄音和生成的音檔處理

    首先需要先從瀏覽器獲得存取你麥克風的權限，從瀏覽器獲得存取
    你麥克風的權限，通過按鈕啟動錄音，詳細方法寫在書面報告，最
    後收集得到的數據創建html使用的audio標籤。

## 4. - What I has learned
這次專題用到比較複雜的部份就是錄音的部分，上網看了很多不同的版本，最後挑了一個程式碼感覺比較短的做。  
然後花最多時間應該是鋼琴音效素材吧，上網找很多是大陸網站或是要付費，而且很多只有7個音，於是最後我載了一個鋼琴的軟體一個一個音錄，再慢慢拉音軌調聲音。  
另外技術成分比較高的應該是可以同時判斷多個輸入的按鍵並一併顯示在螢幕上(例如我按了5個音，就會全部都顯示出來)

## 5. - Reference  
[使用網頁擷取內建麥克風](https://www.cnblogs.com/Wayou/p/js_audio_recorder.html "link")  
[Boostrap](https://getbootstrap.com/ "link")  
[視窗縮放概念](https://www.wfublog.com/2017/06/rwd-font-size-solution-vmin.html "link")

 

