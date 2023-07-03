import Script from 'next/script';

const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/staffing?d="+config.DOMAIN+"&container=staffing-script"}/>
        <div className="staffing-script"></div>
    </>
   
  )
}

export default page