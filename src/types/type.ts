// Header
export interface Header {
    created_at: string
    id: number
    logo: string
    more_work: {
        is_external: boolean
        text: string
        url: string
    }
}

// Footer
export interface Footer {
    about_me: string
    copyright: string
    created_at: string
    id: number
    logo: string
    more_work: {
        is_external: boolean
        text: string
        url: string
    }
    top_title: string
}

// Home
export interface HomeBanner {
    id: number
    created_at: string
    content: string
    image: string
    more_work: {
        is_external: boolean
        text: string
        url: string
    }
    cursor: string[]
}
export interface HomeServiceItem {
    id: number
    created_at: string
    title: string
    content: string
    image: string
}
export interface HomeSkillItem {
    id: number
    created_at: string
    title: string
    image: string
}
export interface HomeTimelineItem {
    id: number
    created_at: string
    time: string
    title: string
    company: string
    image: string
}

// Portfolio
export interface Portfolio {
    id: string
    created_at: string
    title: string
    square_bg: string
    banner: {
        bg: string
        creation_time: string
        link: {
            is_external: boolean
            text: string
            url: string
        }
    }
    screen_shot: string[]
    feature: {
        title: string
        content: string
    }[]
    skills: string[]
    images: string[]
}
