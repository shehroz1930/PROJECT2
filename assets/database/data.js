// data.js - Frontend-only storage using localStorage

// Load users from localStorage or set default
let users = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, name: "Ali Khan", email: "ali@example.com", password: "123456" }
];

// Save users back to localStorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Add new user
function addUser(name, email, password) {
  // Check if email already exists
  if (users.some(user => user.email === email)) {
    return { success: false, message: "Email already exists" };
  }
  const id = users.length + 1;
  const newUser = { id, name, email, password };
  users.push(newUser);
  saveUsers();
  return { success: true, user: newUser };
}

// Authenticate user
function authenticateUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  }
  return { success: false, message: "Invalid email or password" };
}

// Export functions (for ES6 modules)
export { users, addUser, authenticateUser };
