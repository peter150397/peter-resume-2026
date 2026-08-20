import axios from "axios"

const useAxios = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_SUPABASE_URL,
        headers: {
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        params: {
            order: "created_at.asc",
        },
    })

    return instance
}

export default useAxios
