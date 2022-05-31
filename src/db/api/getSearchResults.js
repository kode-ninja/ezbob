import {searchResultEntries} from "../entriesDB";

export const getSearchResults = (searchTerm) => {
    if (searchTerm.length === 0)
        return [];

    return searchResultEntries.filter(resultEntry => resultEntry.title.toLowerCase().includes(searchTerm.toLowerCase()));
}