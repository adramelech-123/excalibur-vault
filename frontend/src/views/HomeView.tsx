import MainStyles from "../styles/Main.module.css"
import { Image } from "react-bootstrap"

const HomeView = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-lg-4 my-5">
      <Image
        src="/excalibur-home.gif"
        width={650}
        fluid
        alt="Excalibur-Home-Image"
      />
      <p className="text-primary fs-2 fw-bold mb-0">Welcome to</p>
      <p className={`${MainStyles.excaliburBlue} ${MainStyles.excaliburTitle} mt-0`}>
        EXCALIBUR
      </p>

      <p className="text-primary">
        Not using Excalibur yet?{" "}
        <span className={`${MainStyles.excaliburBlue} fw-bold`}>
          Create an Account
        </span>
      </p>
    </div>
  );
}
export default HomeView