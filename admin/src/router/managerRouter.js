import Login from '@/pages/manager/Login.vue';
import Join from '@/pages/manager/Join.vue';
import UserMgt from '@/pages/member/UserMgt.vue';

const managerRouter = [
  { path: '/', name: 'AdminLogin', component: Login, meta: { layout: 'noFrame' }},  
  { path: '/Join', name: 'AdminJoin', component: Join, meta: { layout: 'noFrame' }},
  { path: '/admin/member/UserMgt', name: 'UserMgt', component: UserMgt},  
];

export default managerRouter;
