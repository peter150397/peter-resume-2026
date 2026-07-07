import { defineStore } from 'pinia'
import type { HomeBanner, HomeServiceItem, HomeSkillItem, HomeTimelineItem } from '@/types/type'

export const useHomeData = defineStore('homeData', () => {
    // Banner
    const homeBanner: HomeBanner = {
        content: '擁有兩年以上網站開發經驗，擅長建構高效能網頁、優化使用者體驗',
        img: '/peter-resume-2026/default/headshot-half.png',
        moreWorkLink: {
            id: 57419554,
            isExternal: false,
            text: '所有作品',
            url: '/portfolio',
        },
        cursor: ['前端工程師', '健身愛好者', '旅行愛好者', '吉他手', '科技愛好者', '老饕'],
    }

    // Service
    const homeService: HomeServiceItem[] = [
        {
            id: 1512,
            title: '網頁開發',
            content:
                '開發高效、易維護的網站並優化使用者體驗，同時包含響應式設計、網頁動畫與後端API設計。',
            img: '/peter-resume-2026/home-service/home-service-1.gif',
        },
        {
            id: 8042,
            title: '團隊合作',
            content: '根據業務提供的客戶需求與網頁設計師的設計稿，建構符合客戶需求的網站。',
            img: '/peter-resume-2026/home-service/home-service-2.gif',
        },
        {
            id: 7750,
            title: '專案維護',
            content: '當網站發生錯誤時，能透過各種資源，找到除錯方法並避免再次發生。',
            img: '/peter-resume-2026/home-service/home-service-3.gif',
        },
    ]
    // Skill
    const homeSkillOrigin: HomeSkillItem[] = [
        {
            id: 3690,
            title: 'HTML',
            img: '/peter-resume-2026/skill/HTML5.png',
        },
        {
            id: 9670,
            title: 'CSS',
            img: '/peter-resume-2026/skill/CSS3.png',
        },
        {
            id: 6902,
            title: 'Java Script',
            img: '/peter-resume-2026/skill/JavaScript.png',
        },
        {
            id: 5662,
            title: 'Azios',
            img: '/peter-resume-2026/skill/Azios.png',
        },
        {
            id: 1425,
            title: 'Bootstrap',
            img: '/peter-resume-2026/skill/Bootstrap.png',
        },
        {
            id: 2257,
            title: 'GitHub',
            img: '/peter-resume-2026/skill/GitHub.png',
        },
        {
            id: 3157,
            title: 'GSAP',
            img: '/peter-resume-2026/skill/gsap.png',
        },
        {
            id: 4910,
            title: 'Pinia',
            img: '/peter-resume-2026/skill/Pinia.png',
        },
        {
            id: 5937,
            title: 'TypeScript',
            img: '/peter-resume-2026/skill/TypeScript.png',
        },
        {
            id: 6112,
            title: 'Swiper.js',
            img: '/peter-resume-2026/skill/swiper.js.png',
        },
        {
            id: 7333,
            title: 'Tailwind CSS',
            img: '/peter-resume-2026/skill/Tailwind CSS.png',
        },
        {
            id: 8856,
            title: 'Three.js',
            img: '/peter-resume-2026/skill/Three.js.png',
        },
        {
            id: 9413,
            title: 'Vite.js',
            img: '/peter-resume-2026/skill/Vite.js.png',
        },
        {
            id: 3212,
            title: 'Vue.js',
            img: '/peter-resume-2026/skill/Vue.js.png',
        },
        {
            id: 8896,
            title: 'WordPress',
            img: '/peter-resume-2026/skill/WordPress.png',
        },
    ]
    const homeSkill = []

    for (let i = 0; i < 3; i++) {
        const newArray = homeSkillOrigin.filter((item, index) => index % 3 === i)

        homeSkill.push(newArray)
    }
    // Timeline
    const homeTimeline: HomeTimelineItem[] = [
        {
            id: 4468,
            time: '2020/09 ~ 2020/12',
            title: '軟體推廣業務',
            company: '莘莘教育有限公司',
            img: '/peter-resume-2026/home-timeline/home-timeline-1.jpg',
        },
        {
            id: 4928,
            time: '2021/05 ~ 2022/06',
            title: '營業管理師',
            company: '台灣東電化股份有限公司',
            img: '/peter-resume-2026/home-timeline/home-timeline-2.jpg',
        },
        {
            id: 5668,
            time: '2022/08 ~ 2022/11',
            title: '內勤業務人員',
            company: '聯強國際股份有限公司',
            img: '/peter-resume-2026/home-timeline/home-timeline-3.jpg',
        },
        {
            id: 1208,
            time: '2023/09 ~ Present',
            title: 'Wordpress 全端工程師',
            company: '鵠崙設計有限公司',
            img: '/peter-resume-2026/home-timeline/home-timeline-4.jpg',
        },
    ]

    // Portfolio
    const homePortfolioID: string[] = [
        'ouqeimage',
        'jihfeng',
        'globalgclinic',
        'wbeauty',
        'shihoriclinic',
        'keycheng',
        'penlux',
        'keiking',
        'citinova',
    ]

    return {
        homeBanner,
        homeService,
        homeSkill,
        homeTimeline,
        homePortfolioID,
    }
})
