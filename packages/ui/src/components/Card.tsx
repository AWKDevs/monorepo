// packages/ui/src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
