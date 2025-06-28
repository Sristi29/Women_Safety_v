/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */

router.get("/users", (req, res) => {
  res.send("All users");
});
