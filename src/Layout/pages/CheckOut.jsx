import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const CheckOut = () => {
  const service = useLoaderData()
  const { title, _id,price } = service
  const {user}=useContext(AuthContext)

  const handleBookService=e=>{
   e.preventDefault()

   const form=e.target;
   const name=form.name.value
   const date=form.date.value
   const email=user?.email

   const order={
    customerName:name,
    email,
    date,
    service:_id,
    price:price
   }
   console.log(order)
  }
  return (
    <div>
      <h2>book:{title}</h2>


      <form onSubmit={handleBookService} >
        <h2 className="text-center text-3xl">BOOK service {title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' defaultValue={user?.displayName} placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name='date' placeholder="date" className="input input-bordered" required />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  defaultValue={user?.email }placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">DUE amount</span>
            </label>
            <input type="text" defaultValue={'$'+price} className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>


  );
};

export default CheckOut;