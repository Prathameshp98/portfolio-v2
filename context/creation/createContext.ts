import React, { createContext } from 'react';

interface ContextType {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
};

const DataContext = createContext<ContextType | undefined>(undefined);

export default DataContext;