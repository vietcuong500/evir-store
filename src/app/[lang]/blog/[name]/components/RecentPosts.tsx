import BlogCard2 from "./BlogCard2";

export default function RecentPosts(props: any) {
  const { data } = props;
  return (
    <div className="">
      <div className="">
        <p className="text-2xl font-medium text-neutral-900 font-[playfair]">
          Bài viết gần đây
        </p>
        <div className=" flex flex-col gap-4 mt-6 [&>div]:border-b border-neutral-100 [&>div]:pb-4">
          {data.map((el: any, id: number) => (
            <BlogCard2 src={el.avatar} id={el.id} create_at={el.create_at} name={el.title} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
