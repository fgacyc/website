import {type Blog, getBlogs} from "~/pages/api/blog";
import {useRouter} from "next/router";

// export interface Blog {
//     title: string;
//     content: string;
//     image_url: string;
//     id : number;
// }

const BlogCard = ({blog}: { blog: Blog }) => {
    const router = useRouter();
    const handleClick = () => {
        void router.push(`/blog/${blog.id}`);
    };

    return (
        <div className={"border m-4 rounded cursor-pointer"}
                onClick={handleClick}
        >
            <img src={blog.image_url} alt={blog.title} className={"w-[300px]"}/>
            <div className={"text-lg font-bold"}>{blog.title}</div>
        </div>
    );
}


const BlogPage = ({allBlogData}: { allBlogData: Blog[] }) => {
    return (
        <div>
            <div className={"h-16"}></div>
            {/*<h1>Blog</h1>*/}
            <div className={`grid grid-cols-3 gap-4 `}>
                {allBlogData.map((blog,index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;





export const getStaticProps  = async () => {
    const allBlogData:Blog[] =await getBlogs() ;
    return {
        props: {
            allBlogData,
        },
        revalidate: 60,
    };
}
