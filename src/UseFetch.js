import { useState, useEffect } from "react";
const useFetch = (url) => {
    const abortConst = new AbortController();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url, {signaml: abortConst.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data from that resource')
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if( !err.name === 'AbortError'){
                setError(err.message);
                setIsPending(false);
            } 
      

        });
        return () => abortConst.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;