import apiClient from "./apiClient";
import { 
    DEFAULT_LANGUAGE,
    cacheKey,
    cacheExpirationKey,
    cacheDuration
} from '@/constants/constant';

const fetchAll = async() => {

    const cachedData = localStorage.getItem(cacheKey);
    const cachedExpiration = localStorage.getItem(cacheExpirationKey);

    // check if the cache expire time has exceeded.
    const isExpired = !cachedExpiration || (Date.now() - parseInt(cachedExpiration)) > cacheDuration;

    if (cachedData && !isExpired) {
        return JSON.parse(cachedData);  // Return cached data if not expired
    } else {
        try {

            const userLanguage = navigator.language || DEFAULT_LANGUAGE;
            console.log("Preferred language:", userLanguage);
    
            const [
                socialResponse,
                iconResponse,
                introResponse,
                aboutResponse,
                experienceResponse,
                // projectResponse
            ] = await Promise.all([
                apiClient.get(`/social`),
                apiClient.get(`/icon`),
                apiClient.get(`/intro?locale=${userLanguage}`),
                apiClient.get(`/about?locale=${userLanguage}`),
                apiClient.get(`/experience?locale=${userLanguage}`),
                // apiClient.get(`/project?locale=${userLanguage}`)
            ]);

            const data = {
                social: socialResponse.data.data,
                icon: iconResponse.data.data,
                intro: introResponse.data,
                about: aboutResponse.data,
                experience: experienceResponse.data
            };

            localStorage.setItem(cacheKey, JSON.stringify(data));
            localStorage.setItem(cacheExpirationKey, Date.now().toString());
    
            return data;
    
        } catch(error){
            console.error("Error fetching data:", error);
            throw new Error("Failed to fetch all data");
        };
    }
    
};

export default fetchAll;