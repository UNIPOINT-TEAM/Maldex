import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { GetPrintCategory } from '../../services/main';

function Print() {
  // const [first, setfirst] = useState(second)
  // const [faq, setFaq] = useState<FaqItem[]>([]);

  // useEffect(() => {
  //   GetPrintCategory()
  //     .then((res) => {
  //       setFaq(res);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching FAQ data:', error);
  //     });
  // }, []);
  return (
    <DefaultLayout>
      <div>Print</div>
    </DefaultLayout>
  )
}

export default Print