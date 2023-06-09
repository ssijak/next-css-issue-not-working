import {Button} from "ui";

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body>{children} <Button>layout.tsx</Button></body>
        </html>
    );
}


