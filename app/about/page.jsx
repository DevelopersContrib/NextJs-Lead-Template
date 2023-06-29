import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/aboutnew?d="+domain+"&container=aboutnew-script"} />
      <div className="aboutnew-script"></div>
    </>
  )
}

export default page