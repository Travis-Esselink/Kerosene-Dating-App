import NavHeader from "./NavHeader"

const LandingPage = () => {
    return (
        <div className="landingpage">
            <NavHeader />

            <div className="landingpage-content">
                <h1>Find The Right One, Right Here, Right Now</h1>
                <button className="createAcc-button">Create Account</button>
            </div>
        </div>
    )
}

export default LandingPage
