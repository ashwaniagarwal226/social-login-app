import API from '../../../utils/api';

class LoginApi {

    loginSocialSumbit(type) {
        return API.get("/loginSubmit?type=" + type)
    }
};


export default LoginApi;