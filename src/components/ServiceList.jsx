import React, { useState } from 'react';  
import ServiceForm from './ServiceForm';

const ServiceList = () => {  
    const [services, setServices] = useState([]); // State variable to hold the list of services  
    const [editingIndex, setEditingIndex] = useState(null); // State to track the service being edited  

    // Function to add a new service  
    const handleAddService = (newService) => {  
        setServices([...services, newService]); // Update services by adding the new service  
    };  

    // Function to update an existing service  
    const handleUpdateService = (updatedService) => {  
        const updatedServices = services.map((service, index) => {  
            return index === editingIndex ? updatedService : service; // Update the specific service  
        });  
        setServices(updatedServices); // Set the updated services list  
        setEditingIndex(null); // Reset editing index after updating  
    };  

    // Function to initiate editing on a selected service  
    const handleEditService = (index) => {  
        setEditingIndex(index); // Set the editing index to the service being edited  
    };  

    // Function to delete a service  
    const handleDeleteService = (index) => {  
        const updatedServices = services.filter((_, i) => i !== index); // Remove the service from the list  
        setServices(updatedServices); // Update the services list  
    };  

    return (  
        <div className='grid grid-cols-1'>  
            <ServiceForm   
                onAdd={handleAddService}
                onUpdate={handleUpdateService}
                editingIndex={editingIndex}
                services={services}
            />  
            <ul className='flex flex-wrap justify-between'>  
                {services.map((service, index) => (  
                    <li key={index} className='flex justify-around flex-col w-60 mr-5 mb-3 p-4 text-center bg-white rounded-sm shadow-lg '>  
                        <div>
                            <h1 className='font-bold'>{service.name}</h1>
                            <p>{service.description}</p>
                            <p>$ {service.price}</p>    
                        </div>  
                        <div>
                            <button onClick={() => handleEditService(index)} className='p-3 m-3 text-white bg-green-500 hover:bg-green-400 border border-solid border-green-400'>Edit</button>  
                            <button onClick={() => handleDeleteService(index)} className='p-3 m-3 text-white bg-green-500 hover:bg-green-400 border border-solid border-green-400'>Delete</button>
                        </div>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default ServiceList;