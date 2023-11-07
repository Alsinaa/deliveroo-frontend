const Header = ({ restaurant }) => {
  return (
    <header className="Header">
      <div
        name={restaurant.name}
        description={restaurant.description}
        cover={restaurant.picture}
      ></div>
    </header>
  );
};
export default Header;
