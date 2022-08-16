import React, { useContext } from 'react'
import AuthContext from '../../store/AuthContext'
import {Outlet} from 'react-router-dom'
import Adminsignin from './adminsignin';

export const ProtectRoute = () => {
    const AuthCtx = useContext(AuthContext);
  return (
    AuthCtx.isLoggedIn ? <Outlet/> : <Adminsignin/>
  )
}
