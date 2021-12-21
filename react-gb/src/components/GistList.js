import {useCallback, useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {selectGists, selectGistsError, selectGistsLoading} from "../store/gists/gistsSelector";
import {getAllGists} from "../store/gists/gistsActions";

export const GistsList = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };
    useEffect(() => {
        requestGists();
// eslint-disable-next-line
    }, []);

    const renderGist = useCallback(
        (gist) =>
            <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    );

    if (loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry, 50% success</button>
            </>
        );
    }

    return (
        <>
            <button onClick={requestGists}>Retry, 50% mistake</button>
            <ul>{gists.map(renderGist)}</ul>
        </>
    );
}