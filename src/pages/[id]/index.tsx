import { useQuery, gql } from '@apollo/client';
import BlogPostItem from 'types/BlogPostItem';
import LoadOrError from 'components/LoadOrError';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GET_BLOG_POST = gql`
  query Dog($id: String!) {
    blogPost(id: $id) {
      title
      body
    }
  }
`;

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;

  const q = useQuery<IGetPostsData>(GET_BLOG_POST, {
    variables: {
      id,
    },
  });

  console.log(q.data);

  if (q.loading) return <div>Loading...</div>;

  if (q.error) return <div>{q.error?.message}</div>;

  return (
    <LoadOrError {...q}>
      <h1>{q.data.blogPost.title}</h1>
      <p>{q.data.blogPost.body}</p>
      <Link href={'/'}>
        <button>back</button>
      </Link>
    </LoadOrError>
  );
}

interface IGetPostsData {
  blogPost: BlogPostItem;
}
