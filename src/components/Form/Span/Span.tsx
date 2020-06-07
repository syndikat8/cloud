import React from 'react';

type OnPropsType = {
  spanNumber: number
}

const Span = (props: OnPropsType) => {

  return <span>{props.spanNumber}</span>

}
export default Span;