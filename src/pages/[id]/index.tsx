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
  const { query } = useRouter();

  const { data, loading, error } = useQuery<IGetPostsData>(GET_BLOG_POST, {
    variables: {
      id: query?.id,
    },
  });

  return (
    <LoadOrError loading={loading} error={error}>
      <Helmet>
        <title>{data?.blogPost?.title}</title>
      </Helmet>
      <h1>{data?.blogPost?.title}</h1>
      <article>{data?.blogPost?.body}</article>
      <Link href={'/'}>
        <button title="back">back</button>
      </Link>
    </LoadOrError>
  );
}

interface IGetPostsData {
  blogPost: BlogPostItem;
}
