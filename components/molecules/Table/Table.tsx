import apiClient from "@/api/apiClient";
import { 
  DEFAULT_LANGUAGE
} from '@/constants/constant';
import { useEffect, useState } from "react";
import styles from './Table.module.scss';

const Table = () => {

    const[projects, setProjects] = useState(null);

    useEffect(() => {
      const fetchProject = async() => {
        const userLanguage = navigator.language || DEFAULT_LANGUAGE;
        const response = await apiClient.get(`/project?locale=${userLanguage}`);
        setProjects(response.data);
      };

      fetchProject();
    }, []);

    console.log(projects)

    return (
        <div>

        </div>
    )
};

export default Table;