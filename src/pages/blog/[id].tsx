/* eslint-disable @next/next/no-img-element */
// import { type GetStaticPaths, type GetStaticProps } from "next";
import { type Blog, getBlog } from "~/helpers";
import MdViewer from "~/components/md-viewer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CgSpinner } from "react-icons/cg";

const BlogPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [blogData, setBlogData] = useState<Blog>({
    content: "",
    id: 0,
    image_url: "",
    title: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    void (async () => {
      await getBlog(id).then((blog) => {
        setBlogData(blog);
        setLoading(false);
      });
    })();
  }, [id]);

  const { title, content, image_url } = blogData;
  return loading ? (
    <div className="flex h-full min-h-screen w-full flex-grow flex-col items-center justify-center">
      <CgSpinner color="#00EDC2" size={45} className="animate-spin" />
    </div>
  ) : (
    <div>
      <div className={"h-16"}></div>
      <img src={image_url} alt={title} className={"w-full"} />
      <div
        className={`mx-auto max-w-[1000px]  p-4  sm:p-8
            
            `}
      >
        <div className={"mb-8 text-center text-2xl font-bold sm:text-5xl"}>
          {title}
        </div>
        <MdViewer content={content} />
      </div>
    </div>
  );
};
export default BlogPage;
