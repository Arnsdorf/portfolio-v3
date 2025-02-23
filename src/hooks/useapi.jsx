import { useState, useEffect } from "react";
import { fetchCases } from "@/api/service";

export const useFetchCases = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCases = async () => {
            try {
                const data = await fetchCases();
                setCases(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getCases();
    }, []);

    return { cases, loading, error };
};
