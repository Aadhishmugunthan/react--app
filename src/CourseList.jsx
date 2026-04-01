import html from './assets/hero.png'
import css from './assets/react.svg'
import js from './assets/vite.svg'
import Course from './Course';

function CourseList() {


    const courses = [
        {
            id: 1,
            name: "HTML FULL COURSE",
            prize: 199,
            image: html,
            rating: 5
        },
        {
            id : 2,
            name: "CSS FULL COURSE",
            prize: 199,
            image: css,
            rating: 5
        },
        {
            id : 3,
            name: "JS FULL COURSE",
            prize: 199,
            image: js,
            rating: 5
        },
        {
            id : 4,
            name: "REACT FULL COURSE",
            prize: 599,
            image: js,
            rating: 5
        }
    ];

    courses.sort((x,y)=> y.prize -x.prize)

    const vfmCourses = courses.filter((course)=>course.price<200)

    const courseList = courses.map((course,index) => (
        <Course 
            key={index}
            name={course.name}
            image={course.image}
            prize={course.prize}
            rating={course.rating}
        />
    ));

    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList;