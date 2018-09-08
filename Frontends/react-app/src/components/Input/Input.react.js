import React from 'react';


const Input = (props) => (
	<div class={props.col}>
		<input type={props.type} placeholder={props.placeholder } name={props.name} onChange={(event) => props.setValue(event.target.value)}  class="form-control" />
	</div>
);

export default Input;