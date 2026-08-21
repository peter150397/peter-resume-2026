// Vue
import { ref } from "vue"
import { defineStore } from "pinia"
// conposables
import useAxios from "@/utils/useAxios"
const axios = useAxios()

interface OriginPortfolio {
    banner_bg: string
    banner_link_is_external: boolean
    banner_link_text: string
    banner_link_url: string
    created_at: string
    creation_time: string
    feature: {
        title: string
        content: string
    }[]
    id: string
    images: string[]
    screen_shot: string[]
    skills: string[]
    square_bg: string
    title: string
}

export const usePortfolioData = defineStore("portfolioData", () => {
    const portfolioPerPage: number = 6
    const totalPage = ref<number>(0)

    const getPortfoliosByPage = async (page: number) => {
        const from = (page - 1) * portfolioPerPage
        const to = from + portfolioPerPage - 1

        const res = await axios.get(`/Portfolios`, {
            headers: {
                Range: `${from}-${to}`,
                Prefer: "count=exact",
            },
        })
        const totalPortfolios = Number(res.headers["content-range"]?.split("/")[1])
        totalPage.value = Math.ceil(totalPortfolios / portfolioPerPage)

        return res.data.map((data: OriginPortfolio) => {
            return {
                id: data.id,
                created_at: data.created_at,
                title: data.title,
                square_bg: data.square_bg,
                banner: {
                    bg: data.banner_bg,
                    creation_time: data.creation_time,
                    link: {
                        is_external: data.banner_link_is_external,
                        text: data.banner_link_text,
                        url: data.banner_link_url,
                    },
                },
                screen_shot: [...data.screen_shot],
                feature: [...data.feature],
                skills: [...data.skills],
                images: [...data.images],
            }
        })
    }

    const getSinglePortfolio = async (id: string) => {
        const res = await axios.get(`/Portfolios`, {
            params: {
                id: `eq.${id}`,
            },
        })
        const data: OriginPortfolio = res.data[0]

        return {
            id: data.id,
            created_at: data.created_at,
            title: data.title,
            square_bg: data.square_bg,
            banner: {
                bg: data.banner_bg,
                creation_time: data.creation_time,
                link: {
                    is_external: data.banner_link_is_external,
                    text: data.banner_link_text,
                    url: data.banner_link_url,
                },
            },
            screen_shot: [...data.screen_shot],
            feature: [...data.feature],
            skills: [...data.skills],
            images: [...data.images],
        }
    }

    return {
        totalPage,
        getSinglePortfolio,
        getPortfoliosByPage,
    }
})
