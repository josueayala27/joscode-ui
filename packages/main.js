import './main.css';
import JosTable from './components/Table.vue';
import JosBadge from './components/Badge.vue';

export { JosTable, JosBadge };

const install = (Vue) => {
  Vue.component('JosTable', JosTable);
  Vue.component('JosBadge', JosBadge);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
