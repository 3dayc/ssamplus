const Layout = () => import('@/layouts/DefaultLectureLayout');

const LectureRoute = [
  {
    path: '/lecture',
    redirect: '/lecture/index',     
    name: 'Lecture', 
    exact: true,
    component: Layout,      
    children: [
      {path: '/lecture/index', name: 'LectureIndex', component: () => import('@/pages/lecture/Index.vue')},      
      {path: 'index/mjedu', name: 'LectureIndexMjedu', component: () => import('@/pages/lecture/IndexMjedu.vue')},      
      {path: 'index/mjchild', name: 'LectureIndexMjchild', component: () => import('@/pages/lecture/IndexMjchild.vue')},            
    ]
  },
 
];

export default LectureRoute;