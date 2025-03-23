import supabase, { supabaseUrl } from "./supabase"

export async function getCabins(){

    const { data, error } = await supabase.from('cabins').select('*');

    if(error){
        console.error(error);
        throw new Error('Cabins can not be loaded')
    }

    return data;

}

export async function createEditCabin(newCabin,id=null){

    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    console.log(hasImagePath);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','');
    const imagePath = hasImagePath ? newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Create / Edit a Cabin
    let query = supabase.from('cabins');

    // A) create a cabin
    if(!id) query = query.insert([{...newCabin,image:imagePath}])
    
    // B) edit a cabin
    if(id) query = query.update({...newCabin,image:imagePath}).eq("id",id)

    const { data, error } = await query.select().single()

    if(error){
        console.error(error);
        throw new Error('Cabin can not be created')
    }

    // 2. Upload cabin image
    if(hasImagePath) return data;
    const { error:storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

    //3. Delete cabin if an error upload image
    if(storageError){
       await supabase.from('cabins').delete().eq('id',data.id)
       console.log(storageError)
       throw new Error('Cabin image could not created');
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