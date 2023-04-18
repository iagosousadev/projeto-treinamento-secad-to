window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.privacy = window.blockly.js.blockly.privacy || {};
window.blockly.js.blockly.privacy.Cookies = window.blockly.js.blockly.privacy.Cookies || {};

/**
 * @function openPreferences
 *
 * Descreva esta função...
 *
 *
 * @author Root
 * @since 04/08/2022 10:42:20
 *
 */
window.blockly.js.blockly.privacy.Cookies.openPreferencesArgs = [];
window.blockly.js.blockly.privacy.Cookies.openPreferences = async function() {
 var isChecked, value;
  //
  this.cronapi.screen.showModal("modalCookies");
}

/**
 * @function checkCookieMarketing
 *
 * Descreva esta função...
 *
 *
 * @author Root
 * @since 04/08/2022 10:42:20
 *
 */
window.blockly.js.blockly.privacy.Cookies.checkCookieMarketingArgs = [];
window.blockly.js.blockly.privacy.Cookies.checkCookieMarketing = async function() {
 var isChecked, value;
  //
  value = this.cronapi.util.getCookie('cookieMarketing');
  //
  if (this.cronapi.logic.isNullOrEmpty(value)) {
    //
    isChecked = true;
  } else {
    //
    isChecked = this.cronapi.conversion.toBoolean(value);
  }
  return isChecked;
}

/**
 * @function setPreference
 *
 * Cookies
 *
 *
 * @author Root
 * @since 04/08/2022 10:42:20
 *
 */
window.blockly.js.blockly.privacy.Cookies.setPreferenceArgs = [];
window.blockly.js.blockly.privacy.Cookies.setPreference = async function() {
 var isChecked, value;
  //
  this.cronapi.screen.hideModal("modalCookies");
  //
  isCheckedMarketingCookie = this.cronapi.screen.getValueOfField("vars.checkMarketing");
  //
  isCheckedAnalyticsCookie = this.cronapi.screen.getValueOfField("vars.checkAnalytics");
  //
  this.cronapi.util.setCookie('cookieMarketing', isCheckedMarketingCookie, 'days', 365);
  //
  this.cronapi.util.setCookie('cookieAnalytics', isCheckedAnalyticsCookie, 'days', 365);
  //
  this.cronapi.util.setCookie('cookieEssencial', true, 'days', 365);
  //
  this.cronapi.screen.hideComponent("dialogCookies");
}

/**
 * @function checkCookieAnalytics
 *
 * Descreva esta função...
 *
 *
 * @author Root
 * @since 04/08/2022 10:42:20
 *
 */
window.blockly.js.blockly.privacy.Cookies.checkCookieAnalyticsArgs = [];
window.blockly.js.blockly.privacy.Cookies.checkCookieAnalytics = async function() {
 var isChecked, value;
  //
  value = this.cronapi.util.getCookie('cookieAnalytics');
  //
  if (this.cronapi.logic.isNullOrEmpty(value)) {
    //
    isChecked = true;
  } else {
    //
    isChecked = this.cronapi.conversion.toBoolean(value);
  }
  return isChecked;
}

/**
 * @function checkCookieEssencials
 *
 * Descreva esta função...
 *
 *
 * @author Root
 * @since 04/08/2022 10:42:20
 *
 */
window.blockly.js.blockly.privacy.Cookies.checkCookieEssencialsArgs = [];
window.blockly.js.blockly.privacy.Cookies.checkCookieEssencials = async function() {
 var isChecked, value;
  //
  value = this.cronapi.util.getCookie('cookieEssencial');
  //
  if (this.cronapi.logic.isNullOrEmpty(value)) {
    //
    isChecked = true;
  } else {
    //
    isChecked = this.cronapi.conversion.toBoolean(value);
  }
  return isChecked;
}

/**
 * @function checkCookies
 *
 *
 *
 *
 * @author Root
 * @since 29/08/2022 14:21:06
 *
 */
window.blockly.js.blockly.privacy.Cookies.checkCookiesArgs = [];
window.blockly.js.blockly.privacy.Cookies.checkCookies = async function() {
 var haveCookies;
  //
  haveCookies = this.cronapi.util.checkSavedCookies('cookieEssencial');
  //
  if (haveCookies) {
    //
    this.cronapi.screen.hideComponent("dialogCookies");
  }
}
