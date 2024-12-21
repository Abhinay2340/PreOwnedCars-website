import NavBar from "./NavBar";

export default function Photos() {
  const bikeName = [
    {
      bikeName: "Yamaha R15 V4",
      year: "2024",
      price:"3 Lakhs",
      description:"Yamaha R15 V4, 2024 model, Price 3Lakhs Only",
      url: "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/AKO2JU4_7ylletgh_1_49179762.jpg?q=80",
    },

    {
      bikeName: "Honda Civic",
      year: "2019",
      description:"Honda Civic, year: 2019, price: 17Lakhs Only,",
      url: "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/KHTGPA9_v3kfihcd_1_41045298.jpg?q=80",
    },
    {
      bikeName: "MG Hector Plus",
      year: "2021",
      description:"MG Hector Plus, year: 2021, price: 20Lakhs Only ",
      url: "https://fastly-production.24c.in/hello-ar/dev/uploads/673d9bdf02d852a575633505/e66c8cd6-7af6-4ad9-9a00-1225999f40e0/slot/10474220797-8990260859cb46f4902ec4bcbd77cd5b-Exterior-7.jpg?w=700&h=403&auto=format",
    },
    {
      bikeName: "Skoda Slavia",
      year: "2020",
      description:"Skoda Slavia, year: 2020, price: 20000",
      url: "https://fastly-production.24c.in/hello-ar/dev/uploads/66d8132de6e4c0e1e54506bd/e37aa1ad-8e1d-47af-af60-3f855dc45c0b/slot/1043303874-6e02dc64e8d043b4bf794a4495e3957b-Exterior-7.jpg?w=700&h=403&auto=format",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {bikeName.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.bikeName}</h5>
                <p className="card-text">{place.year}</p>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}