'use client';

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/router"; // Fixed typo in import

export default function RemoveBtn({ id }) {
  const router = useRouter(); // Added missing router declaration

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      const res = await fetch(`https://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.reload(); // Changed from router.refresh() to router.reload()
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
