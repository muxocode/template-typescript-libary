export class StringHelper{
    ToNumber(str:string, valueDefault=0){
        let value=valueDefault;
        try{
            value= Number(str) || valueDefault;
        }catch{

        }

        return value;
    }
}