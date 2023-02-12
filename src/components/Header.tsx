import React from "react";
import {PageProps} from "gatsby";

const Header : React.FC<PageProps> = (props) =>{

    return (
        <div className={"flex items-center w-full h-[20%] bg-violet-800 px-10"}>
            <h1 className={"text-2xl"}>Github Client</h1>
            <h5 className={"mt-1 ml-1"}>{props.path}</h5>
        </div>
    )
}

export default Header
