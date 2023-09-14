const Dashboard = ({ hours, price, selectedCourse }) => {
    let count = 0;
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 space-y-4">
            <h1 className="text-xl text-sky-600 font-bold">Credit Hour Remaining 20 hr</h1>
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

export default Dashboard;