import {searchResultEntries} from "../entriesDB";
import {delayedPromise} from "./delayedPromise";


/**
 * Acts as a sort of API for fetching search results
 */
export const getSearchResults = (searchTerm) => {
    if (searchTerm.length === 0)
        return delayedPromise([]);

    return delayedPromise(searchResultEntries.filter(resultEntry => resultEntry.title.toLowerCase().includes(searchTerm.toLowerCase())));
}