import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';
import Headline from 'styles/Headline';
import Link from 'next/link';

import RightArrow from 'components/RightArrow';

interface ICardProps extends BlogPostItem {
  children?: React.ReactNode;
  size?: 'default' | 'large';
  tabIndex?: number;
}

const Card = ({
  title = '',
  size,
  preface = '',
  children,
  tabIndex = 0,
  sys,
}: ICardProps) => {
  if (!sys?.id) {
    return null;
  }

  return (
    <Link
      href={{
        pathname: '/[id]',
        query: { id: sys.id },
      }}
    >
      <StyleWrapper tabIndex={tabIndex}>
        {title && <Headline size={size}>{title}</Headline>}
        {preface && <Preface>{preface}</Preface>}
        {children}
        {sys?.id && (
          <ArrowWrapper>
            <RightArrow />
          </ArrowWrapper>
        )}
      </StyleWrapper>
    </Link>
  );
};

export default Card;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 0px 3px 1px #0000000d;
  border-radius: 0.25em;
  background-color: ${({ theme: { colours } }) => colours?.white};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 4px 1px #00000036;
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { colours } }) => colours?.blue};
    box-shadow: 0px 0px 4px 1px #00000036;
  }
`;

const ArrowWrapper = styled.div`
  align-self: flex-end;
`;

const Preface = styled.p`
  height: 100%;
`;
