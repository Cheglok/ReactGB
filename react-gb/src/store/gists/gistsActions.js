export const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const GET_GISTS_REQUEST = "GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GET_GISTS_FAILURE";
export const GET_GISTS_END = "GET_GISTS_END";
export const GET_GISTS_DELAY = "GET_GISTS_DELAY";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

export const getLoadDelay = () =>
    ({
        type: GET_GISTS_DELAY,
    });

export const getGistsRequest = () =>
    ({
    type: GET_GISTS_REQUEST,
});

export const getGistsEnd = () =>
    ({
        type: GET_GISTS_END,
    });

const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists,
});

export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err,
});

export const getAllGists =  () => async (dispatch) => {
    dispatch(getGistsRequest());

    // Имитация ошибки-----------
    dispatch(getGistsFailure(null));
    if(((new Date).getMilliseconds()) % 2) {
        dispatch(getGistsFailure('test error'));
    }
    // Имитация ошибки-----------

    try {
        const res = await fetch(API_URL_PUBLIC);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();

        dispatch(getGistsSuccess(result));
    } catch (err) {
        console.log(err)
        dispatch(getGistsFailure(err.message));
    } finally {
        dispatch(getLoadDelay());
    }
};
