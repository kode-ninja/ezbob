import {searchResultEntries} from "../entriesDB";

/**
 * Acts as a sort of API for fetching search results
 * (currently from the hardcoded entriesDB)
 *
 * TODO: Can also be implemented as a hook while functions are wrapped in useCallback (to prevent unnecessary renders)
 */
export const getSuggestions = (searchTerm, maxNumOfTitles) => {
    let suggestions = [];

    // performance: return no suggestions if searchTerm is an empty string
    // TODO: trim it, or support/allow a search of <space>?
    if (searchTerm.length === 0)
        return suggestions;

    for (const resultEntry of searchResultEntries) {
        if (resultEntry.title.toLowerCase().startsWith(searchTerm.toLowerCase())) { // case-insensitive comparison
            suggestions.push({
                id: resultEntry.id,
                title: resultEntry.title.toLowerCase()  // assuming suggestions should be lowercase, as displayed in the requirement doc
            });
            if (suggestions.length === maxNumOfTitles)
                return suggestions;
        }
    }

    return suggestions;
}
