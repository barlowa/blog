import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet';
import BlogPostItem from 'types/BlogPostItem';
import BlogItemLayout from 'layouts/BlogItemLayout';
import LoadOrError from 'components/LoadOrError';
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
    <>
      <LoadOrError loading={loading} error={error}>
        <Helmet>
          <title>{data?.blogPost?.title}</title>
        </Helmet>
        <BlogItemLayout {...data?.blogPost} />
      </LoadOrError>
    </>
  );
}

interface IGetPostsData {
  blogPost: BlogPostItem;
}
