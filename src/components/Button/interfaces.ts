import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string;
    height: string;
    children: ReactNode;
}

export interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string;
    height: string;
}

