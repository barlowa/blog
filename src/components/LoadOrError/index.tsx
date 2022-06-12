import styled, { css } from 'styled-components';
interface ILoadOrErrorProps {
  loading: boolean;
  error?: { message: string };
  children: React.ReactNode;
}

const LoadOrError = ({
  loading = true,
  error,
  children,
}: ILoadOrErrorProps) => {
  if (loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <ErrorText bold addPadding>
          Error:
        </ErrorText>
        <ErrorText>{error.message}</ErrorText>
      </Wrapper>
    );
  }

  return <>{children}</>;
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 0.5em solid ${({ theme: { colours } }) => colours.white};
  border-top: 0.5em solid ${({ theme: { colours } }) => colours.blue};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorText = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ addPadding }) =>
    addPadding &&
    css`
      padding: 0.25em;
    `}
  margin: 0;
  color: red;
`;

export default LoadOrError;
