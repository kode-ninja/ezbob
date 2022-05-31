import {searchResultEntries} from "../entriesDB";
import {delayedPromise} from "./delayedPromise";

/**
 * Acts as a sort of API for fetching search results suggestions/predictions
 */
export const getSuggestions = (searchTerm, maxNumOfTitles) => {
    let suggestions = [];

    // performance: return no suggestions if searchTerm is an empty string
    // Requirements: trim it, or support/allow a search of <space>?
    if (searchTerm.length === 0)
        return delayedPromise(suggestions);

    for (const resultEntry of searchResultEntries) {
        if (resultEntry.title.toLowerCase().startsWith(searchTerm.toLowerCase())) { // case-insensitive comparison
            suggestions.push({
                id: resultEntry.id,
                title: resultEntry.title.toLowerCase()  // assuming suggestions should be lowercase, as displayed in the requirement doc
            });
            if (suggestions.length === maxNumOfTitles)
                break;
        }
    }

    return delayedPromise(suggestions);
}
