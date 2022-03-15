import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import {AuthStatus} from './AuthStatus'

export const Layout = () => {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

