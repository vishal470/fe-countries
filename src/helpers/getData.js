export async function getCountries() {
  try {
    const response = await fetch("https://xcountries-backend.labs.crio.do/all");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}
