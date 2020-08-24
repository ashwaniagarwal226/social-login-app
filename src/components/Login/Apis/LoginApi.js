import API from '../../../utils/Api';

export default class LoginApi {

    constructor() {
        this.loginApi = API.createAPI();
    }
    loginSocialSumbit(type) {
        return this.loginApi.get("/loginSubmit?type=" + type);
    }
};