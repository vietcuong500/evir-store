import moment from "moment";
import { FiStar } from "react-icons/fi";
import Rating from "../rating/Rating";
import _ from "lodash"

const colors = ['#020617', '#111827', '#1c1917', '#7f1d1d', '#7c2d12', '#713f12', '#365314', '#14532d', '#064e3b', '#164e63', '#1e3a8a', '#581c87', '#881337']
export default function UserReview(props: any) {
  const { name, content, date, star } = props;
  
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-full`} style={{
          backgroundColor: `${colors[_.random(0, colors.length - 1)]}`
        }}>
          <p className="uppercase font-semibold text-white">{name.slice(0, 2)}</p>
        </div>
        <div className="w-full">
          <p className="font-semibold text-sm">{name}</p>
         
         
          <div className="flex justify-between items-center">
            <span className="text-neutral-800 text-xs">
              {moment(date).format("DD/MM/YYYY")}
            </span>
            <span className="text-neutral-800 text-xs">1 day ago</span>
          </div>
          <div className="-ml-1">
            {star ? <Rating count={5} defaultValue={star} readOnly /> : null}
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-800 mt-2">{content}</p>
    </div>
  );
}
