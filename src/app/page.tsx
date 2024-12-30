import { Typography } from '@/components';
import ProductsModule from '@/modules/ProductsModule/ProductsModule';
import React from 'react';

export default function Home() {

  return (
    <div className='min-h-screen px-5 pt-2 pb-10'>
      <Typography className="p-3 pb-4" variant='heading'>Hossein Naseri&apos;s Interview Test Result </Typography>
      <ProductsModule />
    </div>
  );
}