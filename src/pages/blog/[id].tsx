import {type GetStaticPaths, type GetStaticProps} from "next";
import {type Blog, getBlog, getBlogs} from "~/pages/api/blog";
import MdViewer from "~/components/md-viewer";

const BlogPage = ({blogData}: { blogData: Blog }) => {
    const {title, content,image_url} = blogData;
    return (
        <div>
            <div className={"h-16"}></div>
            <img src={image_url} alt={title} className={"w-full"}/>
            <div className={`sm:p-8 p-4  max-w-[1000px]  mx-auto
            
            `}>
                <div className={"sm:text-5xl text-2xl text-center font-bold mb-8"}>{title}</div>
                <MdViewer content={content}/>
            </div>
        </div>
    );
};
export default BlogPage;


export const getStaticPaths: GetStaticPaths = async () => {
    // 这里你需要返回所有的博客 id
    const blogs = await getBlogs(); // 假设你有一个方法来获取所有博客
    const paths = blogs.map(blog => ({
        params: {id: blog.id.toString()},
    }));
    return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params!;
    if (typeof id !== 'string') {
        throw new Error('Invalid id');
    }
    const blogData: Blog = await getBlog(id);
    return {
        props: {
            blogData,
        },
        revalidate: 60,
    };
};
