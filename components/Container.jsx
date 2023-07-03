"use client";

import { useState} from "react";
import Image from 'next/image'
import Form from "./Form";
import Thanku from "./Thanku";

const Container = ({domain}) => {
const [success, setSuccess] = useState(false);
  
  return (
    <>
    
    {success ? <Thanku />: <Form domain={domain} setSuccess={setSuccess}/>}
  
  </>
  )
}

export default Container