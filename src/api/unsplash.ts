import axios from "axios";
import { config } from "../configs/"
import {SearchResponse} from "../types/API";

const apiUrl = '/search/photos';

const options =  axios.create({
    baseURL: config.baseURL,
    headers: {
        'Authorization': `Client-ID ${config.clientId}`
    }
})


const  getImages = async (filterInput:string, currentPage: number) => {
    //const { currentPage } = this.state;
    const axiosConfig = {
        params: {
            query: filterInput,
            page: currentPage
        }
    };
    const response =  await options.get<SearchResponse>(apiUrl, axiosConfig);
    const { total, total_pages: totalPages, results: items} =  response.data;
    return { total, totalPages, items};

};

export default getImages;