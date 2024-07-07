import React, { useEffect, useContext } from 'react'
import { UserDataContext } from '../../../Layout/UserLayout'

const SelectService = ({ selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices }) => {
    
  const services = {
    'General Care': ['Wound dressing', 'Injections', 'Health monitoring', 'Vital signs monitoring', 'Post-surgery care', 'Palliative care', 'Postnatal care', 'Prenatal care', 'Physical therapy', 'Occupational therapy', 'Speech therapy', 'Nutrition counseling', 'Mental health counseling', 'Rehabilitation', 'Chronic disease management', 'Pain management', 'Cancer care', 'Hospice care', 'Home health care', 'Respite care', 'Live-in care', '24-hour care', 'Companionship', 'Transportation', 'Light housekeeping', 'Grocery shopping', 'Meal preparation', 'Medication management', 'Personal hygiene care', 'Mobility assistance', 'Dementia care', 'Alzheimer’s care', 'Stroke care', 'Parkinson’s care', 'Diabetes management', 'Cardiac care', 'Respiratory care', 'Newborn care', 'Child health check', 'Vaccination', 'Mobility assistance', 'Companionship²'],
    'Specialized Care': ['Diabetes management', 'Cardiac care', 'Respiratory care', 'Alzheimer’s care', 'Stroke care', 'Parkinson’s care', 'Cancer care', 'Hospice care', 'Home health care', 'Respite care', 'Live-in care', '24-hour care', 'Companionship', 'Transportation', 'Light housekeeping', 'Grocery shopping', 'Meal preparation', 'Medication management', 'Personal hygiene care', 'Mobility assistance', 'Dementia care', 'Alzheimer’s care', 'Stroke care', 'Parkinson’s care', 'Diabetes management', 'Cardiac care', 'Respiratory care', 'Newborn care', 'Child health check', 'Vaccination', 'Mobility assistance', 'Companionship'],
    'Home Care': ['Meal preparation', 'Medication management', 'Personal hygiene care' , 'Mobility assistance', 'Dementia care', 'Alzheimer’s care', 'Stroke care', 'Parkinson’s care', 'Diabetes management', 'Cardiac care', 'Respiratory care', 'Newborn care', 'Child health check', 'Vaccination', 'Mobility assistance', 'Companionship'],
    'Pediatric Care': ['Newborn care', 'Child health check', 'Vaccination', 'Mobility assistance', 'Companionship'],
    'Elderly Care': ['Dementia care', 'Mobility assistance', 'Companionship', 'Alzheimer’s care', 'Stroke care', 'Parkinson’s care', 'Diabetes management', 'Cardiac care', 'Respiratory care'],
  };

  useEffect(() => {
    if (selectedService && services[selectedService]) {
      setSubServices(services[selectedService]);
      setSelectedSubService("")
    } else {
      setSubServices([]);
    }
  }, [selectedService]);

  return (
    <div className="select-service w-full rounded-20 p-4">
      <div className="mb-4">
        <select 
          className='w-full py-2 px-2 rounded-20 text-sm text-blueketba outline-none focus:ring-1 focus:ring-bluefoot' 
          value={selectedService} 
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Sélectionnez une option:</option>
          {Object.keys(services).map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
      </div>
      <div>
        <select 
          className='w-full py-2 px-2 rounded-20 text-sm text-blueketba outline-none focus:ring-1 focus:ring-bluefoot' 
          value={selectedSubService} 
          onChange={(e) => setSelectedSubService(e.target.value)}
        >
          <option value="">Sélectionnez une option:</option>
          {subServices.map((subService, index) => (
            <option key={index} value={subService}>{subService}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectService
