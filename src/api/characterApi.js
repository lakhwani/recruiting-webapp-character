const API_URL =
  "https://recruiting.verylongdomaintotestwith.ca/api/{lakhwani}/character";

export const getCharacter = async () => {
  try {
    console.log("Fetching character data...");
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch character data");
    }
    const data = await response.json();
    console.log("Character data fetched:", data);
    return data.body.body.attributes; // Adjusted to parse the nested structure
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveCharacter = async (character) => {
  try {
    console.log("Saving character data:", character);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: { attributes: character.attributes } }),
    });
    if (!response.ok) {
      throw new Error("Failed to save character data");
    }
    console.log("Character data saved successfully");
  } catch (error) {
    console.error(error);
  }
};
