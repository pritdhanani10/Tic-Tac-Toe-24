
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenAction } from "../store/token";
import { userActions } from "../store/user";
import { toast } from "react-toastify";

export default function Logout() {
    const dispatch=useDispatch();
    const Navigate=useNavigate();
    
  useEffect(() => {
    dispatch(tokenAction.deleteToken());
    dispatch(userActions.deleteUser());
    
    toast.success("logout success");
    Navigate("/");
}, []);
  return <>
  <h1>Logout</h1></>;
}
