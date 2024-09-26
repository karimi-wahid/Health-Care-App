import ServiceList from './ServiceList';


function AppService() {  
    return (  
        <div className="p-2 bg-slate-50 grid place-items-center">  
            <h1 className='text-center text-3xl pb-3'>Healthcare Services Management</h1>  
            <ServiceList /> 
        </div>  
    );  
}  

export default AppService;