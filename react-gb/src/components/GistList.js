import {useCallback, useEffect, useState} from "react";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";


export const GistsList = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);

    const requestGists = () => {
        setError(false);
        fetch(API_URL_PUBLIC)
            .then((response) => {
                if (!response.ok){
                    throw new Error(`Request failed with status ${response.status}`);
                }

                return response.json();
            })
            .then((result) => setGists(result))
            .catch((err) => {
                setError(true);
                console.log(err)
            });
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    return <ul>{gists.map(renderGist)}</ul>;
};