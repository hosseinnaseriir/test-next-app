import clsx from 'clsx';
import React from 'react';

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className={clsx(`px-4 py-1 w-fit bg-slate-400 text-white rounded-3xl border-slate-50 border-2 bg-opacity-60  `,
        props.className
      )}
    />
  );
};
