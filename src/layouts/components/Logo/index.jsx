import './index.scss';

const Logo = ({logo, title, collapsed}) => {

    return (
        <div className="logo-wrap">
            <img className={collapsed ? 'collapsedLogo' : ''} src={logo} alt="logo"/>
            <h1 style={{display: collapsed ? 'none' : 'block'}}>{title}</h1>
        </div>
    );

}

export default Logo;