window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.UserControl = window.blockly.js.blockly.UserControl || {};

/**
 * @function resetPassword
 *
 * Descreva esta função...
 *
 * @param email
 *
 * @author Root
 * @since 24/05/2022 12:52:02
 *
 */
window.blockly.js.blockly.UserControl.resetPasswordArgs = [{ description: 'email', id: '7afdf898' }];
window.blockly.js.blockly.UserControl.resetPassword = async function(email) {

    //
    this.cronapi.authentication.resetPassword(email);
}

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
 * @since 24/05/2022 12:52:02
 *
 */
window.blockly.js.blockly.UserControl.signUpArgs = [{ description: 'signupUsername', id: 'ec5dbe32' }, { description: 'signupEmail', id: '62cce53e' }, { description: 'signupPassword', id: 'd42229ad' }, { description: 'signupConfirmPassword', id: 'a49023f3' }];
window.blockly.js.blockly.UserControl.signUp = async function(signupUsername, signupEmail, signupPassword, signupConfirmPassword) {

    //
    (await this.cronapi.authentication.signup(signupUsername, signupEmail, signupPassword, signupConfirmPassword));
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
 * @since 24/05/2022 12:52:02
 *
 */
window.blockly.js.blockly.UserControl.isValidSignupArgs = [{ description: 'signupUsername', id: 'abf7b641' }, { description: 'signupEmail', id: '38708282' }, { description: 'signupPassword', id: 'daf1486e' }, { description: 'signupConfirmPassword', id: '3f9f5d23' }];
window.blockly.js.blockly.UserControl.isValidSignup = async function(signupUsername, signupEmail, signupPassword, signupConfirmPassword) {

    return this.cronapi.authentication.isValidSignup(signupUsername, signupEmail, signupPassword, signupConfirmPassword);
}
