import {useEffect, useState} from "react";
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

    return storeSetting.showLogo
        ? (<div className="logo-wrap">
            <img className={imgClassName} src={logo} alt="logo"/>
            <h1 style={style} className={titleClassName}>
                {title}
            </h1>
        </div>)
        : <></>;
}

export default Logo;