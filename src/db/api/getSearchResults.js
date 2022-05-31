import {searchResultEntries} from "../entriesDB";


/**
 * Acts as a sort of API for fetching search results
 */
export const getSearchResults = (searchTerm) => {
    if (searchTerm.length === 0)
        return [];

    return searchResultEntries.filter(resultEntry => resultEntry.title.toLowerCase().includes(searchTerm.toLowerCase()));
}