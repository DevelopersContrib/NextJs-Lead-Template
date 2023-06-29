import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/developer?d="+domain+"&container=developer-script"} />
      <div className="developer-script"></div>
    </>
  )
}

export default page