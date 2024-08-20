/**
 * @swagger
 * /apiregister:
 *   post:
 *     summary: Crea un nuevo registro de historial médico
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users_id:
 *                 type: integer
 *                 example: 1
 *               consultation_date:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-08-18T10:00:00Z
 *               blood_type:
 *                 type: string
 *                 example: O+
 *               known_diseases:
 *                 type: string
 *                 example: Diabetes, Hypertension
 *               allergies:
 *                 type: string
 *                 example: Penicillin, Peanuts
 *               treatment:
 *                 type: string
 *                 example: Insulin therapy
 *     responses:
 *       201:
 *         description: Registro de historial médico creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Medical history record successfully created
 *       400:
 *         description: Error en los datos de entrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: User ID and consultation date are required
 *       404:
 *         description: No se pudo crear el registro de historial médico
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Medical history record could not be created
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error message
 */