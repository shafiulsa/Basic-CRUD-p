import Navber from "./Navber";
import Swal from 'sweetalert2'

const AddCoffe = () => {

const handleAddCoffee = event =>{
    event.preventDefault();

    const form= event.target;
    const name=form.name.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const test=form.test.value;
    const catagory=form.catagory.value;
    const details=form.details.value;
    const photoURL=form.photoURL.value;


    const newCoffee = {name,quantity,supplier,test,catagory,details,photoURL};
    console.log(newCoffee);
    
    //client side thaka data server side a pathano 

    fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body:  JSON.stringify(newCoffee)
    })
     .then(res => res.json())
     .then (data => {
        console.log(data);
    

        if (data.insertedId >0) {
            Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        }
     })

}

    return (

        <div>
            <Navber></Navber>
            <h2 className="text-3xl font-extrabold"> Add coffee</h2 >
            <div className="bg-[#F4F3F0] p-24">


                <form onSubmit={handleAddCoffee}>
                    {/* from name and qunatity row */}
                    <div className="md:flex gap-3">
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2 sm:w-full my-2">
                            name:
                            <input type="text" name="name" className="grow text-red-500" placeholder="Enter your coffe name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2">

                            <input type="text" name="quantity" className="grow  text-red-500" placeholder="Available Quantity" />
                        </label>
                    </div>

                    {/* supplier and Test */}
                    <div className="md:flex gap-3 my-3">
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2 sm:w-full my-2">
                             Supplier: 
                            <input type="text" name="supplier" className="grow  text-red-500" placeholder="Enter coffee supplier" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                             Test:
                            <input type="text" name="test" className="grow  text-red-500" placeholder="Enter coffee  test" />
                        </label>
                    </div>
{/* catagory details */}
                    <div className="md:flex gap-3 my-3">
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2 sm:w-full my-2">
                             Catagory: 
                            <input type="text" name="catagory" className="grow  text-red-500" placeholder="Enter coffee catagory" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                             Details:
                            <input type="text" name="details" className="grow text-red-300" placeholder="Enter coffee  details" />
                        </label>
                    </div>


                    {/* for photo url */}
                    <div className="md:flex gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full my-6">
                             Photo Url: 
                            <input type="text" name="photoURL" className="grow" placeholder="Enter coffee catagory" />
                        </label>
          
                    </div>

                  
                    <input type="submit" value='Add coffee' className="btn btn-accent w-full" />
                </form>

            </div>

        </div>

    );
};

export default AddCoffe;