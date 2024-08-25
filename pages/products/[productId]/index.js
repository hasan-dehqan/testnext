import { useRouter } from 'next/router';
import React from 'react'

const productId = () => {
    const router = useRouter();
    // const productId = router.query.productId;
    const {productId} = router.query;

  return (
    <div>
        productId: {productId}
    </div>
  )
}

export default productId;