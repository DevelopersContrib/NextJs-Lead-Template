import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/apps?d="+config.DOMAIN+"&container=apps-script"} />
      <div className="apps-script"></div>
    </>
  )
}

export default page