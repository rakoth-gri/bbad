import {memo} from 'react'
import { Link } from 'react-router-dom';

import { GiTakeMyMoney } from "react-icons/gi";
import  style from "./Logo.module.css";

// константы
import { logoProps } from '../../constants/constants';

const Logo = memo(() => {
  return (
    <Link to="/" className={style.logo}>
        <GiTakeMyMoney style={logoProps}/>
    </Link>
  )
});

export default Logo;

