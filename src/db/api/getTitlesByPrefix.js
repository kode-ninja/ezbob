import {searchResultEntries} from "../entriesDB";

/**
 * Acts as a sort of API for fetching search results
 * (currently from the hardcoded entriesDB)
 *
 * TODO: Can also be implemented as a hook while functions are wrapped in useCallback
 * to prevent re-rendering of client components
 */
export const getTitlesByPrefix = (titlePrefix, maxNumOfTitles) => {
    let titles = [];

    // return no titles if titlePrefix is an empty string
    // TODO: trim it, or support/allow a search of <space>?
    if (titlePrefix.length === 0)
        return titles;

    for (const resultEntry of searchResultEntries) {
        if (resultEntry.title.toLowerCase().startsWith(titlePrefix.toLowerCase())) {
            titles.push(resultEntry.title.toLowerCase());   // assuming suggestions should be lowercase, as in the requirement doc
            if (titles.length === maxNumOfTitles)
                return titles;
        }
    }

    return titles;
}
