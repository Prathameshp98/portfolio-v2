import { ReactNode } from "react";

export default interface CardWrapperProps {
    children: ReactNode;
    setHover: (arg: string | null) => void;
    redirect: string;
    cardHoverId: string | null;
}