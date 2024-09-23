import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'be49897fc3ae4621a210637b22bb1224'
    }
})