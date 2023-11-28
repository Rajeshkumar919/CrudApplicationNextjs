"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
    throw error; // Re-throw the error to propagate it to the calling function
  }
};

export default async function TopicsList() {
  try {
    const { topics } = await getTopics();

    return (
      <>
        {topics.map((t) => (
          <div
            className="p-4 border border-state-300 my-3 flex justify-between gap-5 items-start"
            key={t._id}
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <a>
                  <HiPencilAlt size={24} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching topics:", error);
    return null;
  }
}
