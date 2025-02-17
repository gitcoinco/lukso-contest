"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  Icon: LucideIcon;
  heading: string;
  description: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, Icon, heading, description }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    alignSelf: 'stretch',
    borderRadius: '12px',
    opacity: '0.8',
    boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)'
  };

  const titleStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.70)',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '28px',
    letterSpacing: '-0.6px'
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    padding: '54px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',
    borderRadius: '10px',
    background: '#141317'
  };

  const headingStyle: React.CSSProperties = {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: '19.844px',
    fontWeight: '700',
    lineHeight: '28px',
    letterSpacing: '-0.6px'
  };

  const descriptionStyle: React.CSSProperties = {
    alignSelf: 'stretch',
    color: '#FFFFFFB2',
    fontSize: '15.375px',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '-0.16px'
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={iconContainerStyle}>
        <Icon size={48} color="#6154F3" />
      </div>
      <div style={headingStyle}>{heading}</div>
      <div style={descriptionStyle}>
        {description.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard; 