"use client";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Adjust time as needed
  }, []);

  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  ) : (
    children
  );
};

Preloader.propTypes = {
  children: PropTypes.node,
};
Preloader.defaultProps = {
  children: null,
};
export default Preloader;
