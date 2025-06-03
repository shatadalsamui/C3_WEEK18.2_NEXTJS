import axios from "axios";

async function getBlogs() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;

}

export default async function Blogs() {

    const blogs = await getBlogs();

    return( <div>
        {blogs.map((blogs: iTodo) => <Todo title={blogs.title} completed={blogs.completed}/>)}
    </div>)
}

interface iTodo {
    title: string;
    completed: boolean;

}

function Todo({title, completed}: iTodo) {
    return <div>
        {title} {completed ? "done!" : "not done"}
    </div>
}