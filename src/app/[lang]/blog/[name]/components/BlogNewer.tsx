import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Cookies from "js-cookie";

export default function BlogNewer() {
  const newer = Cookies.get("newer");
  const older = Cookies.get("older");
  return (
    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between">
      <div className="flex items-center gap-4 w-full xl:w-auto">
        <div className="min-w-[2.5rem] min-h-[2.5rem] w-10 h-10 cursor-pointer transition-all duration-100 group hover:bg-green-600 rounded-full hover:border-transparent border-neutral-200 border flex-center">
          <FiChevronLeft className="text-2xl text-neutral-400 group-hover:text-white" />
        </div>

        <div className="text-sm">
          <p className="text-xs text-neutral-800">Bài viết trước</p>
          <p className="hover:text-green-800 cursor-pointer">
            Minimalist Japanese-inspired furniture
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full xl:w-auto justify-end">
        <div className="text-sm text-right">
          <p className="text-xs text-neutral-800">Bài viết sau</p>
          <p className="hover:text-green-800 cursor-pointer">
            Minimalist Japanese-inspired furniture
          </p>
        </div>
        <div className="w-10 h-10 cursor-pointer transition-all duration-100 group hover:bg-green-600 rounded-full hover:border-transparent border-neutral-200 border flex-center">
          <FiChevronRight className="text-2xl text-neutral-400 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}
