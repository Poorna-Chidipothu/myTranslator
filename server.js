const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const port = process.env.PORT || 3030;


app.use(express.static(path.join(__dirname, 'public')));

// Initialize Firebase Admin SDK with the service account key
const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());

// Signup 
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if the user already exists (based on email)
    const snapshot = await db.collection('userCredentials').where('email', '==', email).get();

    if (!snapshot.empty) {
      return res.json({ success: false, message: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUserRef = await db.collection('userCredentials').add({
      name: name,
      email: email,
      password: hashedPassword,
    });

    return res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

// Login 
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Finding the user by email
    const snapshot = await db.collection('userCredentials').where('email', '==', email).limit(1).get();

    if (snapshot.empty) {
      alert("User Not Found.....");
      return res.json({ success: false, message: 'User not found' });
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (passwordMatch) {
      return res.json({ success: true, message: 'Login successful', userData });
    } else {
      return res.json({ success: false, message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Error checking user:', error);
    return res.status(500).json({ success: false, message: 'Error checking user' });
  }
});

// Logout 
app.get('/logout', (req, res) => {
  res.json({ success: true, message: 'Logout successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
