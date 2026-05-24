import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <ul>
        <li href="#">HOME</li>
        <li href="#">MENU</li>
        <li href="#">ABOUT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
