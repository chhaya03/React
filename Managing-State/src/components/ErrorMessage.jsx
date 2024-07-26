const ErrorMessage = ({ Fruits }) => {
  return <>{Fruits.length === 0 && <h3>Stock is empty.</h3>}</>;
};

export default ErrorMessage;
