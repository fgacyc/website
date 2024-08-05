import { type Blog, getBlogs } from "~/helpers";
import { useRouter } from "next/router";

// export interface Blog {
//     title: string;
//     content: string;
//     image_url: string;
//     id : number;
// }

const BlogCard = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  const handleClick = () => {
    void router.push(`/blog/${blog.id}`);
  };

  return (
    <div className={"m-4 cursor-pointer rounded border"} onClick={handleClick}>
      <img src={blog.image_url} alt={blog.title} className={""} />
      <div className={"p-4 text-lg font-bold "}>{blog.title}</div>
    </div>
  );
};

const BlogPage = ({ allBlogData }: { allBlogData: Blog[] }) => {
  return (
    <div>
      <div className={"h-16"}></div>
      {/*<h1>Blog</h1>*/}
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 `}>
        {allBlogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const allBlogData: Blog[] = await getBlogs();
  return {
    props: {
      allBlogData,
    },
    revalidate: 60,
  };
};
