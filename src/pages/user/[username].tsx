import React, {useEffect, useState} from "react";
import {HeadFC, PageProps} from "gatsby";
import {GET_USERS} from "../../constants";
import {ProfileDetails} from "../../types/types";
import AppLayout from "../../components/layouts/AppLayout";


type UserPageProps = {
    username: string
} & PageProps

const UserPage : React.FC<UserPageProps> = (props) =>{
    const [details, setDetails] = useState<ProfileDetails>({
        avatar_url: "",
        bio: undefined,
        blog: "",
        company: "",
        created_at: new Date(0),
        email: undefined,
        events_url: "",
        followers: 0,
        followers_url: "",
        following: 0,
        following_url: "",
        gists_url: "",
        gravatar_id: "",
        hireable: undefined,
        html_url: "",
        id: 0,
        location: "",
        login: "",
        name: "",
        node_id: "",
        organizations_url: "",
        public_gists: 0,
        public_repos: 0,
        received_events_url: "",
        repos_url: "",
        site_admin: false,
        starred_url: "",
        subscriptions_url: "",
        twitter_username: "",
        type: "",
        updated_at: new Date(0),
        url: ""
    })

    useEffect(() =>{
        fetch(GET_USERS + "/" + props.username, {
            method: "GET",
        }).then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <>
           <p>
               wow
           </p>
        </>
    )
}

export default UserPage

export const Head : HeadFC = (props) => {

    return (
        <title>
            {props.params.username} | Profile
        </title>
    )
}
