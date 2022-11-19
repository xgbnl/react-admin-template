import './index.scss';

const Logo = ({ collapsed, logo, title }) => {

    return (
        <div className="logo-wrap">
            <img className={collapsed ? 'collapsedLogo' : ''} src={logo} alt="logo" />
            {collapsed ? <></> : <h1>{collapsed ? '' : title}</h1>}
        </div>
    );

}

export default Logo;