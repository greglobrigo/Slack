
import { HashLoader } from "react-spinners";

const Loaders = ({loading}) => {
    return (
        <>             
        <div className="loader">
          <HashLoader loading={loading} color={"purple"} size={80}/> 
          <h3>Almost there...</h3>
          </div> 
          </>
    )
}

export default Loaders
