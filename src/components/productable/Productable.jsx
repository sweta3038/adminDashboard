import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './productable.scss'

export const rows = [
    {
      partNumber: "DRBDM063",
      img: "/assests/dbms.png",
      course: "DBMS",
      professor: "Arwind Arora",
      price: "$40.90",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "51Wy1UhvbZL",
      img: "/assests/ml.jpg",
      course: "Machine Learning",
      professor: "John Stephon",
      price: "$25.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "HJKDM063",
      img: "/assests/ai.jpg",
      course: "Artificial Intelligence",
      professor: "Max Delson",
      price: "$20.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "31CTWTB2",
      img: "/assests/cybersecurity.jpg",
      product: "CYBER SECURITY",
      professor: "Kelvin",
      price: "$20.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "HRDDR3055",
      img: "/assests/backend.png",
      course: "Backend Development",
      professor: "Kandell",
      price: "$160.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "FGH543",
      img: "/assests/frontend.jpg",
      course: "Frontend Development",
      professor: "Jack Smith",
      price: "$18.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
    {
      partNumber: "YABYBX3055",
      img: "/assests/backend.png",
      course: "Full Stack Development",
      professor: "Peter",
      price: "$137.00",
      seats: "available",
      addtoCart: "Buy Now",
    },
  ];

const Productable = () => {
  return (
    <div className='productable'>
      <TableContainer component={Paper} className="tablecontainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Course Number</TableCell>
              <TableCell className="tableCell">Course</TableCell>
              <TableCell className="tableCell">Mentor</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Seats</TableCell>
              <TableCell className="tableCell">Buy Now</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.partNumber}>
                <TableCell className="tableCell">{row.partNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.course}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.professor}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.seats}</TableCell>
                <TableCell className="tableCell">
                  <span> {row.addtoCart}</span>
                </TableCell>
                {/* <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Productable
