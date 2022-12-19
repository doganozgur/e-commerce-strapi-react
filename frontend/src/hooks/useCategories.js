import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { httpGetCategories } from "./requests";

export default function useCategories() {
    const [categories, setCategories] = useState([]);

    const getCategories = useCallback(async () => {
        const fetchedCategories = await httpGetCategories();
        setCategories(fetchedCategories.data.data);
    }, []);
    useEffect(() => {
        getCategories();
    }, [getCategories])
    return categories;
}