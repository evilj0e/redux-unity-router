import { ACTION_TYPES } from './constants';

export const locationChange = payload => ({
    type: ACTION_TYPES.LOCATION_CHANGED,
    payload
});

export const push = payload => ({
    type: ACTION_TYPES.PUSH,
    payload
});

export const replace = payload => ({
    type: ACTION_TYPES.REPLACE,
    payload
});

export const go = payload => ({
    type: ACTION_TYPES.GO,
    payload
});

export const goBack = payload => ({
    type: ACTION_TYPES.GO_BACK,
    payload
});

export const goForward = payload => ({
    type: ACTION_TYPES.GO_FORWARD,
    payload
});