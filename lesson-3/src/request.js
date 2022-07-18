    export const requestData = async (url) => {
      const fetchData = await fetch(url);
      return await fetchData.json();
    }