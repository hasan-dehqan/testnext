import { useRouter } from 'next/router'
import React from 'react'
import productId from '.';

const details = () => {
    const router = useRouter();
    const {productId} = router.query;
  return (
    <div>
        details: {productId}
    </div>
  )
}

export default details