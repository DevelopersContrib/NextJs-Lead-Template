import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/aboutnew?d="+config.DOMAIN+"&container=aboutnew-script"} />
      <div className="aboutnew-script"></div>
    </>
  )
}

export default page