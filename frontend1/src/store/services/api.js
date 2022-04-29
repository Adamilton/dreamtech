const APIURL = 'http://localhost:2000/services/all';

export async function getCategories() {
  try {
    const response = await fetch(APIURL);
    return await response.json();
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}

