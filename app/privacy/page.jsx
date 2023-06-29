import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/privacy?d="+domain+"&container=privacy-script"} />
      <div className="privacy-script"></div>
    </>
  )
}

export default page