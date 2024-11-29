import React from 'react'

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const ShowPassword = ({show}) => {
  return (
    <>
        { show ? <BsFillEyeFill /> : <BsFillEyeSlashFill /> }
    </>
  )
}

export default ShowPassword