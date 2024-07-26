export interface Blog {
    title: string;
    content: string;
    image_url: string;
    id : number;
}

export async function getBlogs(): Promise<Blog[]> {
    // /api/blog
    const res = await fetch('https://uni.api.fgacyc.com/offical_website/blogs');
    // return await res.json() as Blog[];
    const data: Blog[] = await res.json() as Blog[];
    // console.log(data)
    return data;
}

export async function getBlog(id: string): Promise<Blog> {
    // /api/blog
    const res = await fetch(`https://uni.api.fgacyc.com/offical_website/blogs/${id}`);
    const data: Blog = await res.json() as Blog;
    return data;
}