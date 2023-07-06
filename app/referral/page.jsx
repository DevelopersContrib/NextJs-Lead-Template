
import ScriptLoader from '../../components/ScriptLoader'


const page = () => {
  
  const html = "<script id='referral-script' src='https://www.referrals.com/extension/widget.js?key=356' type='text/javascript'></script>";
  return (
    <>
      <ScriptLoader html={html} />
    </>

  )
}

export default page