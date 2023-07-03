import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/developer?d="+config.DOMAIN+"&container=developer-script"} />
      <div className="developer-script"></div>
    </>
  )
}

export default page