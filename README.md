# cloud_native_hw2
使用 TypeScript 撰寫的微小專案，裡面只有展示用的除法函式、測試 (unit test) 與 GitHub 設定檔案

## 專案運作方式
- `yarn install`：安裝相依套件
- `yarn lint`：檢查程式碼風格
- `yarn format`：自動格式化程式碼
- `yarn test`：執行單元測試

## 專案架構
- `src/`：主要程式碼
- `tests/`：單元測試檔案
- `.github/ISSUE_TEMPLATE/`：Issue 模板
- `.github/workflows/`：CI 自動化流程

## 測試說明
- 在除法函數中，a / b 應該能正常運作
- 若 b = 0 則應拋出錯誤，除數不得為 0

## Github Action 自動化測試項目
- yarn lint : 使用 Eslint 測試程式碼風格
- yarn format : 使用 Prettier 測試程式碼排版
- yarn test : 使用 Jest 針對寫好的 test case 作測試
