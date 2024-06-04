import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();
    console.log("New message saved:", newMessage);

    // Use findByIdAndUpdate with $push to append the new message ID to the messages array
    conversation = await Conversation.findByIdAndUpdate(
      conversation._id,
      { $push: { messages: newMessage._id } },
      { new: true, useFindAndModify: false }
    ).populate("messages");

    console.log("Updated conversation:", conversation);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // Populate with actual message documents

    // console.log(
    //   "Updated conversation: ",
    //   await Conversation.findById(conversation._id).populate("messages")
    // );

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    console.log("Messages fetched:", messages);
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
