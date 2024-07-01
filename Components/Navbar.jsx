
const Navbar = () => {
  return (
    <>
    <div className="Nav-right flex flex-row justify-between p-5 bg-gray-200">
     <h1>Logo</h1> 
     <div className="nav-items">
      <ul className="flex flex-row gap-10">
        <li>Dashboard</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
     </div>
     <div className="Nav-Left flex flex-row gap-10">
      <h1>bellicon</h1>
      <h1>imageicon</h1>
     </div>
    </div>
    </>
  )
}

export default Navbar