import {message} from "antd";

const useAntDesign = () => {

    const rules = {
        required: (attribute) => {
            return {
                required: true,
                message: `${attribute}不能为空`,
            }
        }
    };

    const antdMessage = (content, type = 'success', duration = 5) => {
        switch (type) {
            case 'success':
                message.success(content, duration);
                break;
            case 'error':
                message.error(content, duration);
                break;
            case 'info':
                message.info(content, duration);
                break;
            case 'warning':
                message.warning(content, duration);
                break;
            default:
                message.loading(content, duration);
        }
    }

    const modalVisible = false;

    return {
        rules,
        antdMessage,
        modalVisible,
    };
}

export default useAntDesign;