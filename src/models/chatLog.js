import mongoose from 'mongoose';

const chatLogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatLog = mongoose.model('ChatLog', chatLogSchema);

export default ChatLog;
