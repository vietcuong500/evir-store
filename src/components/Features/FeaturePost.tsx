import { NewsCard } from "../cards";

export default function FeaturePost(props: any) {
  const { blogs } = props;
  return (
    <div className="container mx-auto">
      <div>
        <p className="text-sm text-center font-medium text-[#8d765a]">
          Sản phẩm gỗ
        </p>
        <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
          Bài viết mới
        </p>
        <p className="text-sm text-neutral-800 text-center font-light">
          Truy cập vào chuyên mục bài viết để cập nhật những tin tức mới nhất{" "}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-8">
        {blogs.map((el: any, id: number) => (
          <NewsCard
            key={id}
            title={el.title}
            avatar={el.avatar}
            category={el.category?.name}
            id={el.id}
            summary={el.summary}
          />
        ))}
      </div>
    </div>
  );
}
