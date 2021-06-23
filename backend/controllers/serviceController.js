const Service = require('../models/serviceModel.js')
const asyncHandler = require('express-async-handler')

const getAllServices = asyncHandler(async (req, res, next) => {
 Service.getAll((err, data) => {
  if (err) return next(new Error(err.message))
  return res
   .status(200)
   .json({ data, message: 'services', type: 'success', success: true })
 })
})
const getById = asyncHandler(async (req, res, next) => {
 Service.getById(req.params.id, (err, data) => {
  if (err) return next(new Error(err.message))
  if (data.length <= 0)
   return res.status(200).json({
    data,
    message: 'error accured no user found...',
    type: 'warning',
    success: false,
   })

  return res
   .status(200)
   .json({ data, message: 'service', type: 'success', success: true })
 })
})
const createService = asyncHandler(async (req, res, next) => {
 const { SERVICE_DESCR, HIERARCHIE_ID, SERVICE_DEPEND } = req.body

 if (
  SERVICE_DESCR == undefined ||
  SERVICE_DESCR.trim() == '' ||
  HIERARCHIE_ID == undefined ||
  HIERARCHIE_ID == '' ||
  SERVICE_DEPEND == '' ||
  SERVICE_DEPEND == undefined
 ) {
  return next(new Error('there are an uncompleted field'))
 }
 const newService = { SERVICE_DESCR, HIERARCHIE_ID, SERVICE_DEPEND }
 Service.create(newService, (err, data) => {
  if (err) return next(new Error(err.message))
  return res.status(201).json({
   data,
   message: 'created successfuly...',
   type: 'success',
   success: true,
  })
 })
})
const updateService = asyncHandler(async (req, res, next) => {
 Service.getById(req.params.id, (err, data) => {
  if (err) return next(new Error('no user found with such id'))
  console.log('SERVICE GET getById IN UPDATEDsERVICE', data[0])
  data[0].SERVICE_DESCR = req.body.SERVICE_DESCR
   ? req.body.SERVICE_DESCR
   : data[0].SERVICE_DESCR
  data[0].HIERARCHIE_ID = req.body.HIERARCHIE_ID
   ? req.body.HIERARCHIE_ID
   : data[0].HIERARCHIE_ID

  console.log('SERVICE GET getById AFTER UPDATE', data[0])
  Service.update(data[0], (err, data) => {
   if (err) return next(new Error(err.message))

   return res.status(201).json({
    data,
    message: 'updated successfuly...',
    type: 'success',
    success: true,
   })
  })
 })
})
const deleteService = asyncHandler(async (req, res, next) => {
 Service.delete(req.params.id, (err, data) => {
  if (err) return next(new Error(err.message))

  return res.status(201).json({
   data,
   message: 'deleted successfuly...',
   type: 'success',
   success: true,
  })
 })
})

module.exports = {
 getAllServices,
 getById,
 createService,
 updateService,
 deleteService,
}
