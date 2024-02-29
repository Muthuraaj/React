import logoImg from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaruant logo" />
        <h2>Food Order App</h2>
      </div>
      <button>Cart(0)</button>
    </header>
  );
}
