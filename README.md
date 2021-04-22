# **React 練習 -- 客製 Hooks、獨立出 axios（YouTube搜尋網站）**

教學影片 [Modern React with Redux [2020 Update] -- CH.14](https://www.udemy.com/course/react-redux/learn/lecture/20788014#overview)

## **`專案架構`** 
```
src/
    api/
        youtube.js

    component/
        App.js
        SearchBar.js
        VideoList.js
        VideoItem.js
        VideoDetail.js
        Video.scss

    hook/
        useVideo.js
```
## **`客製 hook。useVideo`**
> 輸入：關鍵字變數<br> 輸出：function（searchTerm() {呼叫 api、改變 state}）、及 state（videos）。

學習重點：
- App.js
    - 引用自定義 hook
    - 不用 hook 的原始方法（備註區）
- useVideo.js
    - 自定義 Video Hook
    - 呼叫 Api（引用 youtube.js）
## **`SearchBar`**
> 輸入關鍵字，改變父層元件（App.js）的 state。

學習重點：
- App.js
    - 傳遞 "可以改變 state 的 function" 給 SearchBar
- SearchBar.js
    - react input 常用模式: value 綁 state
    - useState 用法（functional component）
    - onSubmit
    - 利用 function props 改變父層 state
## **`Video`**
> 根據 props 顯現影片列表、主影片（搜尋出的第一個影片）

學習重點：
- VideoDetail.js
- VideoList.js
- VideoItem.js
    - 元件單獨引用 css/sass
## **`API`**
> axios基本設定獨立出一個檔案，簡潔方便

學習重點：
- youtube.js
    - [google API 用法](https://www.udemy.com/course/react-redux/learn/lecture/12531356#overview)
    - axios 基本設定
