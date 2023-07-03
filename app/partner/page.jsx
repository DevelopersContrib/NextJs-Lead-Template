import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/partner?d="+config.DOMAIN+"&container=partner-script"} />
      <div className="partner-script"></div>
    </>
  )
}

export default page