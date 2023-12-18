import { ReactNode } from "react";
import LeftNavigation from "../components/layout/default/LeftNavigation";
import MainContent from "../components/layout/default/MainContent";
import Layout from ".";

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <Layout>
            <div className="flex flex-row gap-5">
                <LeftNavigation />
                <MainContent>
                    {children}
                </MainContent>
            </div>
        </Layout>
    )
}