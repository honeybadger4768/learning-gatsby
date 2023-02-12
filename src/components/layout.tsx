import React from "react";
import {PageProps} from "gatsby";
import Header from "./Header";

type LayoutProps = {
    children: React.ReactElement | React.ReactNode,
    layoutProps: PageProps
}

const Layout : React.FC<LayoutProps> = ({children, layoutProps}) =>{
    return (
        <div className={"w-full h-screen bg-violet-800"}>
            <Header {...layoutProps} />
            {children}
        </div>
    )
}

export default Layout
