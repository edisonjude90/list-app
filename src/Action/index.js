import { SEARCH_PERSON, VIEW_PERSON_DETAILS } from "../Constants";

export const SEARCH_PERSON_ACTION = (payload) => ({
    type:SEARCH_PERSON,
    payload:payload
});

export const VIEW_PERSON_DETAILS_ACTION = (payload) => ({
    type:VIEW_PERSON_DETAILS,
    payload:payload
});
