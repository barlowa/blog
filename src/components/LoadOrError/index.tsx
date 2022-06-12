interface ILoadOrErrorProps {
  loading: boolean;
  error?: { message: string };
  children: React.ReactNode;
}

const LoadOrError = ({ loading, error, children }: ILoadOrErrorProps) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <>{children}</>;
};

export default LoadOrError;
