export async function basicProtectedRoute(req, res, next) {
  try {
    res.send("You've been granted access to a protected route.");
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function roleProtectedRoute(req, res, next) {
  try {
    res.send("If you can see this, you are at least an employee (role = 2)");
  } catch (error) {
    res.sendStatus(500);
  }
}
