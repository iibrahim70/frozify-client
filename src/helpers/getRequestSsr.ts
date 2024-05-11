const getRequestSsr = async (url: string) => {
  try {
    // Make a fetch request to the provided URL with cache set to "no-store"
    const res = await fetch(url, {
      cache: "no-cache",
    });

    // Check if the response is not okay (status code other than 2xx)
    if (!res?.ok) {
      // If response is not okay, throw an Error with the status text
      throw new Error("Network response was not ok " + res?.statusText);
    }

    // If response is okay, parse the response body as JSON and return it
    return res?.json();
  } catch (error) {
    // If an error occurs during the fetch or parsing, log the error
    console.error("Error fetching data: ", error);
    // Throw the error to be handled by the caller
    throw error;
  }
};

export default getRequestSsr;
