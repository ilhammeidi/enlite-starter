/*
 * Form Messages
 *
 * This contains all the text for the Form page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Form';

export default defineMessages({
  buttonTitle: {
    id: `${scope}.Button.title`,
    defaultMessage: 'Buttons',
  },
  buttonStandardTitle: {
    id: `${scope}.Button.standard.title`,
    defaultMessage: 'Standard Buttons',
  },
  buttonStandardDesc: {
    id: `${scope}.Button.standard.desc`,
    defaultMessage: 'Buttons communicate the action that will occur when the user touches them.',
  },
  buttonFloatingTitle: {
    id: `${scope}.Button.floating.title`,
    defaultMessage: 'Floating Action Buttons',
  },
  buttonFloatingDesc: {
    id: `${scope}.Button.floating.desc`,
    defaultMessage: 'A floating action button represents the primary action in an application. Shaped like a circled icon floating above the UI, it has an ink wash upon focus and lifts upon selection.',
  },
  buttonCustomizedTitle: {
    id: `${scope}.Button.custom.title`,
    defaultMessage: 'Customized Buttons',
  },
  buttonCustomizedDesc: {
    id: `${scope}.Button.custom.desc`,
    defaultMessage: '',
  },
  buttonComplexTitle: {
    id: `${scope}.Button.complex.title`,
    defaultMessage: 'Complex Buttons',
  },
  buttonComplexDesc: {
    id: `${scope}.Button.complex.desc`,
    defaultMessage: 'The Flat Buttons, Raised Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower level component to build custom interactions.',
  },
  toggleTitle: {
    id: `${scope}.ToggleButton.title`,
    defaultMessage: 'Toggle Button'
  },
  toggleButtonTitle: {
    id: `${scope}.ToggleButton.toggleButton.title`,
    defaultMessage: 'Toggle Buttons'
  },
  toggleButtonDesc: {
    id: `${scope}.ToggleButton.toggleButton.desc`,
    defaultMessage: 'Toggle buttons can be used to group related options.'
  },
  dialSimpleTitle: {
    id: `${scope}.DialButton.simple.title`,
    defaultMessage: 'Simple Speed Dial Button'
  },
  dialSimpleDesc: {
    id: `${scope}.DialButton.simple.desc`,
    defaultMessage: 'The floating action button can display related actions.'
  },
  dialCustomTitle: {
    id: `${scope}.DialButton.custom.title`,
    defaultMessage: 'Custom close icon'
  },
  dialCustomDesc: {
    id: `${scope}.DialButton.custom.desc`,
    defaultMessage: 'You can provide an alternate icon for the closed and open states using the icon and openIcon props of the SpeedDialIcon component.'
  },
  dialTooltipsTitle: {
    id: `${scope}.DialButton.tooltips.title`,
    defaultMessage: 'Persistent action tooltips'
  },
  dialTooltipsDesc: {
    id: `${scope}.DialButton.tooltips.desc`,
    defaultMessage: 'The SpeedDialActions tooltips can be be displayed persistently so that users don\'t have to long-press in order to see the tooltip on touch devices.'
  },
  textfiledTitle: {
    id: `${scope}.Textfields.title`,
    defaultMessage: 'Textfields'
  },
  textfiledComponentsTitle: {
    id: `${scope}.Textfields.components.title`,
    defaultMessage: 'Textfield Components'
  },
  textfiledComponentsDesc: {
    id: `${scope}.Textfields.components.desc`,
    defaultMessage: 'Text fields allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.'
  },
  textfiledOutlineTitle: {
    id: `${scope}.Textfields.outline.title`,
    defaultMessage: 'Textfield Outlined Variant'
  },
  textfiledOutlineDesc: {
    id: `${scope}.Textfields.components.desc`,
    defaultMessage: 'TextField supports outlined styling.'
  },
  textfiledFilledTitle: {
    id: `${scope}.Textfields.filled.title`,
    defaultMessage: 'Textfield Filled Variant'
  },
  textfiledFilledDesc: {
    id: `${scope}.Textfields.filled.desc`,
    defaultMessage: 'TextField supports filled styling.'
  },
  textfiledLayoutTitle: {
    id: `${scope}.Textfields.layout.title`,
    defaultMessage: 'Textfield Layout And Design'
  },
  textfiledLayoutDesc: {
    id: `${scope}.Textfields.layout.desc`,
    defaultMessage: ''
  },
  textfiledIconTitle: {
    id: `${scope}.Textfields.icon.title`,
    defaultMessage: 'Input With Additonal Icon'
  },
  textfiledIconDesc: {
    id: `${scope}.Textfields.icon.desc`,
    defaultMessage: 'Input allows the provision of InputAdornment. These can be used to add a prefix, a suffix or an action to an input.'
  },
  textfiledFormatTitle: {
    id: `${scope}.Textfields.format.title`,
    defaultMessage: 'Formatted Inputs'
  },
  textfiledFormatDesc: {
    id: `${scope}.Textfields.format.desc`,
    defaultMessage: 'We demonstrate how you could be using third-party libraries to format your input. In the following demo, we are using react-text-mask and react-number-format libraries.'
  },
  autocompleteTitle: {
    id: `${scope}.Autocomplete.title`,
    defaultMessage: 'Autocomplete'
  },
  hightlightTitle: {
    id: `${scope}.Autocomplete.hightlight.title`,
    defaultMessage: 'Highlight Suggestion'
  },
  hightlightDesc: {
    id: `${scope}.Autocomplete.hightlight.desc`,
    defaultMessage: 'In the following example, we demonstrate how to use react-autosuggest. It\'s also using autosuggest-highlight for the highlighting logic.'
  },
  autoTitle: {
    id: `${scope}.Autocomplete.auto.title`,
    defaultMessage: 'Auto Suggestion'
  },
  autoDesc: {
    id: `${scope}.Autocomplete.auto.desc`,
    defaultMessage: 'The autocomplete is a normal text input enhanced by a panel of suggested options.'
  },
  tagTitle: {
    id: `${scope}.Autocomplete.tag.title`,
    defaultMessage: 'Tag Suggestion'
  },
  tagDesc: {
    id: `${scope}.Autocomplete.tag.desc`,
    defaultMessage: 'In the following example, we demonstrate with tag input and how to use downshift. It mean press Shift + down to show autocomplete'
  },
  selectTitle: {
    id: `${scope}.Autocomplete.select.title`,
    defaultMessage: 'Select Suggestion'
  },
  selectDesc: {
    id: `${scope}.Autocomplete.select.desc`,
    defaultMessage: 'In the following example, we demonstrate how to use react-select.'
  },
  selectTagTitle: {
    id: `${scope}.Autocomplete.selectTag.title`,
    defaultMessage: 'Select Tag Suggestion'
  },
  selectTagDesc: {
    id: `${scope}.Autocomplete.selectTag.desc`,
    defaultMessage: 'In the following example, we demonstrate how to combine tag input and react-select.'
  },
  datePickerTitle: {
    id: `${scope}.DatePicker.title`,
    defaultMessage: 'Date Time-Picker'
  },
  dateTitle: {
    id: `${scope}.DatePicker.date.title`,
    defaultMessage: 'Date Picker'
  },
  dateDesc: {
    id: `${scope}.DatePicker.date.desc`,
    defaultMessage: 'Date pickers use a dialog window to select a single date. The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.'
  },
  timeTitle: {
    id: `${scope}.DatePicker.time.title`,
    defaultMessage: 'Time Picker'
  },
  timeDesc: {
    id: `${scope}.DatePicker.time.desc`,
    defaultMessage: 'Time pickers use a dialog to select a single time (in the hours:minutes format). The selected time is indicated by the filled circle at the end of the clock hand.'
  },
  dateTimeTitle: {
    id: `${scope}.DatePicker.dateTime.title`,
    defaultMessage: 'Date & Time Picker'
  },
  dateTimeDesc: {
    id: `${scope}.DatePicker.dateTime.desc`,
    defaultMessage: 'Its a combination of date & time picker and allows that uses the modal to select both date and time with one control.'
  },
  reduxFormTitle: {
    id: `${scope}.ReduxForm.title`,
    defaultMessage: 'Reduxform'
  },
  formTitle: {
    id: `${scope}.ReduxForm.form.title`,
    defaultMessage: 'Redux Form'
  },
  formDesc: {
    id: `${scope}.ReduxForm.form.desc`,
    defaultMessage: 'This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form.'
  },
  checkRadioTitle: {
    id: `${scope}.Checkbox.title`,
    defaultMessage: 'Checkbox Radio'
  },
  checkBoxTitle: {
    id: `${scope}.Checkbox.check.title`,
    defaultMessage: 'Checkbox'
  },
  checkboxDesc: {
    id: `${scope}.Checkbox.check.desc`,
    defaultMessage: 'Checkboxes allow the user to select multiple options from a set. If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.'
  },
  radioTitle: {
    id: `${scope}.Checkbox.radio.title`,
    defaultMessage: 'Radio Button'
  },
  radioDesc: {
    id: `${scope}.Checkbox.radio.desc`,
    defaultMessage: 'Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side; otherwise, consider a dropdown, which uses less space than displaying all options.'
  },
  switchesTitle: {
    id: `${scope}.Switch.switches.title`,
    defaultMessage: 'Switches'
  },
  switchesDesc: {
    id: `${scope}.Switch.switches.desc`,
    defaultMessage: 'On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.'
  },
  selectboxTitle: {
    id: `${scope}.Select.title`,
    defaultMessage: 'Selectbox'
  },
  selectSimpleTitle: {
    id: `${scope}.Select.simple.title`,
    defaultMessage: 'Simple Selectbox'
  },
  selectSimpleDesc: {
    id: `${scope}.Select.simple.desc`,
    defaultMessage: 'Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.'
  },
  selectVariationTitle: {
    id: `${scope}.Select.variation.title`,
    defaultMessage: 'Select Variaton Style'
  },
  selectVariationDesc: {
    id: `${scope}.Select.variation.desc`,
    defaultMessage: 'Selection with filled and outlined varition.'
  },
  selectNativeTitle: {
    id: `${scope}.Select.native.title`,
    defaultMessage: 'Native Selectbox'
  },
  selectNativeDesc: {
    id: `${scope}.Select.native.desc`,
    defaultMessage: 'As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.'
  },
  selectMultiTitle: {
    id: `${scope}.Select.multi.title`,
    defaultMessage: 'Multiple Selectbox'
  },
  selectMultiDesc: {
    id: `${scope}.Select.multi.desc`,
    defaultMessage: 'The Select component can handle multiple selections. It\'s enabled with the multiple property.'
  },
  selectControllTitle: {
    id: `${scope}.Select.controll.title`,
    defaultMessage: 'Controlled Open Select'
  },
  selectControllDesc: {
    id: `${scope}.Select.controll.desc`,
    defaultMessage: ''
  },
  sliderTitle: {
    id: `${scope}.Slider.title`,
    defaultMessage: 'Slider Range'
  },
  sliderInputTitle: {
    id: `${scope}.Slider.input.title`,
    defaultMessage: 'Slider Input'
  },
  sliderInputDesc: {
    id: `${scope}.Slider.input.desc`,
    defaultMessage: 'Sliders allow users to make selections from a range of values.'
  },
  sliderInputAdvanceTitle: {
    id: `${scope}.Slider.advanced.title`,
    defaultMessage: 'Advance Slider Input'
  },
  sliderInputAdvanceDesc: {
    id: `${scope}.Slider.advanced.desc`,
    defaultMessage: 'This some advanced examples using slider'
  },
  uploadTitle: {
    id: `${scope}.Upload.title`,
    defaultMessage: 'Upload'
  },
  uploadBasicTitle: {
    id: `${scope}.Upload.basic.title`,
    defaultMessage: 'Upload With Drop Zone'
  },
  uploadBasicDesc: {
    id: `${scope}.Upload.basic.desc`,
    defaultMessage: 'Simple HTML5-compliant drag\'n\'drop zone for files built with React Drop Zone. The component containing a file upload (dropzone) area, images and files preview and some snazzy File Allowed/Not Allowed effects.'
  },
  uploadImagesTitle: {
    id: `${scope}.Upload.images.title`,
    defaultMessage: 'Upload Only Images'
  },
  uploadImagesDesc: {
    id: `${scope}.Upload.images.desc`,
    defaultMessage: 'This example allowing users to upload images only'
  },
  uploadButtonTitle: {
    id: `${scope}.Upload.button.title`,
    defaultMessage: 'Upload Button'
  },
  uploadButtonDesc: {
    id: `${scope}.Upload.button.desc`,
    defaultMessage: 'Trigger upload file via button with ref attribute'
  },
  editorTitle: {
    id: `${scope}.Editor.title`,
    defaultMessage: 'Wysiwyg Editor'
  },
  editorBasicTitle: {
    id: `${scope}.Editor.basic.title`,
    defaultMessage: 'Text Editor'
  },
  editorBasicDesc: {
    id: `${scope}.Editor.basic.desc`,
    defaultMessage: 'A Wysiwyg Built on ReactJS and DraftJS. Editor can be simply imported and used as a React Component. Make sure to also include react-draft-wysiwyg.css from node_modules.'
  },
  editorInlineTitle: {
    id: `${scope}.Editor.inline.title`,
    defaultMessage: 'Inline Text Editor'
  },
  editorInlineDesc: {
    id: `${scope}.Editor.inline.desc`,
    defaultMessage: 'In this editor a toolbar shows up once you select part of the text'
  }
});
