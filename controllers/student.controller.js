const Student = require('../models/student.model');
const fs = require('fs');
const db = require('../database.js');
//khai báo thư viện mã hóa
const bcrypt = require('bcrypt');

class StudentController {
    //hàm lấy tất cả students
    get(req, res) {
        db.connectDB().then((connection) => {
            connection.query(
                `SELECT * FROM students`,
                function (err,data,fields) {
                    //console.log('data',data);
                    db.closeDB(connection);
                    return res.status(200).json(data);
                }
            );
        })
        .catch((err) => {
            //console.log('Db note connected successfully',err);
            return res.status(200).json({result: 'Không thể kết nối database'});
        });
    }
    //hàm lấy 1 student
    getStudent(req, res) {
        const id= req.query.id;
        db.connectDB().then((connection) => {
            connection.query(
                `SELECT * FROM students WHERE id=${id}`,
                function (err,data,fields) {
                    // console.log('data',data);
                    db.closeDB(connection);
                    return res.status(200).json(data);
                }
            );
        })
        .catch((err) => {
            //console.log('Db note connected successfully',err);
            return res.status(200).json({result: 'Không thể kết nối database'});
        });
    }

    modifyStudent(req, res) {
        const id= req.query.id;
        const newId = req.body.id;
        const code= req.body.code;
        const age = req.body.age;
        const gender = req.body.gender;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const dob = req.body.dob;
        const email = req.body.email;
        const phone = req.body.phone;
        const picture = req.body.picture;
        db.connectDB().then((connection) => {
            connection.query(
                `UPDATE students
            SET  id = ? ,code = ?, age = ?, gender = ?, firstName = ?, lastName = ?, dob = ?, email = ?, phone = ?, picture = ?
            WHERE id = ?;`,
            [newId,code, age, gender, firstName, lastName, dob, email, phone, picture, id],
                function (err,data,fields) {
                    console.log('data',data);
                    db.closeDB(connection);
                    return res.status(200).json(data);
                }
            );
        })
        .catch((err) => {
            console.log('Db not connected successfully',err);
            return res.status(200).json({result: 'Không thể kết nối database'});
        });
    }

    deleteStudent(req,res) {
        const id=req.query.id;
        console.log(id);
        db.connectDB().then((connection) => {
            connection.query(
                `DELETE FROM students WHERE id=${id}`,
                function (err,data,fields) {
                    db.closeDB(connection);
                    return res.status(200).json('Xóa thành công');
                }
            );
        })
        .catch((err) => {
            //console.log('Db note connected successfully',err);
            return res.status(200).json({result: 'Không thể kết nối database'});
        });
    }

    addStudent(req,res) {
        const code= req.body.code;
        const id = req.body.id;
        const age = req.body.age;
        const gender = req.body.gender;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const dob = req.body.dob;
        const email = req.body.email;
        const phone = req.body.phone;
        const picture = req.body.picture;
        db.connectDB().then((connection) => {
            connection.query(
                `INSERT INTO students (id, code, age, gender,firstName,lastName,dob,email,phone,picture)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [id, code, age, gender, firstName, lastName, dob, email, phone, picture],
                function (err,data,fields) {
                    db.closeDB(connection);
                    return res.status(200).json('Thêm thành công');
                }
            );
        })
        .catch((err) => {
            console.log('Db note connected successfully',err);
            return res.status(200).json({result: 'Không thể kết nối database'});
        });
    }
}
module.exports = new StudentController();