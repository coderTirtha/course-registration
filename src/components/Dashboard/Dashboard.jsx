import PropTypes from 'prop-types';

const Dashboard = ({ remainingCredit, hours, price, selectedCourse }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 space-y-4">
            <h1 className="text-lg text-sky-600 font-bold">Credit Hour Remaining {remainingCredit} hr</h1>
            <hr />
            <h1 className="text-xl font-bold">Course Name</h1>
            {
                (selectedCourse.length === 0) ? (<p className="text-gray-400">No course selected</p>) : (selectedCourse.map((selected, idx) => <p className="text-gray-400">{idx + 1}. {selected.courseName}</p>))
            }
            <hr />
            <h2 className="text-xl font-semibold text-gray-500">Total Credit Hour: {hours}</h2>
            <hr />
            <h2 className="text-xl font-semibold text-gray-500">Total Price: {price} USD</h2>
        </div>
    );
};

Dashboard.propTypes = {
    remainingCredit: PropTypes.number,
    hours: PropTypes.number,
    price: PropTypes.number,
    selectedCourse: PropTypes.array
}

export default Dashboard;