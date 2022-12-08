import {Switch, Divider, List} from "antd";
import groups from "./groups.js";
import {useEffect, useState} from "react";

const ListItem = List.Item;
const Meta = List.Item.Meta;

const DrawerContent = () => {
    const [groupItems, setGroupItems] = useState(groups);
    const [split] = useState(false);

    useEffect(() => {
        setGroupItems(groups);
    }, [groups])

    const factory = (groups) => {
        return groups.map((group, index) => {
            return group.type === 'divider'
                ? <Divider key={index}/>
                : (
                    <List split={split} key={index}>
                        <ListItem><Meta title={group.title}/></ListItem>
                        {
                            (group.items && group.items.length)
                                ? group.items.map((item, idx) => (
                                    <ListItem key={idx}>
                                        <Meta title={item.label}/>
                                        <Switch size='small'/>
                                    </ListItem>)
                                )
                                : <></>
                        }
                    </List>
                );
        });
    }

    return (
        <div className='drawer-content-container'>
            {factory(groupItems)}
        </div>
    )
}

export default DrawerContent;