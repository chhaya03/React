function ErrorMsg({ stock }) {
  return <>{stock.length === 0 && <h3>Stock is empty</h3>}</>;
}

export default ErrorMsg;
