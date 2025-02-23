const API_URL = "https://hecamefromsporting.com/wp-json/portfolio/v1/cases"; // WordPress API base URL

export const fetchCases = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error fetching cases: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchCases:", error);
        return []; // Returnér en tom array for at undgå UI-fejl
    }
};
