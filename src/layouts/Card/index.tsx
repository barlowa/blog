import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';
import Headline from 'styles/Headline';
import Link from 'next/link';

import RightArrowButton from 'components/RightArrowButton';

interface ICardProps extends BlogPostItem {
  children?: React.ReactNode;
  size?: 'default' | 'large';
}

const Card = (props: ICardProps) => {
  return (
    <StyleWrapper>
      {props?.title && <Headline size={props?.size}>{props?.title}</Headline>}
      {props?.preface && <Preface>{props?.preface}</Preface>}
      {props?.children}
      {props?.sys?.id && (
        <Link
          href={{
            pathname: '/[id]',
            query: { id: props.sys.id },
          }}
        >
          <ButtonWrapper>
            <RightArrowButton height="10px" title="Read More" />
          </ButtonWrapper>
        </Link>
      )}
    </StyleWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  preface: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const Preface = styled.p`
  height: 100%;
`;
