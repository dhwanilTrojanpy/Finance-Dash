import axios from "axios";

const searchCompanies = async (query) =>{

    try {
        
        const data = await axios.get(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ?api_key=${process.env.API_KEY}`
        ); 
        return data;

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

export {searchCompanies};