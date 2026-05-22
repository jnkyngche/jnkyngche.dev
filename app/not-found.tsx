import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-24 flex flex-col items-center text-center gap-4">
      <p className="text-6xl font-bold text-slate-200 dark:text-slate-700">
        404
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        요청한 페이지를 찾을 수 없습니다.
      </p>
    </div>
  );
}
