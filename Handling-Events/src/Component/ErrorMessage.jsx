const ErrorMessage = ({ arrayItems }) => {
  return <>{arrayItems.length === 0 && <h3>Stock is empty.</h3>}</>;
};

export default ErrorMessage;
