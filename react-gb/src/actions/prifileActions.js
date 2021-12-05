export const SHOW_NAME = "SHOW_NAME";

export const PROFILE_UPDATE = "PROFILE_UPDATE";

export const toggleShowName = {
    type: SHOW_NAME,
}

export const profileUpdate = (profile) => ({
    type: PROFILE_UPDATE,
        payload: profile,
});