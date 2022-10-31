import CreateAccount from "./CreateAccount"
import Login from "./Login"

const SignInOutModal = ({setShowModal, isSignUp}) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <>
            <div onClick={handleClick}>❌</div>
            {isSignUp ? <CreateAccount /> : <Login />}
        </>
    )
}

export default SignInOutModal

// either createAcc or login
// 1. If click on Create Account -> isSignUp(true)
// 2. If click on Login -> isSignUp(false)