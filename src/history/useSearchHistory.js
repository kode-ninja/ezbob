import {useState} from "react";

const useSearchHistory = () => {
    const [searchHistory, setSearchHistory] = useState([]);

    const push = title => {
        remove(title);
        setSearchHistory(currHistory => [title, ...currHistory]);
    }

    const remove = title => {
        setSearchHistory(currHistory => currHistory.filter(historyTitle => historyTitle !== title));
    }

    const exists = title => {
        return searchHistory.includes(title);
    }

    return {
        push,
        remove,
        exists
    };
}

export default useSearchHistory;