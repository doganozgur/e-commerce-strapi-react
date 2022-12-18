import axios from "axios"

export const httpGetProducts = async (type) => {
    try {
        const data = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, {
            headers: {Authorization: "bearer "+process.env.REACT_APP_API_TOKEN}
        });
        return data;
    } catch(err) {
        console.error(err);
    }
};