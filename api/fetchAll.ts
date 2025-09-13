import apiClient from "./apiClient";
import {
  DEFAULT_LANGUAGE,
  cacheKey,
  cacheExpirationKey,
  cacheDuration
} from '@/constants/constant';
import { encryptData, decryptData } from '@/utils/encryption';

const fetchAll = async () => {
  const cachedData = localStorage.getItem(cacheKey);
  const cachedExpiration = localStorage.getItem(cacheExpirationKey);
  const isExpired = !cachedExpiration || (Date.now() - parseInt(cachedExpiration)) > cacheDuration;

  if (cachedData && !isExpired) {
    try {
      const data = await decryptData(cachedData);
      return data;
    } catch (e) {
      // If decryption fails, treat as cache miss
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheExpirationKey);
    }
  }

  try {
    const userLanguage = navigator.language || DEFAULT_LANGUAGE;
    const [
      socialResponse,
      iconResponse,
      sectionResponse,
      introResponse,
      aboutResponse,
      experienceResponse,
      projectResponse,
      certificationResponse,
      writingResponse,
      footerResponse
    ] = await Promise.all([
      apiClient.get(`api/social`),
      apiClient.get(`api/icon`),
      apiClient.get(`api/section?locale=${userLanguage}`),
      apiClient.get(`api/intro?locale=${userLanguage}`),
      apiClient.get(`api/about?locale=${userLanguage}`),
      apiClient.get(`api/experience?locale=${userLanguage}`),
      apiClient.get(`api/project?locale=${userLanguage}`),
      apiClient.get(`api/certifications?locale=${userLanguage}`),
      apiClient.get(`api/writing?locale=${userLanguage}`),
      apiClient.get(`api/footer?locale=${userLanguage}`)
    ]);

    const data = {
      social: socialResponse.data.data,
      icon: iconResponse.data.data,
      section: sectionResponse.data,
      intro: introResponse.data,
      about: aboutResponse.data,
      experience: experienceResponse.data,
      project: projectResponse.data,
      certification: certificationResponse.data,
      writing: writingResponse.data,
      footer: footerResponse.data
    };

    try {
        try {
            const encrypted = await encryptData(data);
            localStorage.setItem(cacheKey, encrypted);
      localStorage.setItem(cacheExpirationKey, Date.now().toString());
          } catch (e) {
            console.error('Encryption failed:', e);
          }
      
    } catch (e) {
      // Fallback: don't cache if encryption fails
      console.error('Encryption failed, not caching data', e);
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch all data");
  }
};

export default fetchAll;