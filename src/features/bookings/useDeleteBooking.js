import { useMutation, useQueryClient } from "@tanstack/react-query";
import {deleteBooking as deleteBookingApi} from '../../services/apiBookings';
import toast from "react-hot-toast";

export function useDeleteBooking(){

    const queryClient = useQueryClient();

    const {mutate:deleteBooking,isLoading:isDeletingBooking} = useMutation({
        mutationFn:(id)=>deleteBookingApi(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['bookings']})
            toast.success('Booking delete successfully');
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })

    return {deleteBooking,isDeletingBooking}
}