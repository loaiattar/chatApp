import ChatLog from '../models/chatLog.js';

export const handleWebSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('A new client connected with ID:', socket.id);

    // Send a test message to verify connection
    socket.emit('chat message', { 
      username: 'System', 
      message: 'Welcome to the chat! You are now connected.' 
    });

    // Listen for 'chat message' event from a client
    socket.on('chat message', async (msg) => {
      try {
        console.log('Message received from client:', msg);

        // Basic validation
        if (!msg || !msg.username || !msg.message) {
          console.error('Invalid message format received');
          return;
        }

        // Save the message to MongoDB
        try {
          const log = new ChatLog({
            username: msg.username,
            message: msg.message,
          });
          await log.save();
          console.log('Message saved to database');
        } catch (dbErr) {
          console.error('Error saving to database:', dbErr);
          // Continue with broadcast even if DB save fails
        }

        // Emit the message to all connected clients
        console.log('Broadcasting message to all clients');
        io.emit('chat message', msg);

      } catch (err) {
        console.error('Error processing message:', err);
      }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });

    // Handle any WebSocket errors
    socket.on('error', (err) => {
      console.error('Socket.IO error for client', socket.id, ':', err);
    });
  });
};