import { useEffect, useState } from "react";

// Define the Post type
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const Question1 = () => {
  const [data, setData] = useState<Post[]>([])

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
  
    
    setData(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>
    {data.map((item) => (
        <div key={item.userId}>
            <h5>Title: {item.title}</h5>
        </div>
    ))}
  </div>;
};

export default Question1;
