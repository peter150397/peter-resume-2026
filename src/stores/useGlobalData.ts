import { defineStore } from 'pinia'
import type { Header, Footer } from '@/types/type'
// import useAxios from '@/utils/useAxios';

// const axios = useAxios();

export const useGlobalData = defineStore('globalData', () => {
    const header: Header = {
        logo: 'PeterChen',
        moreWorkLink: {
            id: 93748127,
            isExternal: false,
            text: '所有作品',
            url: '/portfolio',
        },
    }
    const footer: Footer = {
        topTitle: '歡迎與我聯絡！',
        moreWorkLink: {
            id: 72945012,
            isExternal: false,
            text: '所有作品',
            url: '/portfolio',
        },
        logo: 'PeterChen',
        aboutMe: `具備兩年以上的網頁前端開發經驗，過去主要深耕於 WordPress 專案開發，對於舊有專案的維護、重構與效能優化具備實戰經驗。擁有與 UI/UX 設計師合作的經驗，能夠精準還原設計細節，並從前端技術角度提供實作建議。

        目前我專注於 Vue 3 的網頁開發，可以將過往累積的開發經驗轉移至Vue 3生態，並協助團隊打造高效、易維護的 Vue 前端應用。`,
        contact: [
            {
                id: 22835409,
                isExternal: true,
                text: '0983-760-230',
                url: 'tel:+886-9-83760230',
                icon: 'footer-phone',
            },
            {
                id: 33059832,
                isExternal: true,
                text: 'peter150397@gmail.com',
                url: 'mailto:peter150397@gmail.com',
                icon: 'footer-email',
            },
            {
                id: 4955832,
                isExternal: true,
                text: '桃園市平鎮區文化街8巷22號14樓之一',
                url: 'https://maps.app.goo.gl/d9uSpixGLzHDWn2g7',
                icon: 'footer-address',
            },
        ],
        copyright:
            'Copyrights © ' + new Date().getFullYear() + ' All Rights Reserved by Peter Chen',
    }
    const navbar: Link[] = [
        {
            id: 830567218,
            isExternal: false,
            text: '首頁',
            url: '/',
        },
        {
            id: 10345582,
            isExternal: false,
            text: '服務',
            url: '/#home-service',
        },
        {
            id: 12948563,
            isExternal: false,
            text: '經歷',
            url: '/#home-experience',
        },
        {
            id: 87503342,
            isExternal: false,
            text: '作品',
            url: '/#home-portfolio',
        },
    ]

    // const header = ref<Header | null>(null);
    // const footer = ref<Footer | null>(null);
    // async function getGlobalData() {
    //     try {
    //         const res = await axios.get('/api/global');

    //         header.value = res.data.data.header;
    //         footer.value = res.data.data.footer;
    //     } catch(error) {
    //         console.error("API請求失敗：", error);
    //     }
    // }

    return {
        header,
        footer,
        navbar,
    }
})
