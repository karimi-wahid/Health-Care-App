import { useState, useEffect } from 'react';  

const ServiceForm = ({ onAdd, onUpdate, editingIndex, services }) => {  
    // State variable to hold the service details  
    const [serviceDetails, setServiceDetails] = useState({  
        name: '',  
        description: '',  
        price: ''  
    });  

    // Effect to pre-fill the form when editing an existing service  
    useEffect(() => {  
        if (editingIndex !== null) {  
            const serviceToEdit = services[editingIndex]; // Get the service to edit  
            setServiceDetails(serviceToEdit); // Set the form details for editing  
        } else {  
            setServiceDetails({ name: '', description: '', price: '' }); // Reset form for new entry  
        }  
    }, [editingIndex, services]); // Run effect when editingIndex or services change  

     
    const handleChange = (e) => {  
        const { name, value } = e.target;
        setServiceDetails({...serviceDetails, [name]: value}); // Update relevant field in the state  
    };  
  
    const handleSubmit = (e) => {  
        e.preventDefault(); // Prevent page reload on form submission  
        if (editingIndex !== null) {  
            onUpdate(serviceDetails); // Update the service if in edit mode  
        } else {  
            onAdd(serviceDetails); // Add new service if not in edit mode  
        }  
        setServiceDetails({ name: '', description: '', price: '' }); // Reset form after submission  
    };  

    return (  
        <form onSubmit={handleSubmit} className='flex flex-col w-[400px] mb-5 bg-white p-4 rounded-sm'>  
            <input  
                name="name"  
                placeholder="Service Name"  
                value={serviceDetails.name}  
                required 
                onChange={handleChange} 
                className='mb-3 p-3 border border-green-100 border-solid rounded-sm'
            />  
            <input  
                name="description"  
                placeholder="Service Description"  
                value={serviceDetails.description}  
                required 
                onChange={handleChange}
                className='mb-3 p-3 border border-green-100 border-solid rounded-sm' 
            />  
            <input  
                name="price"  
                placeholder="Service Price"  
                type="number"
                value={serviceDetails.price}  
                required
                onChange={handleChange}
                className='mb-3 p-3 border border-green-100 border-solid rounded-sm' 
            />  
            <button type="submit" className='p-3 bg-blue-500 text-white border-none rounded-sm cursor-pointer hover:bg-blue-600'>{editingIndex !== null ? 'Update Service' : 'Add Service'}</button>  
        </form>  
    );  
};  

export default ServiceForm;