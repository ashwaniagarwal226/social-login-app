import API from '../../../utils/Api';

export default class LoginApi {

    constructor() {
        this.loginApi = API.createAPI();
    }
    loginSocialSumbit(type) {
        if(type === "facebook"){
            return this.loginApi.post("/signin/facebook",{scope:"public_profile"});
        }
        
    }
};