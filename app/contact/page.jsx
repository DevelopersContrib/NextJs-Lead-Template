import Script from "next/script"
const page = () => {
  const domain = 'repologic.com'
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/contact?d="+domain+"&container=contactnew-script"} />
      <div className="contactnew-script"></div>
    </>
  )
}

export default page