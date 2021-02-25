import HeaderWrapper from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <h1>STUFF 2 DO</h1>
      <p style={{ textAlign: "center" }}>
        A to do list build with React by{" "}
        <a href="https://github.com/heyralfs" target="_blank">
          me
        </a>
      </p>
    </HeaderWrapper>
  );
}
export default Header;
