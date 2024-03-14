import React from 'react';
import { NavBar } from './NavBar';
import "../components/notFound.css"

export const NotFoundPage: React.FC = () => {
  return (
    <div className="notFoundPage">
      <h1>404: Page Not Found</h1>
      <a href="/home"> Home </a>

    </div>
  );
};
