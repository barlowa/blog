import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>{q.data.blogPost.title}</title>
      </Helmet>
      <h1>{q.data.blogPost.title}</h1>
      <article>{q.data.blogPost.body}</article>
      <Link href={'/'}>
        <button title="back">back</button>
      </Link>
    </LoadOrError>
  );
}

interface IGetPostsData {
  blogPost: BlogPostItem;
}
