import React from 'react';

const Error = ({ message }) => {
	let errorMessage = message || 'Error';

	return <div style={{ backgrondColor: 'red', color: 'white', padding: '10px', margin: '10px' }}>{errorMessage}</div>;
};

export default Error;
