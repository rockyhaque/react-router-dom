import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ?
                <p>Loading...</p>
                :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;