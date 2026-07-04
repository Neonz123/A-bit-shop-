import { AppDataSource } from "../data-source";
import  { Order } from "../entity/Order";


export const createOrder = async (userId: number , items: any []) =>{
     const orderRepo = AppDataSource.getRepository(Order);
    
     const order = orderRepo.create({ 
        user: { id: userId }  as any, 
        items, 
     });
     return await orderRepo.save(order);
}   

export const getOrdersByUserId = async (userId: number) =>{

    const orderRepo = AppDataSource.getRepository(Order);
    return await orderRepo.find({
        where: { user: { id: userId } },
        relations: ["items " , "user "], // Include related cart items
    });

};

export const getAllOrders = async () => {
    const orderRepo = AppDataSource.getRepository(Order);
    return await orderRepo.find ({
        relations: ["items", "user"], // Include related cart items and user
    })
}  

