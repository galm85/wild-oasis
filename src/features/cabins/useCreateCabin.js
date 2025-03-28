import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin(){
    const queryClient = useQueryClient();

    const {mutate:createCabin,isLoading:isCreating} = useMutation({
        mutationFn:createEditCabin,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['cabins']})
            toast.success('New Cabin Created');
        },
        onError:(error =>{
            toast.error(error.message);
        })
    });

    return {isCreating,createCabin}

}