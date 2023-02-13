import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Being a master to shivam and jerx', body: 'lorem ipsum...', author: 'parik', id: 1 },
    { title: 'How to sell pipes', body: 'lorem ipsum...', author: 'shivam', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'jerx', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;