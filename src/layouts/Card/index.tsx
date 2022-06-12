import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';
import Headline from 'styles/Headline';
import Link from 'next/link';

import RightArrowButton from 'components/RightArrowButton';

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
  return (
    <StyleWrapper tabIndex={tabIndex}>
      {title && <Headline size={size}>{title}</Headline>}
      {preface && <Preface>{preface}</Preface>}
      {children}
      {sys?.id && (
        <Link
          href={{
            pathname: '/[id]',
            query: { id: sys.id },
          }}
        >
          <ButtonWrapper>
            <RightArrowButton
              tabIndex={tabIndex}
              title={`Read more about ${title}`}
            />
          </ButtonWrapper>
        </Link>
      )}
    </StyleWrapper>
  );
};

export default Card;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000000d;
  border-radius: 3px;
  background-color: ${({ theme: { colours } }) => colours?.white};

  &:hover {
    box-shadow: 0px 0px 4px 1px #00000036;
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { colours } }) => colours?.blue};
    box-shadow: 0px 0px 4px 1px #00000036;
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const Preface = styled.p`
  height: 100%;
`;
