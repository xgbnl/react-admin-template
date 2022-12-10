import * as Icons from '@ant-design/icons';

const Icon = () => {

  const iconElem =  Object.entries(Icons).map((Icon,index) => <Icon key={index} /> )

    return (
        iconElem
    );

}

export default Icon;