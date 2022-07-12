import Login from '@/pages/manager/Login.vue';
import UserMgt from '@/pages/member/UserMgt.vue';

const adminRoutes = [
  { path: '/', name: 'AdminLogin', component: Login, meta: { layout: 'noFrame' }},  
  { path: '/admin/member/UserMgt', name: 'UserMgt', component: UserMgt},  
];

export default adminRoutes;
