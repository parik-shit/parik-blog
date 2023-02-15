import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [name, setName] = useState("jerx");
  const [blogs, setBlogs] = useState(null); //using null here because now we are going to update the state usinbg setData ("steBlogs")
  const [isPending, setIsPending] = useState(true); // basically to add the "loading" message while the data is being fetched from another server
  const [error , setError] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok){
            throw Error('Could not access the resource!');
          }
          return res.json(); // is is an asynchronous function and here we are returning resource from the JSON server.
        })
        .then((data) => {
          // if we get a response the data is received
          console.log(data);
          setBlogs(data); //state is updated after getting the data
          setIsPending(false); //initially this is set to true but when there is a change in the state i.e data is fetched it is turned to false to remove the "Loading..."
          setError(null);
        })
        .catch((err) => {
          setIsPending(false); 
          setError(err.message);// Here we are using the setError state we created
        });
    }, 1000);
  }, []);
  return (
    <div className="home">
      {error && (<div>
        <p>{error}</p>
        </div>)}
      {isPending && ( //conditional rendering
        <div>
          <p>Loading...</p>
        </div>
      )}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
