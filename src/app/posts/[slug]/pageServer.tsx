import { callAPI } from "@/config/axios";
import axios from "axios";

interface IPostDetailProps {
  params: { slug: string };
}

const PostDetail: React.FC<IPostDetailProps> = async ({ params }) => {
  const res = await callAPI.get(`/posts?id=${params.slug}`);
  console.log(res.data);

  return (
    <div>
      <p>Post Title Server : {res.data[0].title}</p>
    </div>
  );
};

export default PostDetail;
