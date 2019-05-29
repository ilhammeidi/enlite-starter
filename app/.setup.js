import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body></body></html>';
global.dom = new JSDOM(documentHTML);
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;

