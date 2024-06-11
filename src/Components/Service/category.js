import { data } from "./Service";
   
export const category =()=>{
    const categoryRecord = data("mydata");
    const categoryBox = categoryRecord.map((record)=>{
        return record.category
    })
    const categoryList = new Set(categoryBox);
    return Array.from(categoryList)
}