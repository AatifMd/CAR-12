const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const AdminSchema = require('./models/adminSchema'); // Adjust path if needed

// Connect to MongoDB
mongoose.connect('mongodb+srv://aatifmd7218:car24@cluster0.gnnej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Create admin function
const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('1234', 10); // Replace with your desired password
  const admin = new AdminSchema({
    name: 'Admin',
    email: 'admin@gmail.com',
    password: hashedPassword,
  });
  await admin.save();
  console.log('Admin created successfully');
  mongoose.connection.close(); // Close the MongoDB connection after creation
};

// Call the function to create the admin
createAdmin();
