import supabase from "./supabase"

export async function getCabins(){

    const { data, error } = await supabase.from('cabins').select('*');

    if(error){
        console.error(error);
        throw new Error('Cabins can not be loaded')
    }

    return data;

}


export async function deleteCabin(id){

    const { data,error } = await supabase
    .from('cabins')
    .delete()
    .eq('id',id)
  
    if(error){
        console.error(error);
        throw new Error('Cabin can not be deleted')
    }

    return data;
}