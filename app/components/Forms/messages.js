/*
 * User Form Messages
 *
 * This contains all the text for the Form components.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Forms';

export default defineMessages({
  createNewAccount: {
    id: `${scope}.Login.create`,
    defaultMessage: 'Create new account',
  },
  login: {
    id: `${scope}.Login.signin`,
    defaultMessage: 'Sign in',
  },
  loginOr: {
    id: `${scope}.Login.or`,
    defaultMessage: 'Or sign in with',
  },
  registerOr: {
    id: `${scope}.Register.or`,
    defaultMessage: 'Or register with',
  },
  loginFieldName: {
    id: `${scope}.Register.field.name`,
    defaultMessage: 'Username',
  },
  loginFieldEmail: {
    id: `${scope}.Login.field.email`,
    defaultMessage: 'Your Email',
  },
  loginFieldPassword: {
    id: `${scope}.Login.field.password`,
    defaultMessage: 'Your Password',
  },
  loginFieldRetypePassword: {
    id: `${scope}.Register.field.retypePassword`,
    defaultMessage: 'Re-type Password',
  },
  loginForgotPassword: {
    id: `${scope}.Login.field.forgot`,
    defaultMessage: 'Forgot Password',
  },
  loginRemember: {
    id: `${scope}.Login.field.remember`,
    defaultMessage: 'Remember',
  },
  loginButtonContinue: {
    id: `${scope}.Login.button.continue`,
    defaultMessage: 'Continue',
  },
  toAccount: {
    id: `${scope}.Register.create`,
    defaultMessage: 'Already have account ?',
  },
  register: {
    id: `${scope}.Register.signup`,
    defaultMessage: 'Register',
  },
  tabEmail: {
    id: `${scope}.Register.tab.email`,
    defaultMessage: 'With Email',
  },
  tabSocial: {
    id: `${scope}.Register.tab.social`,
    defaultMessage: 'With Social Media',
  },
  aggree: {
    id: `${scope}.Register.agree`,
    defaultMessage: 'Agree with',
  },
  terms: {
    id: `${scope}.Register.terms`,
    defaultMessage: 'Terms & Condition',
  },
  resetTitle: {
    id: `${scope}.Reset.title`,
    defaultMessage: 'Reset Password',
  },
  resetSubtitle: {
    id: `${scope}.Reset.subtitle`,
    defaultMessage: 'Send reset password link to Your email',
  },
  resetButton: {
    id: `${scope}.Reset.button`,
    defaultMessage: 'Send Reset Link',
  },
  lockHint: {
    id: `${scope}.Lock.hint`,
    defaultMessage: 'Hint: Type anything to unlock!',
  },
  requiredForm: {
    id: `${scope}.Required.text`,
    defaultMessage: 'Required',
  },
  shipping_address: {
    id: `${scope}.Checkout.shipping_address`,
    defaultMessage: 'Shipping address',
  },
  order_summary: {
    id: `${scope}.Checkout.order_summary`,
    defaultMessage: 'Order Summary',
  },
  quantity: {
    id: `${scope}.Checkout.quantity`,
    defaultMessage: 'Quantity',
  },
  total: {
    id: `${scope}.Checkout.total`,
    defaultMessage: 'Total',
  },
  first_name: {
    id: `${scope}.Checkout.first_name`,
    defaultMessage: 'First Name',
  },
  last_name: {
    id: `${scope}.Checkout.last_name`,
    defaultMessage: 'Last Name',
  },
  address1: {
    id: `${scope}.Checkout.address1`,
    defaultMessage: 'Address line 1',
  },
  address2: {
    id: `${scope}.Checkout.address2`,
    defaultMessage: 'Address line 2',
  },
  city: {
    id: `${scope}.Checkout.city`,
    defaultMessage: 'City',
  },
  state: {
    id: `${scope}.Checkout.state`,
    defaultMessage: 'State/Province/Region',
  },
  zip: {
    id: `${scope}.Checkout.zip`,
    defaultMessage: 'Zip / Postal code',
  },
  country: {
    id: `${scope}.Checkout.country`,
    defaultMessage: 'Country',
  },
  check_address: {
    id: `${scope}.Checkout.check_address`,
    defaultMessage: 'Use this address for payment details',
  },
  last_three: {
    id: `${scope}.Checkout.last_three`,
    defaultMessage: 'Last three digits on signature strip',
  },
  check_credit: {
    id: `${scope}.Checkout.check_credit`,
    defaultMessage: 'Remember credit card details for next time',
  },
  shipping: {
    id: `${scope}.Checkout.shipping`,
    defaultMessage: 'Shipping',
  },
  payment_detail: {
    id: `${scope}.Checkout.payment_detail`,
    defaultMessage: 'Payment details',
  }
});
