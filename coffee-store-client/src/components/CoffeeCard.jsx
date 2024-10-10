import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, test, catagory, details, photoURL } = coffee;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                
                //jodi delete button e click kore 
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const reamining = coffees.filter(cof => cof._id != _id);
                            setCoffees(reamining);
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-gray-300 shadow-xl">
            <figure>
                <img
                    src={photoURL}
                    alt="Movie" />
            </figure>
            <div className="card-body flex justify-between w-full pr-4">
                <div className="text-left">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{test}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item text-left"><FaRegFaceRollingEyes />view </button>
                        {/* <button className="btn join-item"><FaEdit /> edit</button> */}

                         <Link to={`/updateCoffee/${_id}`}>
                         <button className="btn join-item"><FaEdit /> edit</button>
                         </Link>
                         
                        <button

                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500 join-item"><AiOutlineDelete /> delete </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;