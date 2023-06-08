// const { dbConnection } = require("../helpers/mongoConnection")

const getUserModel = async () => {
    // console.log(dbConnection)
    let model = await db_connection.collection('userdata')
    return model
}

module.exports = getUserModel;

