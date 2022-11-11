import React from "react";

const AddService = () => {
  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const description = form.description.value;
    const price = form.price.value;

    const review = {
      title: title,
      price: price,
      img: img,
      description: description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          <div className="toast">
            <div className="alert alert-info">
              <div>
                <span>Service added successfully</span>
              </div>
            </div>
          </div>;
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        Please Add a new Service
      </h2>
      <form onSubmit={handleService} className="my-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="title"
            type="text"
            placeholder="Service Name"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            name="img"
            placeholder="PhotoURL"
            className="input input-bordered input-primary w-full mb-4"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto">
          {" "}
          <textarea
            name="description"
            className="textarea textarea-primary w-full"
            placeholder="Description"
          ></textarea>
          <div className="flex justify-center my-4">
            <input
              className=" btn btn-primary"
              type="submit"
              value="Add Service"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
