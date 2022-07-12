import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver, localize } from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.json';
import * as rules from 'vee-validate/dist/rules';

for (let rule in rules) {  
  extend(rule, rules[rule]);
}

localize({ ko });
localize('ko');
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
