import {useEffect, useState} from "react";
import {Switch, Divider, List} from "antd";
import {useAppDispatch} from "@/app/hooks.js";
import groups from "./groups.js";
import {setSettings} from "@/app/reducers/setting/settingReducer.js";

const ListItem = List.Item;
const Meta = List.Item.Meta;

const DrawerContent = ({storeSetting}) => {
    const [groupItems, setGroupItems] = useState(groups);
    const [split] = useState(false);
    const [size] = useState('small');

    useEffect(() => {
        setGroupItems(groups);
    }, [groups])

    const dispatch = useAppDispatch();
    const onSwitch = (item, value) => {

        if (item.key === 'sideBarTheme') {
            dispatch(setSettings({item: item.key, value: value ? 'dark' : 'light'}));
            return false;
        }

        if (item.key === 'sideBarStyle') {
            dispatch(setSettings({item: item.key, value: value ? 'circle' : 'square'}));
            return false;
        }

        dispatch(setSettings({item: item.key, value}))
    }

    const renderSwitch = (item, setting) => {
        if (item.key === 'sideBarTheme') {
            return (
                <Switch size={size}
                        onClick={(value) => onSwitch(item, value)}
                        checked={setting[item.key] === 'dark'}
                        checkedChildren="暗黑"
                        unCheckedChildren="高亮"
                />
            );
        }

        if (item.key === 'sideBarStyle') {
            return (
                <Switch size={size}
                        onClick={(value) => onSwitch(item, value)}
                        checked={setting[item.key] === 'circle'}
                        checkedChildren="圆角"
                        unCheckedChildren="直角"
                />
            );
        }

        return (
            <Switch size={size} onClick={(value) => onSwitch(item, value)} checked={setting[item.key]}/>
        )
    }

    return (
        <div className='drawer-content-container'>
            {groupItems.map((group, index) => {
                return group.type === 'divider'
                    ? <Divider key={index}/>
                    : (<List split={split} key={index}>
                        <ListItem><Meta title={group.title}/></ListItem>
                        {(group.items && group.items.length)
                            ? group.items.map((item, idx) => (
                                <ListItem key={idx}>
                                    <Meta title={item.label}/>
                                    {renderSwitch(item, storeSetting)}
                                </ListItem>))
                            : null}
                    </List>);
            })}
        </div>
    )
}

export default DrawerContent;