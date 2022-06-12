import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';
import Headline from 'styles/Headline';
import Link from 'next/link';

interface ICardProps extends BlogPostItem {
  size?: 'default' | 'large';
  tabIndex?: number;
}

const BlogItemLayout = ({ title = '', size = 'default', body }: ICardProps) => {
  return (
    <StyleWrapper>
      {title && <Headline size={size}>{title}</Headline>}
      {body && <Article>{body}</Article>}
      {<Link href={'/'}>Back</Link>}
    </StyleWrapper>
  );
};

export default BlogItemLayout;

const StyleWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 2em auto;
  padding-top: 3em;
  flex-direction: column;
  gap: 1.5em;
`;
const Article = styled.article`
  box-shadow: 0px 0px 3px 1px #0000000d;
  border-radius: 0.25em;
  background-color: ${({ theme: { colours } }) => colours?.white};
  padding: 1em;
`;
