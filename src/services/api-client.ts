import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "b64257c247e642978e56184dffa2f889"
    }
})