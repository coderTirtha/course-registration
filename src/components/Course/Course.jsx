import PropTypes from 'prop-types';
import { BsBook, BsCurrencyDollar } from 'react-icons/bs';

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
                    <button onClick={() => handleSelection(course)} className="btn text-white hover:text-black bg-sky-500 w-full">Select</button>
                    <dialog id="selection-modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-error text-white">
                            <p className="py-4">You have already selected this course</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="credit-modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-error text-white">
                            <p className="py-4">You can't select more than 20 credit hours once!</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;