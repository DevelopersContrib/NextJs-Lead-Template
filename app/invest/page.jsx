import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/investment?d="+domain+"&container=invest-script"} />
      <div className="invest-script"></div>
    </>
  )
}

export default page