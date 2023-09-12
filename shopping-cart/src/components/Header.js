
import '../App.css';
function Header(props) {
  return (
    <div className='flex zin-cart'>
   <div onClick={() => props.handleShow(false)}>Zin Cart App</div>
     <div onClick={() => props.handleShow(true)}> Cart  
        <sup> {props.count} </sup>
            </div>
     </div>
  );
}

export default Header;
