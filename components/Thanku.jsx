
const Thanku = ({domain}) => {
    const follow_link = "https://www.contrib.com/signup/follow/"+domain;
	return (
		<>
            <div className='text-center'>
                <h3>Thanks, your spot is reserved!</h3>
                <p>
                Share {domain} with you friends to move up in line and reserve your username.
                </p>
                <div className="mb-3">
                <a href={follow_link} className="btn btn-warning">Continue to Follow {domain} Brand</a>
                </div>
            </div>
		</>
	)
}
export default Thanku
