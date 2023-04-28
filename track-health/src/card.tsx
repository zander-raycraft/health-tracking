import React from 'react';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  className?: string; // optional className prop
}

const Card = ({ imageUrl, title, description, className }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;