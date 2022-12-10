import {useAppSelector} from "@/app/hooks.js";
import {selectUser} from "@/app/reducers/user/UserReducer.js";

const Permission = ({permission, children}) => {
    const {buttons} = useAppSelector(selectUser);

    const authorized = buttons?.includes(permission);

    return (
        authorized ? children : null
    );
}

export default Permission;

