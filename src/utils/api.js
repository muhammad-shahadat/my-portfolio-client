import axios from "axios";

const api = axios.create({
    baseURL: "https://my-portfolio-server-5n33.onrender.com",
    timeout: 10000, // 10 sec
    headers: {
        "Content-Type": "application/json",
        //'Authorization': `Bearer ${token}`, add in future if need.
        
    },

});


export default api;