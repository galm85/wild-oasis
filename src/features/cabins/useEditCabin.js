import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient = useQueryClient();

    const {mutate:editCabin,isLoading:isEditing} = useMutation({
        mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['cabins']})
          toast.success('Cabin edited');
        },
        onError:(error =>{
          toast.error(error.message);
        })
      });

      return {isEditing,editCabin}

}