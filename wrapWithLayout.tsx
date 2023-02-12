import React from "react"
import {GatsbyBrowser} from "gatsby";
import Header from "./src/components/Header";
import "./src/styles/global.css"

const wrapWithLayout: GatsbyBrowser["wrapPageElement"] = ({element, props}) => {
    return (
        <div className={"w-full h-screen bg-violet-800"}>
            <Header {...props} />
                {element}
        </div>
    )
}

export default wrapWithLayout
