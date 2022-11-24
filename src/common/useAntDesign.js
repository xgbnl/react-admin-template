
const useAntDesign = () => {

    const rules = {
        required: (attribute) => {
            return {
                required: true,
                message: `${attribute}不能为空`,
            }
        }
    };

    return {
        rules,
    };
}

export {useAntDesign}