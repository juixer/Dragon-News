import { Outlet, useNavigation } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" ? (
        <div className="flex justify-center py-44">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <Outlet />
      )}
      <ToastContainer/>
    </div>
  );
};

export default Root;
