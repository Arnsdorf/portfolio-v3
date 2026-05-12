const BASE_URL = "https://hecamefromsporting.com/wp-json/portfolio/v1";


export const fetchCases = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cases`);
        if (!response.ok) {
            throw new Error(`Error fetching cases: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchCases:", error);
        return [];
    }
};


export const fetchTechnologies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/technologies`);
        if (!response.ok) {
            throw new Error(`Error fetching technologies: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchTechnologies:", error);
        return [];
    }
};
