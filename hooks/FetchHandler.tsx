
import { 
    useEffect, 
    useState,
    useRef
} from "react";
import fetchAll from '@/api/fetchAll';

const FetchHandler = () => {
    const dataFetchedRef = useRef(false);
    const[data, setData] = useState<any>(null);
    const[error, setError] = useState<boolean>(false);

    useEffect(() => {
            const fetchData = async () => {
                if (dataFetchedRef.current) return;
                dataFetchedRef.current = true;
    
                try {
                    const res = await fetchAll();
                    setData(res);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError(true);
                }
            };   
            fetchData();
    }, []);

    return {
        data,
        setData,
        error
    };

}

export default FetchHandler;