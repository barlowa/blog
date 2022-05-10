import { useQuery, gql } from '@apollo/client';
import BlogPostItem from 'types/BlogPostItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GET_BLOG_POST = gql`
  query Dog($post: String!) {
    blogPost(id: $post) {
      title
      body
    }
  }
`;

export default function BlogPostPage() {
  const router = useRouter();
  const { post } = router.query;

  const q = useQuery<IGetPostsData>(GET_BLOG_POST, {
    variables: {
      post,
    },
  });

  console.log(q.data);

  if (q.loading) return <div>Loading...</div>;

  if (q.error) return <div>{q.error?.message}</div>;

  return (
    <div>
      <h1>title:{q.data.blogPost.title}</h1>
      <p>Post: {q.data.blogPost.body}</p>
      <Link href={'/'}>
        <button>back</button>
      </Link>
    </div>
  );
}

interface IGetPostsData {
  blogPost: BlogPostItem;
}
