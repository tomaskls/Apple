import  './Header.css'

export function Header () {
    return (
        <div className="header">
    <div className="headerUp">
      <img className="logo" src="/logo.jpg"/>
    </div>
    <div className="stickyHeader">
    <div className="headerD">
    <div className="leftSide"><img className="logo" src="/blogo.png"/></div>
    <div className="rightSide">
      <p className="navOption">Vision</p>
      <p className="navOption">Design</p>
      <p className="navOption">Innovation</p>
      <button className="buyButton">Buy</button>
    </div>
    </div>
  </div>
  </div>
    )
}