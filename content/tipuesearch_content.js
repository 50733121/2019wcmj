var tipuesearch = {"pages": [{'title': '50733121期中報告', 'text': 'content 1 \n 我第一個javascript程式 \n \n \n \n \n \n \n \n \n < p >< button   onclick = "myFunction()" >Try it</ button ></ p > \n < p   id = "demo" ></ p > \n < script >//\xa0 \n function myFunction() { \n \xa0\xa0 document.getElementById("demo").innerHTML = Math.floor(Math.random()*10); \n } \n </ script > \n \n \n \n \n \n \n \n \n \n \n 摸一下 \n \n \n https://www.youtube.com/watch?v=FXoxbXuQ3G8 \n \n', 'tags': '', 'url': '50733121期中報告.html'}, {'title': '50733121期末報告', 'text': '50733121 近端配置管理 windows network setting chrome proxy firefox proxy mde.tw github.com \n portable programming system portablegit - remove helper = manager login github add repository - README.md \n git clone self-repo and CMSimfly y:\\home\\.gitconfig git config --global user.name"50733121" git config --global user.email"50733121@gm.nfu.edu.tw" git config --global http.proxy  http://140.130.17.4:3128 使用git add .進行拍快照 \n git commit -m"commit description" git push Github Pages - setting,url 使用python wsgi.py進入自己的動態網站 \n \n', 'tags': '', 'url': '50733121期末報告.html'}, {'title': '關於github', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add \n git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit \xa0 \n git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push \n git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n 靜態 CMSimfly \n 利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用 \xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容', 'tags': '', 'url': '關於github.html'}, {'title': '近端管理與配置', 'text': '先確認是否有連到網路 \n \n 如果有連到網路就可以先去googlechrome的設定找到proxy \n \n 點進去之後找到LAN設定 \n \n 點進去將會看到你現在的代理伺服器的位址以及連接阜 \n \n 然後進階點進去會看到一些IP,那些是當你使用proxy將不會連到以下開頭的IP \n \n 以上就是proxy大約的設定', 'tags': '', 'url': '近端管理與配置.html'}, {'title': '學習概述', 'text': '\n 是否已經在自己的隨身碟建立隨身程式系統? 此一隨身系統以 \xa0 2019_cdb_w5.7z \xa0 為基礎, 使用者必須會自行查驗 \xa0 \xa0 是否已經將 portablegit 中的 helper = manager 的設定移除? \xa0 \xa0 \xa0python 是否已經安裝 flask, bs4 與 lxml 模組? \xa0 \xa0 是否了解 git 以 https 連線時, proxy 將採用那一個檔案中的設定? \xa0 \xa0 是否已經學會如何採用 ssh 模式維護 github 上的倉儲? \xa0 \xa0 是否了解 CMSimfly 動態與靜態系統之間的關係? \xa0 \xa0 是否會在 CMSimfly 中上傳檔案, 引用檔案? \xa0 \xa0 是否會在 CMsimfly 中上傳圖檔, 引用圖檔? \xa0 \xa0 是否會在 CMSimfly 中嵌入 Youtube 影片? \xa0 \xa0 是否會在 CMSimfly 頁面中加入 Javascript 互動程式? W14 -> 所完成的隨身示範系統為\xa0 2019_cdb_w13.7z \xa0(s1 Fossil SCM 的 doc 為:\xa0 https://s1.mde.nfu.edu.tw:5443/kmol2019/doc/trunk/index.html , Github 倉儲為:\xa0 https://github.com/scrum-4/2019wcmj , Github Pages 網頁為:\xa0 https://scrum-4.github.io/2019wcmj/ ) \xa0 \xa0 是否會更改 CMsimfly 靜態系統所使用的模板? \xa0 \xa0 是否能將 USB 隨身碟格式為 NTFS 或 extFAT, 以便放入 Ubuntu 虛擬主機檔案? \xa0 \xa0 是否會使用自己隨身碟中的 Virtualbox 與 Ubuntu 中的 Fossil SCM 來伺服靜態 CMSimfly 檔案? \xa0 \xa0 是否會使用自己隨身碟中的 Virtualbox 與 Ubuntu 中的 uwsgi 來伺服動態 CMSimfly 系統? 2. 是否已經根據各上述階段任務的操作拍成說明影片, 嵌入自己的 Github Pages 網站? 3. 是否已經著手執行各學員的期末專案, 是否了解各學員的期末報告, 必須同時呈現 html 與 pdf 版本. 各學員繳交供評分之內容: 個人倉儲 Github Pages 網站及 pdf 格式之期末報告. \n \n', 'tags': '', 'url': '學習概述.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit \xa0 git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n 靜態 CMSimfly \n 利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用 \xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '骰子', 'text': " Your browser doesn't support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n", 'tags': '', 'url': '骰子.html'}, {'title': 'ROC Flag', 'text': '\n  啟動 Brython  \n \n \n \n  導入 Brython 標準程式庫  \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'ROC Flag.html'}, {'title': '虎科VPN', 'text': '1. 首次使用須先安裝SSL VPN 程式(Juniper Networks Connect) \n (1)請依您的作業系統版本下載使用者端程式： 連結 \n (2)程式下載完成後，點擊兩下開始安裝。 \xa0 \xa0 \n \xa0 \xa0 \n \n 2.\xa0 進行身份驗證(可由Juniper Network Connect或IE，請擇一進行身分認證) \n \n 2-1:\xa0Juniper\xa0Network Connect 應用程式認證 \n \n \n 1."點選搜尋" > 輸入程式名稱為Network Connect> 點擊Network Connect \n \n 2.執行程式後，於"登入頁面"輸入網址 : \xa0 https://sslvpn9.twaren.net/nfu \xa0 ，後按下"執行" \n \n 3.輸入使用者帳號密碼，請填入校務行政AD帳號及密碼。請完整填寫您在校務行政AD帳號以及密碼，否則國網中心找不到對象進行身份確認 \xa0 ！(例: 員工編號或學號@ctx10.nfu.edu.tw） \n \n (以下為舊版本的登入畫面) \n \n \n 4.出現"設定控制-警告"視窗，按下"是" \n \n \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa05.螢幕右下角顯示"已連接"，表示已成功連線。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \n', 'tags': '', 'url': '虎科VPN.html'}, {'title': '虛擬主機', 'text': '利用 Virtualbox 建立虛擬 Ubuntu 18.04 網際內容管理系統伺服主機: 1. 安裝最新版的 Virtualbox 2. 建立 Ubuntu 18.04 虛擬主機 3. 以網路卡橋接啟動 Ubuntu 伺服器 \n 4. 以 sudo apt install nginx 安裝 nginx WWW 伺服器 \n 5. 以 ifconfig 查 Ubuntu 伺服器的 IP, 測試 nginx 伺服器是否可以連線 \n 6. 以 Windows 10\xa0 下的 Filezilla client, 將編輯好的 nginx 設定檔案送到 Ubuntu \n 7.\xa0利用 Ubuntu 指令將設定檔案搬至設定位置後, 以 /etc/init.d/nginx restart 重新啟動 nginx 8. 在 Ubuntu 中以 sudo apt install uwsgi 安裝 uwsgi 9. 在 Windows 10 編輯 uwsgi 與 nginx 所需的設定檔案, 完成後以 filezilla 送至 Ubuntu. 10. 將 CMSimfly 程式碼送到 Ubuntu 伺服器中對應目錄後. 11. 在 Ubuntu 建立 cmsimfly 服務, 並設定隨機啟動. 12. 完成後, 在 Windows 10 以瀏覽器連線至 CMSimfly, 確認動態網頁與靜態網頁可以在虛擬主機中正常啟動. \n \n', 'tags': '', 'url': '虛擬主機.html'}, {'title': 'FileZillaPortable', 'text': '利用filezillaportable將檔案傳至虛擬主機並且在虛擬主機輸入sudo apt install niginx即可 \n \n \n', 'tags': '', 'url': 'FileZillaPortable.html'}, {'title': 'VirtualBox', 'text': '首先要下載VirtualBox \n \n 然後點擊new,要創建一個名子需ub開頭 \n 好了之後,按next容量選擇4096MB \n \n 接下來選擇create a virtual hard disk now \n \n 然後選擇VMDK,windows選擇這個較適當 \n \n 然後選擇dynamically allocated,空間能用多少算多少 \n \n 然後改成500GB \n \n 然後按create就創建完成 \n', 'tags': '', 'url': 'VirtualBox.html'}, {'title': 'ubuntu設定', 'text': '先選擇資料夾裡的ubuntu-18.04.2-live-server-amd64按start \n \n 選擇英文 \n \n 然後按enter直到要你輸入proxy address並輸入當前的proxy和阜號 \n \n 按ENTER直到問你是否格式化且按繼續 \n \n 然後要你註冊帳號密碼 \n \n 然後會要你install opssh server按空白建(space) \n \n 按ENTER就完成了ubuntu的設定', 'tags': '', 'url': 'ubuntu設定.html'}]};