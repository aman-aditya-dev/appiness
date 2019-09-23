export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_ACTION':
			return {
				isLoggedIn: action.payload
			};
		default:
			return state;
	}
};
