window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.auth = window.blockly.js.blockly.auth || {};
window.blockly.js.blockly.auth.UserControl = window.blockly.js.blockly.auth.UserControl || {};

/**
 * @function signUp
 *
 * Signup
 *
 * @param signupUsername
 * @param signupEmail
 * @param signupPassword
 * @param signupConfirmPassword
 *
 * @author Root
 * @since 24/05/2022 12:09:19
 *
 */
window.blockly.js.blockly.auth.UserControl.signUpArgs = [{ description: 'signupUsername', id: '8df902ea' }, { description: 'signupEmail', id: '0c25d725' }, { description: 'signupPassword', id: '9c203fbf' }, { description: 'signupConfirmPassword', id: '067b073b' }];
window.blockly.js.blockly.auth.UserControl.signUp = async function(signupUsername, signupEmail, signupPassword, signupConfirmPassword) {

    //
    (await this.cronapi.authentication.signup(signupUsername, signupEmail, signupPassword, signupConfirmPassword));
}

/**
 * @function resetPassword
 *
 * Descreva esta função...
 *
 * @param email
 *
 * @author Root
 * @since 24/05/2022 12:09:19
 *
 */
window.blockly.js.blockly.auth.UserControl.resetPasswordArgs = [{ description: 'email', id: '7b9f3909' }];
window.blockly.js.blockly.auth.UserControl.resetPassword = async function(email) {
    var signupUsername, signupEmail, signupPassword;
    //
    this.cronapi.authentication.resetPasswordWithOTP(email);
}

/**
 * @function isValidSignup
 *
 * Descreva esta função...
 *
 * @param signupUsername
 * @param signupEmail
 * @param signupPassword
 * @param signupConfirmPassword
 *
 * @author Root
 * @since 24/05/2022 12:09:19
 *
 */
window.blockly.js.blockly.auth.UserControl.isValidSignupArgs = [{ description: 'signupUsername', id: 'be2325de' }, { description: 'signupEmail', id: 'dc667925' }, { description: 'signupPassword', id: '9a49950f' }, { description: 'signupConfirmPassword', id: 'f6fdc12c' }];
window.blockly.js.blockly.auth.UserControl.isValidSignup = async function(signupUsername, signupEmail, signupPassword, signupConfirmPassword) {

    return this.cronapi.authentication.isValidSignup(signupUsername, signupEmail, signupPassword, signupConfirmPassword);
}
