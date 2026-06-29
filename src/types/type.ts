// Header
export interface Header {
    logo: string,
    moreWorkLink: Link,
}

// Footer
export interface Footer {
    topTitle: string,
    moreWorkLink: Link,
    logo: string,
    aboutMe: string,
    contact: Link[],
    copyright: string,
}

// Home
export interface HomeBanner{
    content: string,
    img: string,
    moreWorkLink: Link,
    cursor: string[]
}
export interface HomeServiceItem{
    id: number,
    title: string,
    content: string,
    img: string,
}
export interface HomeSkillItem{
    id: number,
    title: string,
    img: string,
}
export interface HomeTimelineItem{
    id: number,
    time: string,
    title: string,
    company: string,
    img: string
}

// Portfolio
export interface Portfolio{
    title: string,
    id: string,
    squareBg: string,
    banner: {
        bg: string,
        creationTime: string,
        link: Link,
    },
    screenShot: string[],
    feature: {
        title: string,
        content: string
    }[],
    skills: string[],
    imgs: string[],
}

// Portfolio Single
