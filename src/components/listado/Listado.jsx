import { useState } from "react";
import { Filters, List, ListContainer, Status, UserContainer, UserDetails, UserImg, UserInfo, UserNameContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Listado = ({users}) => {
	const navigate =useNavigate();
    const [userList, setUserList] = useState({
        lista:users,
        activeFilter:false,
        orderBy: "default",
        searchBy:''
    });
	return (
	<>
		<ListContainer>
            <h1>Listado de usuarios</h1>
        
        <Filters>
            <input type="text" name="searchBy" onChange={e => handleChangeFilter(e.target, userList,users, setUserList)}/>
            <div>
                <label htmlFor="active_checkbox">Sólo activos</label>
                <input onChange={e => handleChangeFilter(e.target, userList,users, setUserList)} type="checkbox" name="activeFilter" id="active_checkbox" checked={userList.activeFilter}/>
            </div>
            <select name="orderBy" id=""  onChange={e => handleChangeFilter(e.target, userList,users, setUserList)} value={userList.orderBy}>
                <option value="default">Por Defecto</option>
                <option value="name">Por Nombre</option>
            </select>
        </Filters>
        <List>
            
        {userList.lista.map(user =>
            <UserContainer key={user.userId}>
                <UserInfo>
                    <UserImg src={user.profileImage}>
                    </UserImg>
                    <UserNameContainer>
                        <h3>{user.name}</h3>
                        <p>@{user.username}</p>
                    </UserNameContainer>
                </UserInfo>
                <UserDetails>
                    <Status color={user.active? "green" : "red"}>{user.active? "Active" : "Inactive"}</Status>
                    <button onClick={()=>navigate(`/user/${user.userId}`)}>Ver Detalles</button>
                </UserDetails>
            </UserContainer>
             
             )}
        </List>
        </ListContainer>
	</>
	);
};

const handleChangeFilter = (param, userList,users, setUserList) =>{
    let filteredList = [...users];
    let search = userList.searchBy;
    let order = userList.orderBy;
    let active = userList.activeFilter;
    if (param.id.split("_")[1]==="checkbox") {
        active=param.checked
    }else{
        if (param.name==="searchBy") {
            search=param.value;
        }else{
            order=param.value;
        }
    }

    filteredList = filterList(search,order,active,filteredList);

    setUserList({
        lista:filteredList,
        activeFilter:active,
        orderBy:order,
        searchBy:search
    });
}

const filterList = (search,order,active,list) =>{
    if (search!=='') {
        list=filterByName(search,list);
    }
    if (active) {
        list=filterByActive(list);
    }
    if (order==='name') {
        list.sort((a,b)=>{
            if(a.name>b.name)return 1;
            if(a.name<b.name)return -1;
            return 0;
        });
    }
    return list;
}

const filterByName = (search,list) =>{
    const filtered = [];
    list.forEach(element => {
       if (element.name.toLowerCase().includes(search.toLowerCase())) {
        filtered.push(element)
       } 
    });
    return filtered;
}
const filterByActive = (list) =>{
    const filtered = [];
    list.forEach(element => {
       if (element.active) {
        filtered.push(element)
       } 
    });
    return filtered;
}

export default Listado;