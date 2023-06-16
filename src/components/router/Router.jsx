import { Route, Routes } from "react-router-dom";

import * as USERS from "../../constants/users";
import Listado from "../listado/Listado";
import User from "../user/User";

const Router = () => {
	return (
        <Routes>
            <Route path="/" element={<Listado users={USERS.USERS}/>}/>
            <Route path="/user/:id" element={<User users={USERS.USERS}/>} />
        </Routes>
	);
};

export default Router;