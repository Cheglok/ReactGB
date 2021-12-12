export const SHOW_NAME = "SHOW_NAME";
export const CHANGE_NAME = "CHANGE_NAME";

export const toggleShowName = {
    type: SHOW_NAME,
}

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
});
