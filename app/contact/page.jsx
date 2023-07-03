import Script from "next/script"
const page = () => {
  const config = {
    DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
  }
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/contact?d="+config.DOMAIN+"&container=contactnew-script"} />
      <div className="contactnew-script"></div>
    </>
  )
}

export default page