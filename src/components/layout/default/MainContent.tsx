import { ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
    return (
        <div>
            <p>this is main content</p>
            {children}
        </div>
    )
}