"use client";

import { useRouter } from "next/navigation";

export default function AddProductButton() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/main/warehouse/AddProduct");
  };
  return (
    <button
      onClick={handleOnClick}
      className="rounded-full px-2 text-4xl hover:bg-slate-100"
    >
      +
    </button>
  );
}
