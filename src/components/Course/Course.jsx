import PropTypes from 'prop-types';
import {BsBook , BsCurrencyDollar} from 'react-icons/bs';

const Course = ({ course, handleSelection }) => {
    const { id, image, description, courseName, price, credit } = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="p-4 space-y-4">
                    <h2 className="text-lg font-bold">{courseName}</h2>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex justify-between font-medium">
                        <p className='flex items-center gap-2 text-lg'><BsCurrencyDollar></BsCurrencyDollar><span className="text-gray-500">Price: {price}</span></p>
                        <p className='flex items-center gap-2 text-lg'><BsBook></BsBook><span className="text-gray-500">Credit: {credit}hr</span></p>
                    </div>
                    <button onClick={() => handleSelection(course)} className="btn bg-sky-500 w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;