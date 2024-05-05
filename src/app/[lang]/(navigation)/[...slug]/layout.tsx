import { NewsLetter } from "@/components";

export default function CustomizeLayout(props: any) {
  return (
    <div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
