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

    useEffect(() => {
        setGroupItems(groups);
    }, [groups])

    const dispatch = useAppDispatch();
    const onSwitch = (item, value) => {
        dispatch(setSettings({item: item.key, value}))
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
                                    <Switch size='small' onClick={(value) => onSwitch(item, value)}
                                            checked={storeSetting[item.key]}/>
                                </ListItem>))
                            : <></>}
                    </List>);
            })}
        </div>
    )
}

export default DrawerContent;