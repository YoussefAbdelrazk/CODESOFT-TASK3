import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: '/', text: 'home' },
  // { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'wishlist', text: 'wishlist' },
  // { id: 6, url: 'orders', text: 'orders' },
  { id: 7, url: 'categories', text: 'categories' },
  { id: 8, url: 'brands', text: 'Brands' },
];
export default function Navlinks() {
  return (
    <>
    {links.map((link) => {
      const { id, url, text } = link;
      return (
        <li key={id}>
          <NavLink className='capitalize' to={url}>
            {text}
          </NavLink>
        </li>
      );
    })}
  </>
  )
}