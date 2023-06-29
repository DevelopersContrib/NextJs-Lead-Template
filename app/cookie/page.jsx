import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/cookie?d="+domain+"&container=cookie-script"} />
      <div className="cookie-script"></div>
    </>
  )
}

export default page