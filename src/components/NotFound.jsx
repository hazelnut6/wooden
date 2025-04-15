import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h1>Page not found -_-</h1>
      <NavLink to='/'>Go back...</NavLink>
    </div>
  )
}
