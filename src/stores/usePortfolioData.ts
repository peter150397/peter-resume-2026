import { defineStore } from 'pinia'
import type { Portfolio } from '@/types/type'

export const usePortfolioData = defineStore('portfolioData', () => {
    const portfolioAllData: Portfolio[] = [
        // 歐可影像
        {
            title: '歐可影像',
            id: 'ouqeimage',
            squareBg: '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-banner.png',
                creationTime: '2024.09',
                link: {
                    id: 15720366,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://ouqe-image.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-1.png',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-2.png',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-3.png',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-4.png',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-5.png',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-screenshot-6.png',
            ],
            feature: [
                {
                    title: '頁面跳轉效果',
                    content: `<p>每次跳轉頁面時，希望有一個遮罩擋住，等頁面跳轉完成後在滑開的效果。

                    監聽<code>beforeunload</code>來滑入遮罩；監聽<code>DOMContentLoaded</code>來滑開遮罩</p>`,
                },
                {
                    title: '首頁Banner效果',
                    content: `<p>剛進入網站時，公司的Logo會在畫面中間，下面是公司名。
                    往下滾動時，Logo會漸漸回到畫面的左上角，公司名會慢慢向右淡出。

                    利用gsap ScrollTrigger來追蹤畫面滾動的位置。
                    網頁載入時，會先計算Logo應該放多大，我設定是視窗高度的一半，也要計算logo的位置，要放在視窗中間，因為是用<code>gsap.from()</code>設定，所以向下滾動時，logo會漸漸變成預設大小並回到原本位置。</p>`,
                },
                {
                    title: '合作流程區塊',
                    content: `<p>下滑時，區塊會改成左右移動，背景也會左右移動，只是速度比較慢。

                    利用gsap ScrollTrigger來監聽滾動事件，區塊根據滾動距離而向左或向右移動。需要設定<code>pin: true</code>讓區塊一直停留在畫面上，才不會再向下滑動時，區塊就往上跑了。</p>`,
                },
                {
                    title: '直播案例區塊',
                    content: `<p>分成幾個案例區塊，當滾動到該區塊時，左邊內容的部分會向右淡入，右邊對應的圖片會淡入。

                    利用gsap ScrollTrigger來監聽滾動事件，當滾動到該區塊時，切換顯示的內容與圖片。</p>`,
                },
            ],
            skills: [
                'Bootstrap',
                'SCSS',
                'Swiper.js',
                'AOS.js',
                'GSAP.js',
                'Webpack',
                'Wordpress',
                'UI UX設計',
            ],
            imgs: [
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-1.jpg',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-2.jpg',
                '/peter-resume-2026/portfolio/ouqeimage/ouqeimage-3.jpg',
            ],
        },
        // 日鋒有限公司
        {
            title: '日鋒有限公司',
            id: 'jihfeng',
            squareBg: '/peter-resume-2026/portfolio/jihfeng/jihfeng-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/jihfeng/jihfeng-banner.jpeg',
                creationTime: '2026.03',
                link: {
                    id: 11524923,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.jih-feng.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-1.png',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-2.png',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-3.png',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-4.png',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-5.png',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-screenshot-6.png',
            ],
            feature: [
                {
                    title: '模組化設計',
                    content: `<p>將網站各頁拆分成獨立的區塊，有自己的js、css檔案，方便維護與其他案子使用。
                    如果有重複使用的元件（像是卡片、分頁、FAQ元件），會另外再拆分出來，方便重複使用。</p>`,
                },
                {
                    title: '中英雙語網站',
                    content: `<p>客戶希望是雙語網站，語言包含中文與英文。

                    使用Wordpress的Polylang套件建立雙語網頁的資料。</p>`,
                },
                {
                    title: 'Banner滑動效果',
                    content: `<p>頁面的Banner標題兩旁會有幾個平行四邊形。當頁面下滑時，平行四邊形就會跟著滑動的速度往上或往下移動。

                    使用GSAP ScrollTrigger 來監聽網頁滾動事件。</p>`,
                },
                {
                    title: '文章新增“目錄”',
                    content: `<p>文章的內容分成多個區塊，並且在上方有個“目錄”，可以導航至對應的內容區塊。

                    後台上區塊資料時，還包含“目錄文字”的欄位，有輸入才會出現在目錄中。</p>`,
                },
            ],
            skills: ['Swiper.js', 'GSAP.js', 'AOS.js', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-1.jpeg',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-2.jpeg',
                '/peter-resume-2026/portfolio/jihfeng/jihfeng-3.jpeg',
            ],
        },
        // 奇正智能
        {
            title: '奇正智能',
            id: 'keycheng',
            squareBg: '/peter-resume-2026/portfolio/keycheng/keycheng-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/keycheng/keycheng-banner.png',
                creationTime: '2025.07',
                link: {
                    id: 88915427,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://keycheng.designhu-demo.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-1.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-2.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-3.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-4.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-5.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-screenshot-6.png',
            ],
            feature: [
                {
                    title: '多國語言網站',
                    content: `<p>客戶希望新增繁體中文、簡體中文與英文。

                    使用Wordpress的Polylang套件建立各國語言的資料。</p>`,
                },
                {
                    title: '首頁載入動畫',
                    content: `<p>一開始畫面只能透過一個小的菱形在畫面中央可以看到首頁的內容，接下來菱形會旋轉一圈，然後會慢慢放大直到整個內容都被看到。

                    這個必須使用<code>@keyframes</code>來設計較複雜的動畫效果。

                    動畫的過程將<html>設定<code>overflow: hidden;</code>已達到將畫面鎖住的效果。</p>`,
                },
                {
                    title: '搜尋彈窗',
                    content: `<p>搜尋的欄位放在彈窗內，當輸入關鍵字時，會有一個搜尋轉圈的icon，並在取得資料後關閉。

                    輸入關鍵字後，會透過Wordpress API將關鍵字傳到後端。在篩選出文章資料後，回傳至前端，並顯示在搜尋欄位下。</p>`,
                },
                {
                    title: 'Portfolio 時間線區塊',
                    content: `<p>這個區塊希望是一個類似輪播的區塊，方向改成上下。
                    當換頁的時候，裡面的文字與圖片會以不同的速度滑動，起步時間也不太一樣。
                    比較複雜的地方是每頁內容的組成都不太一樣，每頁都要部分獨立製作。</p>`,
                },
                {
                    title: 'Awards and Certifications 的 Grid 下拉區塊',
                    content: `<p>此Grid內的項目都有一個下滑的區塊，點擊項目時會在下方長出下滑區塊。點擊其他項目或是下滑區塊內的“關閉”按鈕就會將下滑區塊收回。

                    開啟下滑選單時需要有一個向下淡入的動畫，關閉時相反。</p>`,
                },
                {
                    title: 'Global Network 3D地球區塊',
                    content: `<p>在展現全球據點時，需要有一個3D地球來示意，該地球可以用滑鼠做水平方向的旋轉。
                    地圖上有個據點的位置，網站管理員只要輸入地點的經緯度，就會顯示在地球上。

                    左邊有一個據點的列表，當點擊時，地圖會旋轉至據點位置，並且有一條直線從據點位置連結至地點資訊區塊。

                    3D地球是使用Three.js建立的，有些比較複雜的問題：</p>
                    <ol><li>因為是3D球體，如果是放一般的地圖，越往南北極的位置，畫面會越扭曲，所以拿到的圖片還要先做“預扭曲處理”。</li>
                    <li>為了要讓經緯度正確的顯示在地圖上，除了要重新調整地圖，也建立了一個函數來將經緯度轉換成3D球體的座標。</li>
                    <li>當點擊據點時，要有線條延伸至據點座標的動畫，必須計算每個座標到最上面或最下面的距離。而從經緯度轉換過來的經維度是不正確的，因為那是3D的座標，但是資訊區塊是平面的，所以要先將3D座標轉換2D的，才計算的出那條線的高度。</li>
                    <li>旋轉球體的效果分成兩種，一個是使用滑鼠拖移；一個是點擊據點後的旋轉。

                    滑鼠拖移的方法是監聽多個滑鼠的事件，<code>pointerdown</code>開始拖曳功能，確定開始的座標；<code>pointermove</code>與開始座標比較，算出旋轉的量；<code>pointerup</code>、<code>pointerleave</code>關閉拖移功能

                    點擊據點的方法是根據據點的3D座標計算出需要旋轉的量，從而達到旋轉的效果。</li></ol>`,
                },
                {
                    title: '產品頁面下滑效果',
                    content: `<p>產品頁面左邊會有一個進度條，隨著頁面的滾動而上下移動。
                    上方有一個數字欄位，代表產品頁面的區塊索引，當滾動到新的區塊時，數字會跟著變換。
                    背景顏色也會因為滾動到新的區塊而改變，顏色可以在後台設定，頁面的文字也會跟著改變。

                    我使用gsap ScrollTrigger來追蹤畫面滾動的位置。當滾動時，進度條會跟著移動，而滾動到新的區塊時，數字會改、背景跟文字顏色也會改變。
                    針對文字顏色，我抓取背景顏色的RGB數值，將RGB個別做加權並取得一個加總值以用於判斷文字要用深色還是淺色。</p>`,
                },
                {
                    title: '頁面轉換成PDF檔',
                    content: `<p>希望有將網頁下載成PDF檔的功能。

                    先使用html2canvas套件將網頁轉換成一張圖片，然後使用jsPDF建立一個PDF檔，設定大小為A4，過長的部分就切割成分頁。</p>`,
                },
            ],
            skills: [
                'Tailwind',
                'Swiper.js',
                'GSAP.js',
                'html2canvas',
                'jsPDF',
                'Three.js',
                'Vite',
                'Wordpress',
            ],
            imgs: [
                '/peter-resume-2026/portfolio/keycheng/keycheng-1.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-2.png',
                '/peter-resume-2026/portfolio/keycheng/keycheng-3.png',
            ],
        },
        // 宸曜國際醫療
        {
            title: '宸曜國際醫療',
            id: 'globalgclinic',
            squareBg: '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-banner.jpeg',
                creationTime: '2025.04',
                link: {
                    id: 94147411,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.global-gclinic.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-1.png',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-2.png',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-3.png',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-4.png',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-5.png',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-screenshot-6.png',
            ],
            feature: [
                {
                    title: '中英雙語網站',
                    content: `<p>客戶希望有中文、英文兩種語言，而且兩個語言的網站架構有些不同，中文網站會比較複雜一些。

                    使用Wordpress的Polylang套件建立多國語言的資料。可以使用Polylang內建的函數來判斷中英文頁面，做到不同架構的效果。</p>`,
                },
                {
                    title: '動態跑動數字',
                    content: `<p>當使用者下滑到特定區塊時，裡面的數字會從 0 跑動到預設定的數字。

                    我使用gsap ScrollTrigger來追蹤畫面滾動的位置，並用<code>setInterval()</code>來無限渲染數字，直到數字到目標。</p>`,
                },
                {
                    title: '據點地圖效果',
                    content: `<p>在展現服務據點時，要搭配一個世界地圖。據點類別按照各大洲與台灣北、中、南區分，並以標籤的的形式顯示。類別中有資料，標籤才會出現在地圖上。
                    當滑鼠指向標籤時，該類別的區塊就會變色，如果是指向台灣，都統一是台灣變色。
                    點擊標籤後，標籤變大、區塊再次變色，並且顯示該區塊內所有據點的列表。

                    先將地圖轉換成SVG檔，並將各個國家根據大洲區分，當觸發大洲的標籤時，大洲內的國家就會改變顏色。</p>`,
                },
                {
                    title: '文章分享至社交媒體',
                    content: `<p>文章內有連結可以將文章分享至Facebook貼文、LINE貼文或是複製網址。</p>`,
                },
            ],
            skills: ['Tailwind', 'Swiper.js', 'GSAP.js', 'AOS.js', 'Vite', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-1.jpeg',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-2.jpeg',
                '/peter-resume-2026/portfolio/globalgclinic/globalgclinic-3.jpg',
            ],
        },
        // 緯安實業
        {
            title: '緯安實業',
            id: 'penlux',
            squareBg: '/peter-resume-2026/portfolio/penlux/penlux-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/penlux/penlux-banner.jpg',
                creationTime: '2024.08',
                link: {
                    id: 10120497,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.penlux.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-1.png',
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-2.png',
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-3.png',
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-4.png',
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-5.png',
                '/peter-resume-2026/portfolio/penlux/penlux-screenshot-6.png',
            ],
            feature: [
                {
                    title: '會員系統與商城系統',
                    content: `<p>客戶要求新增一個商城系統。
                    在產品頁中，使用者可以將產品新增至購物車，輸入運送資料後，可以使用Google Pay、Apple Pay、PayPal等付款方式。
                    Navbar右邊有一個購物車，點擊可以看目前購物車內的產品，可以在裡面增加數量，會顯示目前總金額，並可以在下方送出訂單。

                    會員除了可以用輸入資料註冊，也可以用社交媒體註冊。
                    會員會有個人的頁面，裡面可以修改個人資料密碼，查看歷史訂單等等。

                    我使用Wordpress的套件 ”WooCommerce“ 處理，但因為套件使用的模板是固定的，所以需要另外建立php檔來覆蓋預設的模板。</p>`,
                },
                {
                    title: '產品篩選系統',
                    content: `<p>產品匯集頁左邊有一個按鈕可以點開篩選的區塊，點擊裡面的checkbox，就會顯示出符合條件的產品。

                    進入頁面時，先使用API取得所有產品的資料。當點擊條件時，會將所有條件加入到陣列中。然後在根據陣列，篩選符合條件的產品資料並重新渲染到畫面。
                    同時要在重新渲染分頁區塊的元素與分頁邏輯。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'AOS.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/penlux/penlux-1.png',
                '/peter-resume-2026/portfolio/penlux/penlux-2.png',
                '/peter-resume-2026/portfolio/penlux/penlux-3.png',
            ],
        },
        // 英爵醫美
        {
            title: '英爵醫美',
            id: 'wbeauty',
            squareBg: '/peter-resume-2026/portfolio/wbeauty/wbeauty-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/wbeauty/wbeauty-banner.jpg',
                creationTime: '2025.08',
                link: {
                    id: 81452791,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://wbeauty.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-1.png',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-2.png',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-3.png',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-4.png',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-5.png',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-screenshot-6.png',
            ],
            feature: [
                {
                    title: '模組化設計',
                    content: `<p>將網站各頁拆分成獨立的區塊，有自己的js、css檔案，方便維護與其他案子使用。
                    如果有重複使用的元件（像是卡片、分頁、輪播），會另外再拆分出來，方便重複使用。</p>`,
                },
                {
                    title: '複製網址按鈕',
                    content: `<p>有些文章內頁需要一個按鈕可以複製該頁面的連結，方便使用者快速複製網址，並在別的地方貼上。
                    複製成功時，會跳出“已複製”文字；反之跳出“請再試一次”。

                    使用異步函數處理。
                    <code>await navigator.clipboard.writeText(window.location.href);</code>用於將當下網址寫進剪貼簿，複製成功後就顯示成功的文字，並在一秒後關閉；反之顯示再試一次的文字。</p>`,
                },
                {
                    title: '文章篩選系統',
                    content: `<p>文章匯集頁需要有一個文章篩選的系統，裡面包含關鍵字、文章類別（單選）、標籤（多選）。

                    透過Wordpress註冊客製化的API，API會取得前端傳來的值，並透過Wordpress的內建函數<code>WP_Query()</code>做篩選。
                    篩選出來的資料很雜亂，需要在做“資料重組”只回傳前端需要的資料。

                    當其中一個input元素改變時，會將所有的已選值透過REST API 的 POST方式傳送至後端並取得篩選後的值，並重新渲染文章頁與分頁區塊。</p>`,
                },
            ],
            skills: ['Swiper.js', 'AOS.js', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-1.jpg',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-2.jpg',
                '/peter-resume-2026/portfolio/wbeauty/wbeauty-3.jpg',
            ],
        },
        // 三一照明科技
        {
            title: '三一照明科技',
            id: 'citinova',
            squareBg: '/peter-resume-2026/portfolio/citinova/citinova-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/citinova/citinova-banner.jpg',
                creationTime: '2024.01',
                link: {
                    id: 40120350,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.citinova.net/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-1.png',
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-2.png',
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-3.png',
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-4.png',
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-5.png',
                '/peter-resume-2026/portfolio/citinova/citinova-screenshot-6.png',
            ],
            feature: [
                {
                    title: '中英雙語網站',
                    content: `<p>客戶希望有中文、英文兩種語言，每個網站都有中英兩個語言的資料，如果沒有，則頁首就沒有該語言可以切換。

                    使用Worepress的WPML套件，建立兩個語言的資料。</p>`,
                },
                {
                    title: '網頁讀取特效',
                    content: `<p>每當跳轉網站時，都會跳出一個動畫，當網站讀取完成後關閉。

                    監聽document，當畫面都渲染後，隱藏讀取特效。</p>`,
                },
                {
                    title: '產品展示頁面',
                    content: `<p>客戶的產品擁有複雜的資料架構，除了主要的產品分類外，還包含其他資料，可能為單一、複數、可選的屬性，這些資料都會用於匯集頁的“篩選系統”。

                    內頁還需要規格書下載、配件、相關產品的連結，方便使用者導聯至相關的網頁。

                    在最上方，希望可以展示各顏色的產品圖片，會根據選取的顏色而顯示不同的圖片輪播。</p>`,
                },
                {
                    title: '產品匯集頁篩選功能',
                    content: `<p>篩選條件主要分成兩種形式：checkbox與range。</p>
                    <ul><li>range的部分，客戶希望是有前後兩頭可以調整篩選範圍，所以需要建立兩個range並重疊在一起，分別代表最大值與最小值。</li>
                    <li>checkbox的部分，除了傳統的小方框外，還有包含icon的樣式。</li></ul>

                    <p>
                    每當使用者使用篩選，產品列表上方就會顯示篩選後的數量與已篩選的條件。如果是range的條件，會顯示最大與最小值。使用者可以點擊來取消單個條件，或是點擊全部清除來初始化篩選。

                    我的做法是先新增一個陣列，用於裝所有篩選條件。
                    接下來監聽所有的input，每當input發生改變時，就重新渲染產品列表，也渲染上方的條件列。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/citinova/citinova-1.jpg',
                '/peter-resume-2026/portfolio/citinova/citinova-2.jpg',
                '/peter-resume-2026/portfolio/citinova/citinova-3.png',
            ],
        },
        // 鉅仁有限公司
        {
            title: '鉅仁有限公司',
            id: 'keiking',
            squareBg: '/peter-resume-2026/portfolio/keiking/keiking-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/keiking/keiking-banner.jpeg',
                creationTime: '2025.11',
                link: {
                    id: 66417295,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.keiking.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-1.png',
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-2.png',
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-3.png',
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-4.png',
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-5.png',
                '/peter-resume-2026/portfolio/keiking/keiking-screenshot-6.png',
            ],
            feature: [
                {
                    title: '模組化設計',
                    content: `<p>將網站各頁拆分成獨立的區塊，有自己的js、css檔案，方便維護與其他案子使用。
                    如果有重複使用的元件（像是卡片、彈窗、分頁），會另外再拆分出來，方便重複使用。</p>`,
                },
                {
                    title: '會員系統',
                    content: `<p>網站要有一個會員系統，使用者可以註冊會員，登入後才可以下載型錄，不然會跳出視窗提醒使用者登入。
                    網站管理員可以在後台核准或拒絕要註冊的資料。

                    這個可以使用Wordpress的套件處理。</p>`,
                },
                {
                    title: '產品頁與詢價頁',
                    content: `<p>產品內頁需要有產品的規格、簡述與圖片，也可以選擇相關的產品來導連過去。
                    每個內頁都可以將該產品資訊傳送至詢價頁。

                    傳送的方式是將產品ID 儲存至 Session Storage內，在詢價頁會讀取Session Storage內的資料，並透過API使用產品ID取得完整資訊。

                    詢價頁可以看到所有已加入的產品，可以在表格中新增詢價的產品數量。下方有基本資料要填。</p>`,
                },
                {
                    title: '產品篩選',
                    content: `<p>篩選功能條件分成多個分類與關鍵字。當使用到篩選時，會有讀取的動畫，並在載入所有產品後關閉動畫。

                    建立一個陣列裝所有的條件，每當條件改變時，就更新條件陣列並傳至後端跑篩選邏輯。
                    回傳資料後就重新渲染產品列表、分頁。</p>`,
                },
                {
                    title: '匯集頁分頁',
                    content: `<p>各個匯集頁都要有分頁，可以點擊箭頭或是數字來換頁。一樣要有讀取動畫。
                    而產品匯集頁在篩選後，分頁也要重新計算。</p>`,
                },
            ],
            skills: ['Swiper.js', 'GSAP.js', 'AOS.js', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/keiking/keiking-1.png',
                '/peter-resume-2026/portfolio/keiking/keiking-2.jpeg',
                '/peter-resume-2026/portfolio/keiking/keiking-3.jpeg',
            ],
        },
        // 歌德森企業
        {
            title: '歌德森企業',
            id: 'avzone',
            squareBg: '/peter-resume-2026/portfolio/avzone/avzone-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/avzone/avzone-banner.png',
                creationTime: '2024.04',
                link: {
                    id: 21934257,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.avzone.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-1.png',
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-2.png',
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-3.png',
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-4.png',
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-5.png',
                '/peter-resume-2026/portfolio/avzone/avzone-screenshot-6.png',
            ],
            feature: [
                {
                    title: '產品頁面',
                    content: `<p>客戶希望有一個展示產品的頁面，裡面包涵各產品的簡述、規格、特色、圖片等，下方需要一個相關產品，抓取同子分類的產品。

                    個別產品頁要有連結可以到詢價頁面。

                    因為客戶的產品類別較複雜，需要在後台以樹狀方式建立多層分類。</p>`,
                },
                {
                    title: '頁首下滑產品選單',
                    content: `<p>因為複雜的產品分類，客戶希望在頁首選單中，針對產品額外增加一個下滑選單，裡面包含所有的分類。當滑鼠滑動到其中一個分類時，右邊會重新渲染元素，來顯示該分類的子分類。</p>`,
                },
                {
                    title: '頁首搜尋欄位',
                    content: `<p>在頁首有一個搜尋欄位，當使用者輸入關鍵字時，可以像是搜尋引擎一樣，下方要顯示出包含該文字的產品。

                    一開始，我先透過Wordpress內建的API取得所有的產品資料，接下來監聽搜尋框，當輸入的文字改變時，從所有的產品資料中篩選出符合的產品。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/avzone/avzone-1.png',
                '/peter-resume-2026/portfolio/avzone/avzone-2.png',
                '/peter-resume-2026/portfolio/avzone/avzone-3.png',
            ],
        },
        // 蒔⽲⽇美學
        {
            title: '蒔⽲⽇美學',
            id: 'shihoriclinic',
            squareBg: '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-banner.png',
                creationTime: '2025.05',
                link: {
                    id: 65751452,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.shihoriclinic.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-1.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-2.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-3.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-4.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-5.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-screenshot-6.png',
            ],
            feature: [
                {
                    title: '頁首下滑選單',
                    content: `<p>因為這個案子的架構比較複雜，頁首需要放比較多連結，所以用下滑選單的方式呈現。

                    當使用者hover連結的時候，子連結的選單會從上面往下滑動。</p>`,
                },
                {
                    title: '文章內容模板化',
                    content: `<p>設計師針對各頁的文章內頁有多個模板，讓客戶可以根據喜好挑選，建立的每個模板都會顯示在最上方的目錄內。

                    使用Wordpress的套件ACF建立各模板的資料架構，再根據資料渲染不同的模板到畫面上。</p>`,
                },
            ],
            skills: ['Tailwind', 'Swiper.js', 'GSAP.js', 'Vite', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-1.png',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-2.jpg',
                '/peter-resume-2026/portfolio/shihoriclinic/shihoriclinic-3.png',
            ],
        },
        // 皓仁居家照顧
        {
            title: '皓仁居家照顧',
            id: 'haoren',
            squareBg: '/peter-resume-2026/portfolio/haoren/haoren-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/haoren/haoren-banner.jpg',
                creationTime: '2023.11',
                link: {
                    id: 46372245,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.haorenhealthcare.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-1.png',
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-2.png',
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-3.png',
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-4.png',
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-5.png',
                '/peter-resume-2026/portfolio/haoren/haoren-screenshot-6.png',
            ],
            feature: [
                {
                    title: '網頁讀取特效',
                    content: `<p>客戶希望每次進入頁面時，都要有一個網頁讀取的特效，等頁面讀取完畢後，就會關閉。

                    首頁的特效內容是會有一個數字從0%跑到100%，然後logo縮小並淡出。

                    其他頁面則是圓點旋轉的動畫。</p>`,
                },
                {
                    title: '文字個別淡入效果',
                    content: `<p>進入頁面後，各頁面Banner區塊的文字與icon，都要依序淡入。

                    先將文字區塊根據字一個一個拆分成獨立的元素，然後在使用jQuery 的<code>delay()</code>函數讓元素依次淡入。</p>`,
                },
                {
                    title: '照顧資源篩選文章',
                    content: `<p>“照顧資源”的彙整頁需要有一個篩選系統，包含搜尋框和文章分類可以篩選。

                    可以透過Wordpress內建的API取得所有資料，在做進一步的篩選。</p>`,
                },
                {
                    title: '文章分享至社交媒體',
                    content: `<p>文章內頁要有連結可以分享至各個社交媒體，包含Facebook、LINE、X(Twitter)、電子郵件，或是複製網址。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'jQuery', 'Swiper.js', 'AOS.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/haoren/haoren-1.jpg',
                '/peter-resume-2026/portfolio/haoren/haoren-2.jpg',
                '/peter-resume-2026/portfolio/haoren/haoren-3.jpg',
            ],
        },
        // 鼎富金融科技
        {
            title: '鼎富金融科技',
            id: 'dingfu',
            squareBg: '/peter-resume-2026/portfolio/dingfu/dingfu-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/dingfu/dingfu-banner.png',
                creationTime: '2025.03',
                link: {
                    id: 88997144,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.dingfu.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-1.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-2.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-3.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-4.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-5.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-screenshot-6.png',
            ],
            feature: [
                {
                    title: '房貸試算頁面',
                    content: `<p>客戶需要一個試算頁面，除了基本資料外，還可以讓使用者透過拉桿選擇貸款金額、利率等。當拉動拉桿時，上方的數字會跟著改變。

                    監聽所有的input，當值發生改變時，重新渲染上面的數字。

                    因為input是客製化的，所以我先關閉了預設的樣式，並新增一個<div>代表進度條，當值發生改變時也要改變進度條的顏色。</p>`,
                },
            ],
            skills: ['Tailwind', 'Swiper.js', 'AOS.js', 'Vite', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/dingfu/dingfu-1.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-2.png',
                '/peter-resume-2026/portfolio/dingfu/dingfu-3.png',
            ],
        },
        // 佳捷生技
        {
            title: '佳捷生技',
            id: 'sitepartner',
            squareBg: '/peter-resume-2026/portfolio/sitepartner/sitepartner-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/sitepartner/sitepartner-banner.png',
                creationTime: '2024.07',
                link: {
                    id: 35378410,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.sitepartner.com.tw/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-1.png',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-2.png',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-3.png',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-4.png',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-5.png',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-screenshot-6.png',
            ],
            feature: [
                {
                    title: '中英雙語網站',
                    content: `<p>客戶希望建立一個包含中文與英文的網站。

                    使用Wordpress的WPML套件建立多國語言系統。</p>`,
                },
                {
                    title: '首頁Banner輪播效果',
                    content: `<p>首頁Banner的輪播區塊，希望能自動播放，並且下方會有一個進度條，當進度條到底，就會換頁。

                    使用Swiper.js內的<code>autoplay</code>屬性設定自動播放。並且監聽其中的<code>autoplayTimeLeft</code>事件，會返回剩餘時間的資料，用來改變進度條。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'AOS.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-1.jpg',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-2.jpg',
                '/peter-resume-2026/portfolio/sitepartner/sitepartner-3.jpg',
            ],
        },
        // 岦盛鋼鐵
        {
            title: '岦盛鋼鐵',
            id: 'bfvsteel',
            squareBg: '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-banner.png',
                creationTime: '2023.11',
                link: {
                    id: 99241057,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://www.bfvsteel.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-1.png',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-2.png',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-3.png',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-4.png',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-5.png',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-screenshot-6.png',
            ],
            feature: [
                {
                    title: '客製化輪播區塊',
                    content: `<p>這個網站包含多種客製化的輪播區塊。

                    首頁下方的“加工設備”區塊，分成兩個輪播，一個是圖片的輪播，效果是左右滑動，並且有前後的區別；另一個是文字的輪播，效果則是淡入淡出。兩個輪播必須彼此綁定，當一個滑動時，另一個也要滑動至對應的項目。
                    使用Swiper.js內的<code>controller.control</code>做雙向的綁定即可。

                    “工程實績”內的輪播，右邊要有一個輪播圖的縮圖，一樣要彼此綁定。
                    Swiper.js裡面有一個參數<code>thumbs</code>可以達到此效果。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'jQuery', 'Swiper.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-1.jpg',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-2.jpg',
                '/peter-resume-2026/portfolio/bfvsteel/bfvsteel-3.jpg',
            ],
        },
        // 翊志有限公司
        {
            title: '翊志有限公司',
            id: 'yijhih',
            squareBg: '/peter-resume-2026/portfolio/yijhih/yijhih-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/yijhih/yijhih-banner.png',
                creationTime: '2024.06',
                link: {
                    id: 51348720,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://yijhih.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-1.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-2.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-3.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-4.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-5.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-screenshot-6.png',
            ],
            feature: [
                {
                    title: '數字動態跑動',
                    content: `<p>Company頁面的Decades of Experience區塊，當滾到到這個區塊時，裡面的數字會從零一直上升到設定的數字為止。

                    監聽<code>scroll</code>事件，當滾動到區塊時，設定<code>setInterval()</code>開始跑動數字，並在超過前關閉。</p>`,
                },
                {
                    title: '開合區塊',
                    content: `<p>Manufacturing頁面的流程區塊有多個開合區塊，開啟一個會關閉其他的。
                    這個是使用Boostrap的Accordion元件，可以設定<code>data-bs-parent=""</code>來限制只會開啟一個。

                    左邊有一個滑動的元件，當有開合區塊打開時，此元件就會滑動到該區塊。
                    在畫面渲染完畢後，就先將各個開合區塊的<code>offsetTop</code>儲存到一個陣列中。點擊開合區塊時，抓取陣列的資料做滑動。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/yijhih/yijhih-1.png',
                '/peter-resume-2026/portfolio/yijhih/yijhih-2.jpg',
                '/peter-resume-2026/portfolio/yijhih/yijhih-3.jpg',
            ],
        },
        // AZUMI
        {
            title: 'AZUMI',
            id: 'azumi',
            squareBg: '/peter-resume-2026/portfolio/azumi/azumi-square.png',
            banner: {
                bg: '/peter-resume-2026/portfolio/azumi/azumi-banner.png',
                creationTime: '2024.02',
                link: {
                    id: 88413027,
                    isExternal: true,
                    text: '前往案例',
                    url: 'https://azumiflutes.com/',
                },
            },
            screenShot: [
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-1.png',
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-2.png',
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-3.png',
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-4.png',
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-5.png',
                '/peter-resume-2026/portfolio/azumi/azumi-screenshot-6.png',
            ],
            feature: [
                {
                    title: '文字個別淡入效果',
                    content: `<p>網站的某些文字希望有個特效，當使用者下滑到特定點位時，文字會依序向左淡入。

                    網站載入後，先將字串拆分成個別的元素，並且使用<code>setTimeout()</code>來製作延遲的效果。</p>`,
                },
                {
                    title: '搜尋邏輯',
                    content: `<p>比起一般的搜尋頁面，客戶希望可以搜尋到網站的所有頁面，並且根據不同的頁面屬性做區分。像是有些頁面屬於“About Azumi”；也些屬於“Ambassador”，等等。

                    在畫面渲染時，就先將搜尋到的資料做分類，並根據分類渲染在頁面上，沒有資料的分類就不會渲染。</p>`,
                },
            ],
            skills: ['Bootstrap', 'SCSS', 'Swiper.js', 'Webpack', 'Wordpress'],
            imgs: [
                '/peter-resume-2026/portfolio/azumi/azumi-1.png',
                '/peter-resume-2026/portfolio/azumi/azumi-2.png',
                '/peter-resume-2026/portfolio/azumi/azumi-3.png',
            ],
        },
    ]

    const portfolioPerPage = 6
    const totalPage = Math.ceil(portfolioAllData.length / portfolioPerPage)

    const getPortfolioDataByPage = (page: number) => {
        const start = (page - 1) * portfolioPerPage
        const end = page * portfolioPerPage
        return portfolioAllData.slice(start, end)
    }
    const getPortfolioDataById = (id: string | undefined) => {
        const data = portfolioAllData.find((post) => post.id === id)
        return data
    }

    return {
        totalPage,
        getPortfolioDataByPage,
        getPortfolioDataById,
    }
})
