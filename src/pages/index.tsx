import "../styles/global.css"
import React from "react";
import {HeadFC, Link, PageProps} from "gatsby";
import {GET_USERS} from "../constants";
import {GetUsersResponse} from "../types/types";


type IndexPageProps = {
    serverData: GetUsersResponse[]
} & PageProps

const GhClientIndex : React.FC<IndexPageProps> = ({serverData, ...props}) => {

    return (
        <>
            {serverData && serverData.map((value, index) =>(
                <div key={index}>
                    <h1><Link to={"/user/" + value.login} >{value.login}</Link></h1>
                </div>
            ))}
        </>
    )
}

export default GhClientIndex

export const Head: HeadFC = () => <title>Github</title>

export const getServerData = async () =>{
    try{
        const res = await fetch(GET_USERS, {
            method: "GET",
        })
        if(!res.ok){
            throw new Error("Response failed")
        }
        return {
            props: await res.json()
        }
    } catch (e) {
        return {
            status: 500,
            headers: {},
            props: {}
        }
    }
}
