import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const example = () => {
    const notify = () => {
        toast.error("You can't add more than 25 todos!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    return (
        <>  
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        
        </>
    );
    
};

export default example;
