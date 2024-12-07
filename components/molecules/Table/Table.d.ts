import { ReactNode } from "react";

export default interface TableProps {
    projectData: any;
    error: any;
    arrowIcon: {
        left: string;
        rightUp: string;
    };
}