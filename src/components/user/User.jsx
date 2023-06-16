import { useNavigate, useParams } from "react-router-dom";
import { UserContainer } from "./styles";

const User = ({users}) => {
    const {id}  = useParams();
	const navigate =useNavigate();
    const user = getUserInfo(id,users);
	return (
        <>
        <UserContainer>
            <button onClick={()=>navigate("/")}>Back To Users</button>
            <img src={user.profileImage} alt="" />
            <h1>Hi! My name is {user.name}</h1>
            <p>I'm {user.age}</p>
            <p>My username is {user.username}</p>
            <p>You can contact me in {user.email}</p>
            <p>My Address is:</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipCode}</p>
            <p>You can call me at {user.phone}</p>
        </UserContainer>
        </>
	);
};


const getUserInfo = (id,users) => {
    let user;
    for (let index = 0; index < users.length; index++) {
        if (users[index].userId===id) {
            user=users[index];
            break;
        }
        
    }
    return user;
};

export default User;