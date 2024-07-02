import axios from "axios";
const apiKey = "VZhOwEbcdQXJQfgdMNntsVrUjOeuZuZ6";

const searchCompanies = async (query) =>{

    try {
        const data = await axios.get(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
        ); 
        return data.data;

    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Error while fetching an API: ",error.message);
            return error.message;
        }
        else{
            console.log("Unexpected error:",error);
            return `Unexpected error has occured`;
        }
    }   
}

const getCompanyDetails = async (query) =>{

    try {
        const data = await axios.get(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}` 
        ); 
        return data;

    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Error while fetching an API: ",error.message);
            return null;
        }
        else{
            console.log("Unexpected error:",error);
            return null;
        }
    }   
}

export {
    searchCompanies,
    getCompanyDetails
 };