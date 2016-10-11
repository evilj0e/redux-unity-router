import { join as pathJoin } from 'path';
import { __DEV__ } from '../constants';

export const flattenRoutes = (routes, parentRoutePath = '') => {

    let result = [];

    for (let route of routes) {

        let { pattern } = route;

        if (pattern === undefined) continue;

        if (typeof pattern === 'string') pattern = { path: pattern };

        let { path } = pattern;

        path = pathJoin(parentRoutePath, path);

        if (Array.isArray(route.routes)) {
            result = result.concat(flattenRoutes(route.routes, path));
        }

        if (__DEV__ && console && typeof console.warn === 'function') {
            if (route.id === undefined) {
                console.warn(`Route ${JSON.stringify(pattern)} has no id`);
            } else if (!['string', 'number'].includes(typeof route.id)) {
                console.warn(`Route ${JSON.stringify(pattern)} has id that is not type of string or number`);
            }
        }

        route.id = route.id || path.toString();

        const item = {
            ...route,
            ...{
                pattern: {
                    ...pattern,
                    path
                }
            }
        };

        result = result.concat(item);
    }

    return result;
};