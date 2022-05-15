interface ILoadOrErrorProps {
  loading: boolean;
  error?: { message: string };
  children: React.ReactNode;
}

const LoadOrError = (props: ILoadOrErrorProps) => {
  if (props?.loading) {
    return <div>Loading...</div>;
  }
  if (props?.error) {
    return <div>{props.error.message}</div>;
  }

  return <div>{props.children}</div>;
};

export default LoadOrError;
