import React from "react"
import {GatsbyBrowser} from "gatsby";
import Header from "./src/components/Header";
import Layout from "./src/components/layout";

const wrapWithLayout: GatsbyBrowser["wrapPageElement"] = ({element, props}) => {
    return (
        <Layout layoutProps={props}>
            {element}
        </Layout>
    )
}

export default wrapWithLayout
