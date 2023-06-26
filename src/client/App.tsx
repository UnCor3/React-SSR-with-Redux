import Routes from "../shared/routes.tsx";

export default () => {
  return (
    <>
      <header>
        <nav>
          <a href="/" style={{color:'white'}}>Home</a>
        </nav>
      </header>
      <div className="page-content">
        <Routes />
      </div>
      <footer>Footer</footer>
    </>
  );
};
