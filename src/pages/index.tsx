import { useQuery, gql } from '@apollo/client';

export default function BlogListingPage() {
  const q = useQuery(gql`
    query GetPosts {
      blogPostCollection {
        # skip
        # limit
        # total
        items {
          title
          # preface
          # body
        }
      }
    }
  `);

  console.log(q);
  if (q.loading) return <div>Loading...</div>;

  if (q.error) return <div>{q.error?.message}</div>;

  return <div>{JSON.stringify(q.data)}</div>;
}
