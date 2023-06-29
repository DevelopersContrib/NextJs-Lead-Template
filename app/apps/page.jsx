import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/apps?d="+domain+"&container=apps-script"} />
      <div className="apps-script"></div>
    </>
  )
}

export default page