import Script from 'next/script';

const page = () => {
  const domain = 'repologic.com'
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/staffing?d="+domain+"&container=staffing-script"}/>
        <div className="staffing-script"></div>
    </>
   
  )
}

export default page