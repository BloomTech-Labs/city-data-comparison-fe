import {useState, useEffect} from 'react'; 
import axios from 'axios';


const useFetch = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        setIsLoading(true); 
        console.log('Request sent'); 
        axios
            .get(url)
            .then(response => {
                setIsLoading(false); 
                console.log(response); 
                setFetchedData(response)
                
            })
            .catch(error => console.log(error))

    }, dependencies)

    return [isLoading, fetchedData]
}

export default useFetch; 