import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/privacy?d="+config.DOMAIN+"&container=privacy-script"} />
      <div className="privacy-script"></div>
    </>
  )
}

export default page