export default ({ errorMes } : { errorMes : string}) => {
  return (
    <html>
      <header>
        <link rel="stylesheet" href="error.css" />
        <nav>Nav</nav>
      </header>
      <div className="page-content">
        <div>{errorMes}</div>
      </div>
      <footer>Footer</footer>
    </html>
  );
};
