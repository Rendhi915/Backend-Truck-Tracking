const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const { validateSensorData } = require('../middleware/validation');

// POST /api/sensors/tpdata - Tire pressure data ingestion
router.post('/tpdata', validateSensorData('tpdata'), sensorController.ingestTirePressureData);

// POST /api/sensors/hubdata - Hub temperature data ingestion  
router.post('/hubdata', validateSensorData('hubdata'), sensorController.ingestHubTemperatureData);

// POST /api/sensors/device - GPS & device status data ingestion
router.post('/device', validateSensorData('device'), sensorController.ingestDeviceStatusData);

// POST /api/sensors/state - Lock state data ingestion
router.post('/state', validateSensorData('state'), sensorController.ingestLockStateData);

// POST /api/sensors/raw - Generic raw sensor data ingestion (for any sensor type)
router.post('/raw', sensorController.ingestRawSensorData);

// GET /api/sensors/queue/stats - Get sensor processing queue statistics
router.get('/queue/stats', sensorController.getQueueStats);

// POST /api/sensors/queue/process - Manually trigger queue processing (admin only)
router.post('/queue/process', sensorController.processQueue);

module.exports = router;
