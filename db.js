const Sequelize = require('sequelize')

const db = new Sequelize('ngrwssb', 'usr', 'pasw', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: './webass1.db'
})

const Student = db.define('student', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Teacher = db.define('teacher', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Course = db.define('course', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Batch = db.define('batch', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

const Lecture = db.define('lecture', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

const Subject = db.define('subject', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

//Subject.hasMany(Teacher)
Teacher.belongsTo(Subject)

Subject.belongsTo(Course)
Batch.belongsTo(Course)

Lecture.belongsTo(Batch)
Lecture.belongsTo(Teacher)

Student.belongsToMany(Batch, { through: 'StudentBatch' })
Batch.belongsToMany(Student, { through: 'StudentBatch' })


db.sync().then(() => console.log("Database has been updated"))
    .catch((err) => console.error("Error updating database"))

exports = module.exports = {
    Student, Teacher, Batch, Course, Lecture, Subject, db
}