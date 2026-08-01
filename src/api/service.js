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

export const fetchBlog = async () => {
    try {
        const response = await fetch(`${BASE_URL}/blog`);

        if (!response.ok) {
            throw new Error(
                `Error fetching blog: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();

        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error in fetchBlog:", error);
        return [];
    }
};



export const fetchBlogPost = async (slug) => {
    try {
        const response = await fetch(
            `${BASE_URL}/blog/${encodeURIComponent(slug)}`
        );

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error(
                `Error fetching blog post: ${response.status} ${response.statusText}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error(`Error in fetchBlogPost (${slug}):`, error);
        return null;
    }
};