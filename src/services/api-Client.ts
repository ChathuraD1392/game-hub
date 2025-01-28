import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:'adf3d514ac464843abfafd53172afbdd'
    }
})