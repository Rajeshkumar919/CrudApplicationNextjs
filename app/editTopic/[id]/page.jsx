import EditTopicForm from "@/components/EditTopicForm";
import { useRouter } from 'next/router';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTopicPage = ({ topic }) => {
  const router = useRouter();

  const { id, title, description } = topic;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return <EditTopicForm id={id} title={title} description={description} />;
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const topic = await getTopicById(id);

  return {
    props: {
      topic,
    },
  };
}

export default EditTopicPage;
