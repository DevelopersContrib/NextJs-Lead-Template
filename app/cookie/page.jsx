import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/cookie?d="+config.DOMAIN+"&container=cookie-script"} />
      <div className="cookie-script"></div>
    </>
  )
}

export default page