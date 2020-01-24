export const authSingIn = async (authData) => {

    let details = {
        'grant_type': 'password',
        'client_id': APP_AUTH_ID,
        'client_secret': await localStorage.getItem(APP_AUTH_CRED),
        'username': authData.email,
        'password': authData.password
    };

    let loginData = encodingalgo(details);
    loginData = loginData.join("&");
    return async dispatch => {
        dispatch(uiStartLoading());

        let response = await fetch(BASE_URL_IDENTITY + LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: loginData
        });

        let result = await response.json();

        if (result) {
            if (result.error) {
                dispatch(uiStopLoading());
                setTimeout(function () {
                    showAlert("Error !", "Authentication failed check your userID and password", "OK");
                }, 0);
            } else {
                dispatch(await storeToken(result.access_token, details));

                await deviceRegister();
                await goToDashboard();

                setTimeout(function () {
                    dispatch(uiStopLoading())
                }, 0)
            }
        } else {
            dispatch(uiStopLoading());
            showAlert("Error !", "Authentication failed", "OK");
        }
    }
}
