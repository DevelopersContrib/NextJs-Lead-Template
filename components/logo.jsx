import Image from 'next/image'
import { getData } from '../lib/data';

export default async function Logo() {
  const c = await getData();
  if(c.data.logo){
    return (
        <Image 
              src={c.data.logo}
              width={300}
              height={300}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            />
    )
  }else{
    return(
        <h1 className="tw-text-5xl font-800">{c.data.domainName}</h1>
    )
  }
}
