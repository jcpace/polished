const express = require('express')
const router = express.Router()
const appointmentModel = require('./appointment.model')

router.post('/addappointment', (req, res) => {
  console.log('within appointment POST')
  appointmentModel.addAppointment(req, res)
})
router.post('/findartists', (req, res) => {
  console.log('withing get artist')
  appointmentModel.findAvailableArtists(req, res)
})
router.post('/getappointment', (req, res) => {
  console.log('within appointment GET')
  appointmentModel.getAppointments(req, res)
})
router.post('/clientappointments', (req, res) => {
  console.log('within client appt GET')
  appointmentModel.clientAppointments(req, res)
})
router.put('/update', (req, res) => {
  console.log('within appointment PUT update')
  appointmentModel.updateAppointment(req, res)
})
router.delete('/delete', (req, res) => {
  console.log('within USER PUT update')
  appointmentModel.deleteAppointment(req, res)
})

module.exports = router
