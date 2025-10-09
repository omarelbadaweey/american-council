import React from 'react'
import CourseCard from '../components/CourseCard'
import coursesData from '../data.json'
import Hero from '../components/Hero'

const Home = () => {
  const { courses } = coursesData

  return (
    <div className="min-h-screen">
      <Hero/>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">برامجنا التدريبية</h2>
          <p className="text-lg text-gray-600 text-center mb-12">اختر البرنامج المناسب لمستقبلك المهني</p>
          
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div className='animation'> <CourseCard key={course.id} course={course} /></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;