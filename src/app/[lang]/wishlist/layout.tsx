import { NewsLetter } from "@/components";

export default function WishListLayout(props: any) {
  return (
    <div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
