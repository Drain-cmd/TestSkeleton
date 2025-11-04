"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  console.log("Error", error);

  return (
    <>
      <div>
        An unexpected error has occured:<p>{error.message}</p>
      </div>

      <button className="btn" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default ErrorPage;
