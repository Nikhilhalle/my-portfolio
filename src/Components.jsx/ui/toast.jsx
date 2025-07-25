import React from "react";

export const ToastProvider = ({ children }) => {
  return <div>{children}</div>;
};

export const Toast = ({ children, ...props }) => {
  return (
    <div
      role="alert"
      {...props}
      className="bg-gray-800 text-white p-4 rounded shadow-md mb-2"
    >
      {children}
    </div>
  );
};

export const ToastTitle = ({ children }) => {
  return <strong className="font-bold">{children}</strong>;
};

export const ToastDescription = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};

export const ToastClose = () => {
  return (
    <button
      aria-label="Close"
      className="ml-2 text-white hover:text-gray-400 focus:outline-none"
      onClick={() => {
        /* Implement close functionality if needed */
      }}
    >
      ×
    </button>
  );
};

export const ToastViewport = () => {
  return (
    <div
      aria-live="assertive"
      className="fixed bottom-0 right-0 m-4 space-y-2 max-w-xs w-full z-50"
    />
  );
};
