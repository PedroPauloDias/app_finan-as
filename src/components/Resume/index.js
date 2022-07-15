import React from 'react'
import ResumeItem from '../Resumeitem'
import * as c from "./styles"
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa"
const Resume = ({income, expense, total}) => {
  return (
    <c.Container>
      <ResumeItem title="entradas" Icon={FaRegArrowAltCircleDown} value={income}/>
      <ResumeItem title="saidas" Icon={FaRegArrowAltCircleUp} value={expense}/>
      <ResumeItem title="total" Icon={FaDollarSign} value={total}/>

    </c.Container>
  )
}

export default Resume