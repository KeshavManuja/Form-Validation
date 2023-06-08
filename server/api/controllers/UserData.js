const { ObjectId } = require('mongodb');
const getUserModel = require('../models/userModel')

const UserData = {
    post: async function (req, res) {
        const jsonResponse = {
            data: {},
            success: false,
            message: "Something went wrong"

        }
        try {
            const payload = req.body;
            const UserModel = await getUserModel();
            let insertedId = await UserModel.insertOne(payload)
            jsonResponse.data.success = true,
            jsonResponse.data.message = "Success";
            jsonResponse.data.data = {
                _id: insertedId
            }
            return res.status(201).json(jsonResponse.data)

        } catch (error) {
            console.error(error)
            return res.status(501).json(jsonResponse.data)
        }

    },
    get: async function (req, res) {
        const jsonResponse = {
            success: false,
            message: "Something went wrong"
        }
        try {
            const user_id = req.params?.user_id;
            const UserModel = await getUserModel();
            const data = await UserModel.findOne({_id:new ObjectId(user_id)});
            jsonResponse.success = true,
            jsonResponse.message  = "Success"
            jsonResponse.data = data;
            return res.status(200).json(jsonResponse)
        } catch (error) {
            console.log({error});
            return res.status(501).json(jsonResponse)
        }
    }
}

module.exports  = UserData