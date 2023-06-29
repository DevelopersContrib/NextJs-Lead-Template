import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/partner?d="+domain+"&container=partner-script"} />
      <div className="partner-script"></div>
    </>
  )
}

export default page