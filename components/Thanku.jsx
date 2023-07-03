import Image from 'next/image'

export default function Thanku() {
    const config = {
        DOMAIN: process.env.NEXT_PUBLIC_VERCEL_URL
      }
      const follow_link = "https://www.contrib.com/signup/follow/"+config.DOMAIN;
	return (
		<>
            <div className='text-center'>
                <h3>Thanks, your spot is reserved!</h3>
                <p>
                Share {config.DOMAIN} with you friends to move up in line and reserve your username.
                </p>
                <div className="mb-3">
                <a href={follow_link} className="btn btn-warning">Continue to Follow {config.DOMAIN} Brand</a>
                </div>
            </div>
		</>
	)
}
