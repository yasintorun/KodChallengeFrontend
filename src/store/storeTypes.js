
const baseTypes = {
    API_START: "API_START",
    API_ERROR: "API_ERROR",
}

const types = {
    TRACKS: {
        API_START: "API_START_TRACK",
        API_ERROR: "API_ERROR_TRACK",
        GETALL_TRACK: "TRACK",
        //CURRENT_TRACK: "CURRENT_TRACK"
    },

    PROBLEMS: {
        API_START: "API_START_PROBLEM",
        API_ERROR: "API_ERROR_PROBLEM",
        GETALL_PROBLEMS: "GETALL_PROBLEMS",
        SET_PROBLEM: "SET_PROBLEM",
    },

    EDITOR: {
        CHANGE_LANGUAGE: "CHANGE_EDITOR_LANGUAGE",
    }
}

export default types