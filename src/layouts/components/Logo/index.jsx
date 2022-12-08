import './index.scss';

const Logo = ({logo, title, collapsed, storeSetting}) => {

    return storeSetting.showLogo
        ? (<div className="logo-wrap">
            <img className={collapsed ? 'collapsedLogo' : ''} src={logo} alt="logo"/>
            <h1
                style={{display: collapsed ? 'none' : 'block'}}
                className={storeSetting.sideBarTheme === 'light' ? 'antd-side-logo' : ''}
            >
                {title}
            </h1>
        </div>)
        : <></>;
}

export default Logo;