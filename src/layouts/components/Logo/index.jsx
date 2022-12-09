import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './index.scss';

const Logo = ({logo, title, collapsed, storeSetting}) => {

    const [imgClassName, setImgClassName] = useState('');
    const [style, setStyle] = useState({});
    const [titleClassName, setTitleClassName] = useState('');

    useEffect(() => {

        setImgClassName(collapsed ? 'collapsedLogo' : '')

        setStyle({display: collapsed ? 'none' : 'block'})

        setTitleClassName(storeSetting.sideBarTheme === 'light' ? 'antd-side-logo' : '')

    }, [collapsed, storeSetting.sideBarTheme])

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/dashboard');
    }

    return storeSetting.showLogo
        ? (<div className="logo-wrap" onClick={onClick}>
            <img className={imgClassName} src={logo} alt="logo"/>
            <h1 style={style} className={titleClassName}>
                {title}
            </h1>
        </div>)
        : <></>;
}

export default Logo;