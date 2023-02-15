import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null); //using null here because now we are going to update the state usinbg setData ("steBlogs")
    const [isPending, setIsPending] = useState(true); // basically to add the "loading" message while the data is being fetched from another server
    const [error , setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if(!res.ok){
                throw Error('Could not access the resource!');
              }
              return res.json(); // is is an asynchronous function and here we are returning resource from the JSON server.
            })
            .then((data) => {
              // if we get a response the data is received
              console.log(data);
              setData(data); //state is updated after getting the data
              setIsPending(false); //initially this is set to true but when there is a change in the state i.e data is fetched it is turned to false to remove the "Loading..."
              setError(null);
            })
            .catch((err) => {
              setIsPending(false); 
              setError(err.message);// Here we are using the setError state we created
            });
        }, 1000);
      }, [url]);
      return {data, isPending , error};
}
 
export default useFetch;