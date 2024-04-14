import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkelton";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col ">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              content={blog.content}
              authorName={"Anonymous"}
              publishedDate="14 April 2024"
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
