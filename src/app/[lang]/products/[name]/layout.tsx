import { NewsLetter } from "@/components";

export default function ProductLayout(props: any) {
  return (
    <div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
