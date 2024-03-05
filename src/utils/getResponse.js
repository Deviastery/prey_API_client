const ROOT = 'http://localhost:3001/api/';

export const getResponse = async (request) => {

    const url = ROOT + request;

    try {
        const res = await fetch(url, {
            method: "GET",
            mode: "cors",
          });

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
        
    } catch (error) {
        console.log('Could not fetch.', error.message);
        return false;
    }
}