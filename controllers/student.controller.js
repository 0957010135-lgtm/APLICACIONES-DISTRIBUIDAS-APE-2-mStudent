const db = require('../db');

exports.getStudent = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM students WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estudiante' });
  }
};
