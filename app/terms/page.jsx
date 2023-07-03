import Script from 'next/script';

const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/terms?d="+config.DOMAIN+"&container=terms-script"}/>
        <div className="terms-script"></div>
    </>
   
  )
}

export default page