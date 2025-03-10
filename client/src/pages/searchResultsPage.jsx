import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchResults from "../components/searchResults/searchResults";

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') || '';

    return (
        <SearchResults searchQuery={searchQuery} />
    );
}

export default SearchResultsPage;