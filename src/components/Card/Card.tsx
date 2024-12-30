import React from 'react';
import { Badge, Button, Typography } from '@/components';
import clsx from 'clsx';


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
  badgecontent?: string;
  header: string;
  subheader?: string;
  description: string;
  buttontext?: string;
  buttonAction?: () => void;
}

export const Card: React.FC<CardProps> = (props) => {
  const classes = clsx(
    'transition-all',
    'bg-cover',
    'bg-center',
    'bg-no-repeat',
    'card',
    'rounded-2xl',
    'flex',
    'flex-col',
    'w-full',
    'pt-48',
    'relative ',
    'overflow-hidden',
    props.className
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url("${props.img}")`,
        }}
        className={classes}
        {...props}
      >
        <Badge className="absolute top-2 left-2">{props.badgecontent}</Badge>
        <div className="flex flex-col w-full bg-gradient-to-b from-transparent to-black p-4">
          <Typography variant="heading">{props.header}</Typography>
          <Typography variant="subheading">{props.subheader}</Typography>
          <Typography>{props.description}</Typography>
          <Button className="mt-2" onClick={props.buttonAction}>{props.buttontext ?? 'start'}</Button>
        </div>
      </div>
    </>
  );
};