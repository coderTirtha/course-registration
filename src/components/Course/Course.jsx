const Course = ({ course }) => {
    const { id, image, description, courseName, price, credit } = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="p-4 space-y-4">
                    <h2 className="text-xl font-bold">{courseName}</h2>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex justify-between font-medium px-8">
                        <p>$ <span className="text-gray-500">Price: {price}</span></p>
                        <p><span className="text-gray-500">Credit: {credit}hr</span></p>
                    </div>
                    <button className="btn bg-sky-500 w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Course;