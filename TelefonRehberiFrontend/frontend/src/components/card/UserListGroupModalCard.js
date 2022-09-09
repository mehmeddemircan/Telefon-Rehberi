import React from "react";
import { useSelector } from "react-redux";
import UserListGroupModal from "../list/UserListGroup";

const UserListGroupModalCard = () => {
  const getAllUser = useSelector((state) => state.getAllUser);
  return (
    <div className="col-md-6 my-4 px-5" style={{ maxHeight: "400px",
    overflowY: "auto",}}>
      <h2>All Users</h2>
      <ul class="list-group list-group-flush">
        {getAllUser.users.map((user) => (
          <UserListGroupModal key={user.id} user={user}  />
        ))}
      </ul>
    </div>
  );
};

export default UserListGroupModalCard;
