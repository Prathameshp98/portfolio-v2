import { useContext } from "react";
import createDataContext from "../creation/createContext";

export const useDataContext = () => {
    const context = useContext(createDataContext);
    if (!context) {
      throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};