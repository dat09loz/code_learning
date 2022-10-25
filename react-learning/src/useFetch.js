import {useState, useEffect} from 'react'; //destructor the useState by put it in {}

const useFetch = (url) => {
    const [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);
    let [err, setErr] = useState(null)


    useEffect(() => {// useful for fetching data for example
        const abortCont = new AbortController(); //associate this controller with a fetch

        fetch(url, {signal: abortCont.signal}) //associate this fetch with abortCont
            .then(res => { //fetch response object and convert it to js object
                if (!res.ok) { //if the response is okay
                    throw Error('could not fetch data');
                }
                return res.json()
            })
            .then(data => {// get the JS object and 
                setData(data)
                setIsPending(false);
                setErr(null);
            })
            .catch(e => {
                if (e.name === 'AbortError')
                    console.log('fetch aborted')
                else {
                    setErr(e.message);
                    setIsPending(null);
                }
            })

        return () => abortCont.abort();
    }, [url]); //useEffect will run whenever the url changes

    return {data, isPending, err} //returning the state props
}

export default useFetch;