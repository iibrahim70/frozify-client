const getRequestSsr = async (url: string) => {
  // Make a fetch request to the provided URL with cache set to "no-store"
  const res = await fetch(url, {
    cache: "no-store",
  });

  // Check if the response is not okay (status code other than 2xx)
  if (!res?.ok) {
    // If response is not okay, throw an Error with the status text
    throw new Error("Network response was not ok " + res?.statusText);
  }

  // If response is okay, parse the response body as JSON and return it
  return res?.json();
};

export default getRequestSsr;
