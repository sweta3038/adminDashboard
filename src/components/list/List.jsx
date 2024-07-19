import React from 'react'
import './list.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
    {
      id: 2117383933399,
      course: "Artificial Intelligence",
      img: "/assests/ai.jpg",
      student: "Lee Martin",
      date: "27th September",
      amount: 300,
      duration:"4 months",
      status: "Approved",
    },
    {
      id: 6617772543119,
      course: "Backend Development",
      img: "/assests/backend.png",
      student: "Sebastian Walker",
      date: "5th February",
      amount: 250,
      duration:"3 months",
      status: "Pending",
    },
    {
      id: 200116351133,
      course: "Frontend Development",
      img: "/assests/frontend.jpg",
      student: "Lopez Williams",
      date: "1st June",
      amount: 200,
      duration:"3 months",
      status: "Approved",
    },
    {
      id: 22567721541,
      course: "Cyber Security",
      img: "/assests/cybersecurity.jpg",
      student: "Alexander White",
      date: "21st August",
      amount: 450,
      duration:"2 months",
      status: "Pending",
    },
    {
      id: 2117383933399,
      course: "Robotics",
      img: "/assests/robotics.jpeg",
      student: "Garcia Davis",
      date: "16th February",
      amount: 570,
      duration:"4 months",
      status: "Approved",
    },
    {
      id: 4520015619,
      course: "Machine Learning",
      img: "/assests/ml.jpg",
      student: "Camila Michael",
      date: "20th March",
      amount: 500,
      duration:"4 months",
      status: "Approved",
    },
    {
      id: 25566001527,
      course: "System Design",
      img: "/assests/system design.png",
      student: "Madison Anthony",
      date: "3rd October",
      amount: 200,
      duration:"2 months",
      status: "Pending",
    },
    {
      id: 2117383933399,
      course: "DBMS",
      img: "/assests/dbms.png",
      student: "Natalie King",
      date: "29th December",
      amount: 250,
      duration:"2 months",
      status: "Approved",
    },
    {
      id: 2117383933399,
      course: "Artificial Intelligence with Machine Learning",
      img: "/assests/AI_ML.jpg",
      student: "Miller Brooks",
      date: "27th September",
      amount: 500,
      duration:"5 months",
      status: "Approved",
    },
    {
      id: 6117383933399,
      course: "Full Stack Development",
      img: "/assests/backend.png",
      student: "Lee Martin",
      date: "27th September",
      amount: 350,
      duration:"5 months",
      status: "Approved",
    },
    {
      id: 8617772543119,
      course: "DBMS",
      img: "/assests/dbms.png",
      student: "Sebastian Walker",
      date: "5th February",
      amount: 250,
      duration:"2 months",
      status: "Pending",
    },
    {
      id: 200116351133,
      course: "System Design",
      img: "/assests/system design.png",
      student: "Lopez Williams",
      date: "1st June",
      amount: 200,
      duration:"2 months",
      status: "Approved",
    },
    {
      id: 28567721541,
      course: "Machine Learning",
      img: "/assests/ml.jpg",
      student: "Alexander White",
      date: "21st August",
      amount: 500,
      duration:"4 months",
      status: "Pending",
    },
    {
      id: 2517383933399,
      course: "Frontend Development",
      img: "/assests/frontend.jpg",
      student: "Garcia Davis",
      date: "16th February",
      amount: 200,
      duration:"3 months",
      status: "Approved",
    },
    {
      id: 48820015619,
      course: "Cyber Security",
      img: "/assests/cybersecurity.jpg",
      student: "Camila Michael",
      date: "20th March",
      amount: 450,
      duration:"2 months",
      status: "Approved",
    },
    {
      id: 2557766001527,
      course: "Robotics",
      img: "/assests/robotics.jpeg",
      student: "Madison Anthony",
      date: "3rd October",
      amount: 570,
      duration:"4 months",
      status: "Pending",
    },
    {
      id: 21047383933399,
      course: "Full Stack Development",
      img: "/assests/backend.png",
      student: "Natalie King",
      date: "29th December",
      amount: 350,
      duration:"5 months",
      status: "Approved",
    },
    {
      id: 21987383933399,
      course: "Artificial Intelligence",
      img: "/assests/ai.jpg",
      student: "Miller Brooks",
      date: "27th September",
      amount: 300,
      duration:"4 months",
      status: "Approved",
    },
  ];
const List = () => {
  return (
    <div className='list'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Course ID</TableCell>
              <TableCell className="tableCell">Courses</TableCell>
              <TableCell className="tableCell">Student</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Course Duration</TableCell> 
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.course}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.student}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                 <TableCell className="tableCell">{row.duration}</TableCell> 
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default List
