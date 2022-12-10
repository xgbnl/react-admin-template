import {message, Modal} from "antd";

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

    /**
     * ant 弹窗
     * @param content
     * @param callback
     */
    const antdModal = (content, callback) => {
        Modal.warning({
            title: '此操作不可控，可能造成数据永久被删除！您确定要删除: [ ' + content + ' ]?',
            onOk: callback,
        })
    }

    const modalVisible = false;

    const tablePaginate = false;

    return {
        rules,
        antdMessage,
        modalVisible,
        tablePaginate,
        antdModal,
    };
}

export default useAntDesign;