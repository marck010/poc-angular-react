import React from 'react';



const Button = (props) => (

<div class={props.col}>
	<input type="button" onClick={() => { click(props.user) }} class="btn btn-primary" value={props.value}></input>
</div>
);

function click(user){
	console.log(user)
}

export default Button