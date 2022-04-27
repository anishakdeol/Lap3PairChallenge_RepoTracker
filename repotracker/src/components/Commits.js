import React, { useEffect, useState } from 'react';
import axios from 'axios';


    const Commits = ({ url }) => {
    const [commits, setCommits] = useState()

    useEffect(()  => {
        async function fetchData(){
        // fetching commits from github url
        const options = {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        }
        const { data } = await axios.get(url.replace(/{\/sha}$/, ''), options);
        setCommits(data.length);
    }}, [url])

    return (
        <>
            {commits}
        </>
    )
}

export default Commits
