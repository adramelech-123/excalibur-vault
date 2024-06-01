import MainStyles from "../styles/Main.module.css"

const HomeView = () => {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center">
      <img src="public/excalibur-home.gif" alt="excalibur-home" width={700} />
      <p className="text-primary fs-2 fw-bold">Welcome to</p>
      <p className={`${MainStyles.excaliburBlue} ${MainStyles.excaliburTitle}`}>EXCALIBUR</p>
      <p className="text-primary">Not using Excalibur yet? <span className={`${MainStyles.excaliburBlue} fw-bold`}>Create an Account</span></p>
    </div>
  )
}
export default HomeView