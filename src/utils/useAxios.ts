import axios from "axios";

function useAxios() {
    const instance = axios.create({
        baseURL: "http://localhost:1337",
    });

    return instance;
}

export default useAxios;
