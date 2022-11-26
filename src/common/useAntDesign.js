import {message} from "antd";

/**
 * hooks组件
 * @returns {{rules: {required: (function(*): {message: string, required: boolean})}}}
 */
const useAntDesign = () => {

    const rules = {
        required: (attribute) => {
            return {
                required: true,
                message: `${attribute}不能为空`,
            }
        }
    };

    const antdMessage = async ({content, type = 'success', duration = 2 * 1000}) => {
        switch (type) {
            case 'success':
                await message.success(content, duration);
                break;
            case 'error':
                await message.error(content, duration);
                break;
            case 'info':
                await message.info(content, duration);
                break;
            case 'warning':
                await message.warning(content, duration);
                break;
            default:
                await message.loading(content, duration);
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