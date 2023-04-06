import React from "react";

// import listings from users

const Gallary = () => {
  const listings = [
    { id: 0, username: "user0", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 1, username: "user1", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 2, username: "user2", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 3, username: "user3", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 4, username: "user4", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 5, username: "user5", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 6, username: "user6", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 7, username: "user7", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 8, username: "user8", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
    { id: 9, username: "user9", imgURL: "http://via.placeholder.com/640x360", title: "title", description: "description for my art piece", price: "$1,000,000.00", quantity: "1" },
  ];

  const styles = {
    img: {
      width: "700px",
      height: "500px",
      //   border: "1px solid black",
    },
  };

  const itemCard = (id) => {
    return (
      <div className="card d-flex flex-column" key={listings[id].id}>
        {/* <div className="card-header">
          <h3>{listings[id].title}</h3>
        </div> */}
        <div className="card-body d-flex flex-column align-center">
          <img src={listings[id].imgURL} alt={listings[id].title} style={styles.img} />
          <div className="flex-row">
            <p>Title:</p>
            <p>{listings[id].title}</p>
          </div>
          <div className="flex-row">
            <p>Artist:</p>
            <p>{listings[id].username}</p>
          </div>
          <div className="flex-row">
            <p>Description:</p>
            <p>{listings[id].description}</p>
          </div>
          <div className="flex-row">
            <p>Price:</p>
            <p>{listings[id].price}</p>
          </div>
          <div className="flex-row">
            <p>Quantity:</p>
            <p>{listings[id].quantity}</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };

  const createGallary = () => {
    return (
      <div className="flex-column align-center">
        <h3>Gallary</h3>
        <div className="card flex-row justify-space-between">
          {listings.map((listing) => {
            return <img src={listing.imgURL} style={{ margin: "5px", width: "350px", height: "200px" }}></img>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* {itemCard(0)} */}
      {/* {createGallary()} */}
    </div>
  );
};

export default Gallary;
