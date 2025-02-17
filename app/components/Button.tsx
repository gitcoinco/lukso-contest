"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const primaryStyle: React.CSSProperties = {
    minWidth: '159.42px',
    height: '51.42px',
    padding: '16px 24px',
    gap: '8px',
    borderRadius: '40px 40px 40px 40px',
    background: '#6154F3',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '18px',
    textAlign: 'center' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    color: '#FFFFFF',
    whiteSpace: 'nowrap'
  };

  const secondaryStyle = {
    ...primaryStyle,
    background: '#FFFFFF',
    color: '#000000'
  };

  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0.9)'}
      onMouseOut={(e) => e.currentTarget.style.filter = 'none'}
    >
      {children}
    </button>
  );
};

export default Button;
