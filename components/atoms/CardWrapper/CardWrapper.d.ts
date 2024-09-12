import { ReactNode } from "react";

export default interface CardWrapperProps {
    children: ReactNode;
    setHover: (arg: boolean) => void;
    redirect: string;
}