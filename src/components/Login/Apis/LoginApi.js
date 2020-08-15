import API from '../../../utils/api';

class LoginApi {

    loginSocialSumbit(type) {
        API.get("/loginSubmit?type=" + type)
            .then(res => {
                return res.data;
            })

    }


};


export default LoginApi;