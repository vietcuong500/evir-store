import { Breadcrumb, NewsLetter } from "@/components";

export default function StoreLayout(props: any) {
  return (
    <div>
      <div className="bg-neutral-100 ">
        <div className="py-6 text-center container mx-auto">
          <p className="text-4xl text-black text-center  capitalize">
            Store list
          </p>
          <Breadcrumb
            className="text-center justify-center m-2"
            list={[
              {
                title: "Home",
                href: "/",
              },
              {
                title: "Store List",
                href: "/store",
                active: true,
              },
            ]}
          />
        </div>
      </div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
