import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <div dir='rtl' className=" min-h-[470px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">المحتوى الأساسي:</h4>
          <div className="flex flex-wrap gap-1">
            {course.content.slice(0, 3).map((item, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {item}
              </span>
            ))}
            {course.content.length > 3 && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                +{course.content.length - 3} أكثر
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span dir='ltr' className=" text-blue-500 text-lg font-bold underline"> {course.price} <span className='text-gray-500'>LE</span></span>
          <Link 
            to={`/course/${course.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;