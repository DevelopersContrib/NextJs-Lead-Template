import Script from 'next/script';

const page = () => {
  const domain = 'repologic.com'
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/terms?d="+domain+"&container=terms-script"}/>
        <div className="terms-script"></div>
    </>
   
  )
}

export default page