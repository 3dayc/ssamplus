import SingleCourse from '@/pages/lecture/SingleCourse.vue';
import SingleCourseView from '@/pages/lecture/SingleCourseView.vue';

const lectureRoute = [
  { path: '/lecture/singleCourse', name: 'SingleCourse', component: SingleCourse},    
  { path: '/lecture/singleCourse/:id', name: 'SingleCourseView', component: SingleCourseView},
];

// const lectureRoute = lecture.map(el => {  
//   let obj = {...el, path:'/lecture'+el.path};    
//   return obj;
// });

export default lectureRoute;
