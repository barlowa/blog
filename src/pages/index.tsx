import { useQuery, gql } from '@apollo/client';
import Card from 'layouts/Card';
import BlogPostItem from 'types/BlogPostItem';
import Link from 'next/link';

const GET_POSTS = gql`
  query GetPosts {
    blogPostCollection {
      items {
        sys {
          id
        }
        title
        preface
      }
    }
  }
`;

export default function BlogPostPage() {
  const q = useQuery<IGetPostsData>(GET_POSTS);

  console.log(q.data);

  if (q.loading) return <div>Loading...</div>;

  if (q.error) return <div>{q.error?.message}</div>;

  return q.data.blogPostCollection?.items.map(post => {
    return (
      <Card key={post.sys.id} {...post}>
        <Link
          href={{
            pathname: '/[post]',
            query: { post: post.sys.id },
          }}
        >
          <button>click</button>
        </Link>
      </Card>
    );
  });
}

interface IGetPostsData {
  blogPostCollection: {
    items: BlogPostItem[];
  };
}
