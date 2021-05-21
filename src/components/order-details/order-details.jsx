import React from "react";
import PropTypes from 'prop-types';
import image from "../../images/done.png";

function OrderDetails({order}) {
  return (
    <div className={'mb-20'}>
      <p className="text text_type_digits-large mb-8" style={{textShadow: '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)'}}>{order}</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={image} alt={'done'} title={'done'} className={'mb-15'} />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

OrderDetails.propTypes = {
  order: PropTypes.number.isRequired
};

export default OrderDetails;