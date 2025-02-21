const API_URL = "https://yourdomain.com/wp-json/wp/v2"; // Din WordPress API base URL

export const fetchCases = async () => {
    try {
        const response = await fetch(`${API_URL}/cases`);
        if (!response.ok) {
            throw new Error(`Error fetching cases: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchCases:", error);
        return []; // Returnér en tom array for at undgå fejl i UI'et
    }
};
