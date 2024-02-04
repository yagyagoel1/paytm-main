const { default: mongoose } = require("mongoose");
const accountModel = require("./model")


const fetchBalance = async (userId) => {
    const balance = await accountModel.findOne({ userId }).select('balance');
    if (!balance) {
        throw Error("some error occured while fetching the balance");
    }
    return balance;
}

const transferFunds = async (fromAccountId, ToAccountId, amount) => {
    const session = await mongoose.startSession();
    await session.startTransaction();
    try {
        const fromAccount = await accountModel.findOne({ userId: fromAccountId }).session(session);
        if (!fromAccount || fromAccount.balance < amount) {
            throw Error("insufficient balance");
        }
        const ToAccount = await accountModel.findOne({ userId: fromAccountId }).session(session);
        if (!ToAccount) {
            throw Error("invalid account");
        }

        //perform the transaction
        //debitting 
        await accountModel.updateOne({ userId: fromAccountId },
            { $inc: { balance: -amount } }).session(session);
        //icreasing the balance
        await accountModel.updateOne({ userId: ToAccountId },
            { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        await session.endSession();
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;

    }
}


module.exports = { fetchBalance, transferFunds };