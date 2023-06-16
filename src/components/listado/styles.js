import styled from "styled-components";

const ListContainer = styled.main`
    margin-top: 32px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;
const Filters = styled.form`
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`;
const UserContainer = styled.div`
    width: 500px;
    height: 66px;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    border-radius: 0.75rem;
`;
const UserInfo = styled.div`
    display: flex;
    gap: 16px;
`;
const UserImg = styled.img`
    display: flex;
    border-radius: 50%;
    width: 50px;
`;
const UserNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const UserDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
`;
const Status = styled.p`
    color: ${props => props.color};
`;

export {ListContainer,Filters,List,UserContainer,Status,UserDetails,UserImg,UserInfo,UserNameContainer};