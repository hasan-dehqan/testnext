import { useRouter } from 'next/router';
import React from 'react'

const params = () => {
  const router = useRouter();
  const {params = []} = router.query;
  // console.log(params);
  
  return (
    <div>
      <div>
      {params[0]}

      </div>
      With Filter Params...
    </div>
  )
}

export default params