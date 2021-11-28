import React from "react";
import { useParams } from "react-router-dom";

const ProfilDtailes = ({ users }) => {
  const { id } = useParams();
  return (
    <div>
       {users.map(use=> id===use.id? use.username : '' )} 
    </div>
  );
};

export default ProfilDtailes;
