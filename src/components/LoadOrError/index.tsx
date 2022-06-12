interface ILoadOrErrorProps {
  loading: boolean;
  error?: { message: string };
  children: React.ReactNode;
}

const LoadOrError = ({ loading, error, children }: ILoadOrErrorProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <>{children}</>;
};

export default LoadOrError;
