import { useQuery, gql } from '@apollo/client';
import Headline from 'styles/Headline';
import styled from 'styled-components';
import LoadOrError from 'components/LoadOrError';
import Card from 'layouts/Card';
import BlogPostItem from 'types/BlogPostItem';

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

  return (
    <PageWrapper>
      <header>
        <Headline>From the blog</Headline>
        <span id="header-line" />
      </header>
      <LoadOrError {...q}>
        <article>
          <GridWrapper>
            {q?.data?.blogPostCollection?.items.map((post, index) => (
              <Card key={post.sys.id} {...post} tabIndex={index} />
            ))}
          </GridWrapper>
        </article>
      </LoadOrError>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  header {
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 3rem 0;

    #header-line {
      height: 1px;
      width: 100%;
      border-top: 1px solid ${({ theme: { colours } }) => colours.sky};
      margin-left: 2rem;
    }
  }
  article {
    padding-left: 150px;
  }
`;
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1.5em;
  /* set up a grid template for 3 columns */
  grid-template-columns: repeat(3, 1fr);

  /* span every 1st element to 2 columns */
  div:nth-child(5n - 4) {
    grid-column-start: span 2;
  }
`;

interface IGetPostsData {
  blogPostCollection: {
    items: BlogPostItem[];
  };
}
