import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Prathamesh Patil - Frontend Developer',
    description: 'Showcasing the work, skills, and projects of Prathamesh Patil, a passionate frontend developer specializing in creating intuitive and responsive web applications using modern technologies like React, Next.js, and TypeScript.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}
