const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truckController');
const authMiddleware = require('../middleware/auth');

// GET /api/trucks - Get all trucks with filters (protected)
router.get('/', authMiddleware, truckController.getAllTrucks);

// GET /api/trucks/realtime/locations - Get real-time truck locations (GeoJSON) (protected)
router.get('/realtime/locations', authMiddleware, truckController.getRealtimeLocations);

// GET /api/trucks/:id - Get specific truck details (protected)
router.get('/:id', authMiddleware, truckController.getTruckById);

// GET /api/trucks/:id/tires - Get truck tire pressures (protected)
router.get('/:id/tires', authMiddleware, truckController.getTruckTires);

// GET /api/trucks/:id/history - Get truck location history (protected)
router.get('/:id/history', authMiddleware, truckController.getTruckLocationHistory);

// GET /api/trucks/:id/alerts - Get truck alerts (protected)
router.get('/:id/alerts', authMiddleware, truckController.getTruckAlerts);

// PUT /api/trucks/:id/status - Update truck status (protected)
router.put('/:id/status', authMiddleware, truckController.updateTruckStatus);

// PUT /api/trucks/:id/alerts/:alertId/resolve - Resolve truck alert (protected)
router.put('/:id/alerts/:alertId/resolve', authMiddleware, truckController.resolveAlert);

// PUT /api/trucks/bulk/status - Bulk update truck status (protected)
router.put('/bulk/status', authMiddleware, truckController.bulkUpdateTruckStatus);

module.exports = router;